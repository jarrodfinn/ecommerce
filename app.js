const express = require('express')
const mongoose = require('mongoose');
require("dotenv").config();
//import routes
const userRoutes = require('./routes/user')

//app
const app = express();

//db connection
mongoose.connect(
  process.env.DATABASE,
  {
    useNewUrlParser: true,
    useCreateIndex: true
  }
)
.then(() => console.log('DB Connected'))
 
mongoose.connection.on('error', err => {
  console.log(`DB connection error: ${err.message}`)
});
 

//routes middleware
app.use("/api", userRoutes); 

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});


// load env variables
const dotenv = require('dotenv');
dotenv.config()
 