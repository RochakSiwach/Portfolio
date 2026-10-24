require("dotenv").config();
const express = require('express')
const server = express()
const port = process.env.PORT || 3001
const cors = require('cors')

server.use(express.json())
server.use(cors())

const connectingMongoDb = require('./config/db')
connectingMongoDb()


const mainRoute = require("./routes/mainRoute")

server.use(mainRoute)

server.use((error, req, res, next) => {
  console.error(error);

  res.status(500).json({
    success: false,
    message: "Internal server error",
  });
});



server.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`)
})
