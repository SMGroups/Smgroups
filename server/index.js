const express = require('express');
// const mongoose = require('mongoose');
const messageRoutes = require('./routes/contact');
require('dotenv').config();

const app = express();
const cors = require('cors');
const allowedOrigins = [
  "https://smgroups-bkiuolose-smgroups-projects.vercel.app",
  "https://smgroups.vercel.app/"
];

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
    credentials: true, // Allow credentials if needed (e.g., cookies)
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Define routes
app.use('/api', messageRoutes);

// mongoose.connect(process.env.DB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => {
//     console.log('MongoDB connected');
//   })
//   .catch(err => {
//     console.error('MongoDB connection error:', err);
//   });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
