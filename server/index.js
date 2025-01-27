const express = require('express');
const cors = require('cors');
const messageRoutes = require('./routes/contact');
require('dotenv').config();

const app = express();

// CORS configuration
const allowedOrigins = ["https://smgroups.vercel.app"];
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.options("*", cors());

// Routes
app.use('/api', messageRoutes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



// const express = require('express');
// // const mongoose = require('mongoose');
// const messageRoutes = require('./routes/contact');
// require('dotenv').config();

// const app = express();
// const cors = require('cors');

// const allowedOrigins = ["https://smgroups.vercel.app"];
// app.use(
//   cors({
//     origin: allowedOrigins,
//     methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
//     credentials: true, // Allow cookies if required
//   })
// );


// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.options("*", cors());

// // Define routes
// app.use('/api', messageRoutes);

// // mongoose.connect(process.env.DB_URI, {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// // })
// //   .then(() => {
// //     console.log('MongoDB connected');
// //   })
// //   .catch(err => {
// //     console.error('MongoDB connection error:', err);
// //   });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
