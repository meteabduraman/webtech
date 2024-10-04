// quick sneak peek, we'll discuss servers in depth
// in the future labs

// import express, library helping us build node js APIs
const express = require('express');
const app = express();

// define the endpoints of the API
// in this case, our API will know how to handle a GET /say-hello request
app.get('/say-hello', (req, res) => {
    console.log('someone said hello');

    // API should always respond with 200 and the plaintext 'Hello back'
    // the response body is usually JSON, not plaintext, but this works too
    res.status(200).send('Hello back');
});

// define another endpoint of the API
// GET /accounts should respond with a collection of accounts
app.get('/accounts', (req, res) => {
    // instead of responding with plaintext
    // a JSON response can be sent simply via `.json()`
    res.status(200).json({
        accounts: [{
            accountName: 'my account',
        }],
    });
});

// server is started on localhost port 3000
// localhost:3000
// our endpoints will be concatenated to the base URL
// resulting in localhost:3000/say-hello
app.listen(3000, () => {
    console.log('has started');
});