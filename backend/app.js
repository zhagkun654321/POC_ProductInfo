const express = require('express');
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Header",
        "Origin, X-Request-Width, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Method",
        "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
});

app.use("/api/posts",(req, res, next) => {
    const post = req.body;
    console.log("req.body", req.body);
    // console.log("title",req.body.title);
    // console.log("content",req.body.content);
    res.status(201).json({
        message: 'Post added successfully'
    }); 
});

app.use((req, res, next) => {
    console.log('First middleware');
    next();
});

app.use((req, res, next) => {
    res.send('Hello from express');
});

module.exports = app;