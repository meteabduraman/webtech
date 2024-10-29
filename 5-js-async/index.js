const express = require('express');
const transfer = require('../4-js-intro/index.js');
const bodyParser = require('body-parser');
const app = express();

// this is a middleware (all requests pass through this function)
// regardless of the endpoint they're calling
// used to automatically parse the request body from JSON
app.use(bodyParser.json());

app.post('/transfer', (req, res) => {
    try {
        // we call the transfer function we implemented
        // in 4-js-intro and pass it the data from the body
        // of the request
        // this is wrapped in a try-catch statement to handle
        // the validation errors it includes

        // TODO this should also handle a limit check
        // which will be done async via another API
        transfer({
            sourceIban: req.body.sourceIban,
            destinationIban: req.body.destinationIban,
            amount: req.body.amount,
            beneficiaryName: req.body.beneficiaryName,
        });

        // if everything is successful, respond with status 200
        res.status(200).json({});
    } catch (e) {
        // if an error happens, respond with 400 and add the error message
        // to the response
        res.status(400).json({ error: e.message });
    }
});

// start the api on port 3001
app.listen(3001, () => {
    console.log('has started');
});