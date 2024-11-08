const express = require('express');
const transfer = require('./transfer.js');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// GET /limit res: 200 OK { limit: { value: number, currency: string } }
app.get('/limit', (req, res) => {
    res.status(200).json({ limit: { value: 10, currency: 'RON' } });
});

// POST /transfer req-body: { sourceIban: string, destinationIban: string, beneficiaryName: string, amount: number }
// res: 200 OK (if ok), 400 Bad Request (if limit is reached), 500 Internal Server Error (if something else happens)
app.post('/transfer', async (req, res) => {
    try {
        // fetch limit and store in variable
        const response = await fetch('http://localhost:3001/limit');
        // parse the body of the response from JSON
        const limitResponse = await response.json();
        const limitValue = limitResponse.limit.value;

        if (req.body.amount > limitValue) {
            throw new Error('Insufficient limit.');
        }

        transfer({
            sourceIban: req.body.sourceIban,
            destinationIban: req.body.destinationIban,
            beneficiaryName: req.body.beneficiaryName,
            amount: req.body.amount,
        });

        res.status(200).json({ status: 'Success' });
    } catch(e) {
        if (e.message === 'Insufficient limit.') {
            res.status(400).json({ error: e.message });
            // res.status().json() doesn't mean we actually end the execution of the function
            // we added this return; here so that line 44 is not executed
            // this could have been achieved with an "else" too
            return;
        }

        res.status(500).json({ error: 'Error occurred.' });
    }
});

app.listen(3001, () => {
    console.log('has started');
});