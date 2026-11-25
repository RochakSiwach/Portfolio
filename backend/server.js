
 
require("dotenv").config();

const express = require("express");
const cors = require("cors");

const server = express();
const port = process.env.PORT || 3001;

// Middlewares
server.use(express.json());
server.use(cors());

// Database connection
const connectingMongoDb = require("./config/db");
connectingMongoDb();

// Routes
const githubRoute = require("./routes/githubRoute");


server.use("/api/github", githubRoute);

// Global error handler
server.use((error, req, res, next) => {
    console.error(error);

    res.status(500).json({
        success: false,
        message: "Internal server error"
    });
});



server.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`)
})
