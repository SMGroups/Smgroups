// ================= PIN DEFINITIONS =================
#define RELAY_PIN 26        // GPIO26 → BC547 → Omron MY2N Relay
#define SIM800L_RX 27       // ESP32 RX pin for SIM800L (30-pin board friendly)
#define SIM800L_TX 25       // ESP32 TX pin for SIM800L (30-pin board friendly)

// ================= OWNER NUMBER ====================
const String OWNER = "+916379404806";   // உங்கள் mobile number (country code உடன்)

// ================= GLOBAL VARIABLES =================
bool motorState = false;
bool awaitingSmsBody = false;
String smsSender = "";

// ================= SETUP ===========================
void setup() {
  Serial.begin(9600);
  Serial2.begin(9600, SERIAL_8N1, SIM800L_RX, SIM800L_TX); // SIM800L UART

  pinMode(RELAY_PIN, OUTPUT);
  motorOFF();   // Power ON ஆகும்போது motor OFF

  delay(5000);  // SIM800L network ready ஆக wait

  // GSM initial commands
  sendCmd("AT");
  sendCmd("AT+CLIP=1");          // Caller ID enable
  sendCmd("AT+CMGF=1");          // SMS text mode
  sendCmd("AT+CNMI=2,2,0,0,0");  // Direct SMS receive

  // Power ON confirmation SMS
  sendSMS("System Ready. Motor OFF");
}

// ================= LOOP ============================
void loop() {
  while (Serial2.available()) {
    String line = Serial2.readStringUntil('\n');
    line.trim();
    if (line.length() == 0) {
      continue;
    }

    Serial.println(line);

    if (awaitingSmsBody) {
      String msg = line;
      msg.trim();
      msg.toUpperCase();
      if (smsSender == OWNER) {
        processSMS(msg);
      }
      awaitingSmsBody = false;
      smsSender = "";
      continue;
    }

    // ---------- CALL CONTROL (MISSED CALL) ----------
    if (line.indexOf("+CLIP:") >= 0) {
      String sender = extractNumber(line);
      if (sender == OWNER) {
        sendCmd("ATH"); // Hang up to create missed call behavior
        toggleMotor();
      }
      continue;
    }

    // ---------- SMS CONTROL ----------
    if (line.indexOf("+CMT:") >= 0) {
      smsSender = extractNumber(line);
      awaitingSmsBody = true;
    }
  }
}

// ================= SMS PROCESS =====================
void processSMS(String msg) {
  if (msg == "ON") {
    motorON();
    sendSMS("Motor ON");
  } else if (msg == "OFF") {
    motorOFF();
    sendSMS("Motor OFF");
  } else if (msg == "STATUS") {
    sendSMS(motorState ? "Motor is ON" : "Motor is OFF");
  } else {
    sendSMS("Invalid Command");
  }
}

// ================= MOTOR CONTROL ===================
void motorON() {
  digitalWrite(RELAY_PIN, HIGH);   // Relay ON
  motorState = true;
}

void motorOFF() {
  digitalWrite(RELAY_PIN, LOW);    // Relay OFF
  motorState = false;
}

void toggleMotor() {
  if (motorState) {
    motorOFF();
    sendSMS("Motor OFF (Call)");
  } else {
    motorON();
    sendSMS("Motor ON (Call)");
  }
}

// ================= GSM FUNCTIONS ===================
void sendSMS(String text) {
  Serial2.println("AT+CMGS=\"" + OWNER + "\"");
  delay(500);
  Serial2.print(text);
  delay(500);
  Serial2.write(26);   // CTRL + Z
}

void sendCmd(String cmd) {
  Serial2.println(cmd);
  delay(1000);
}

String extractNumber(String data) {
  int firstQuote = data.indexOf('"');
  if (firstQuote < 0) {
    return "";
  }
  int secondQuote = data.indexOf('"', firstQuote + 1);
  if (secondQuote < 0) {
    return "";
  }
  return data.substring(firstQuote + 1, secondQuote);
}
