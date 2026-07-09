const dotenv = require('dotenv').config() // making .env file available
const dns = require("node:dns");

dns.setServers(["8.8.8.8", "1.1.1.1"])

const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')

const app = express()

mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on('connected', ()=>{
    console.log(`Connected to MongoDB ${mongoose.connection.name}`)
})


app.use(morgan('dev'))

app.get("/", async (req, res) => {
  res.render("home.ejs");
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});