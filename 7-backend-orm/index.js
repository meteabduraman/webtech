import express from 'express';
import { getLimitByIban, migrate } from './db/service.js';
const app = express();

// although this is an async function
// we let it execute without awaiting its result
// meaning that its execution would be in parallel
// this is fine for this use case
// but we have to pay attention for other use cases
migrate();

// notice the `:iban` in the endpoint name, this is called
// a path param (parameter passed in the path of the endpoint)
// we used this because we needed the IBAN and we could not pass
// a body to a GET request, this is also a valid thing to do

// more about path params in Express docs: https://expressjs.com/en/guide/routing.html
// (search for Route parameters) 
app.get('/:iban/limit', async (req, res) => {
    try {
        const iban = req.params.iban;
        const limit = await getLimitByIban(iban);

        // handle the nasty case first
        // the !limit condition is a null-check
        // synonym with limit === undefined || limit === null,
        // or === to any other falsy value
        // https://developer.mozilla.org/en-US/docs/Glossary/Falsy
        if (!limit) {
            res.status(404).json({ error: 'IBAN was not found.' });
            // return needed because we want the execution
            // to stop once the status has been added to the response
            return;
        }

        res.status(200).json({ limit: { value: limit.value } });
    } catch (e) {
        res.status(500).json({ error: 'An error occurred.' });
    }
});

app.listen(3001, () => {
    console.log('has started');
});