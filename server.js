const { log } = require('console');
const express = require('express');
const https = require('https');
require('dotenv').config()
const app = express();

app.get('/', (req, res) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${process.env.city}&appid=${process.env.api_key}`
    https.get(url, (response) => {
        console.log(response.statusCode) 
        response.on('data', (data) => {
            console.log(JSON.parse(data))
        })
    })
    res.send("this is for the server")
})
const port = process.env.port || 8080;
app.listen(port, () => {
    console.log(`server is up and running on port ${port}`);
   
});