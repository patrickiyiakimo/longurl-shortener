require("dotenv").config();
const db = require("./config/db");

const app = require("./app");

app.get("/", (req, res) => {
  res.send("hello world");
});

const server = async () => {
  try {
    await db();
    app.listen(8000, () => {
      console.log("server is running on port 8000");
    });
  } catch (error) {
    console.error(error.message);
  }
};

server();


// const mongoose = require("mongoose");

// const db = async () => {
//   try {
//     const mongoData = process.env.DATABASE_URL;

//     // Connect to MongoDB
//     await mongoose.connect(mongoData);

//     // Handle connection events
//     mongoose.connection.on("error", (error) => {
//       console.error("Database connection error:", error);
//     });

//     mongoose.connection.once("open", () => {
//       console.log("Database is connected");
//     });
//   } catch (error) {
//     console.error("Failed to connect to the database:", error.message);
//     // Exit process with failure code
//     process.exit(1);
//   }
// };

// module.exports = db;
