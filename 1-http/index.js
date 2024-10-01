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

// server is started on localhost port 3000
// localhost:3000
// our endpoints will be concatenated to the base URL
// resulting in localhost:3000/say-hello
app.listen(3000, () => {
    console.log('has started');
});