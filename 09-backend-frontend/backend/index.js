import express from 'express';
import cors from 'cors';

const app = express();

// this allows all origins to call this API
// a CORS configuration is needed because the API
// and the frontend are running on different ports
// this is seen as different domains, and the communication
// between them is restricted by default by the browser
// More about CORS: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
//
// Adding this middleware sets the
// `Access-Control-Allow-Origin` header to `*`, which allows calls from
// all domains, this is not really best practice (since your app could
// be exploited if it were deployed in the real world)
// ideally, we'd only allow the domain on which our frontend runs on
// and specify it here
app.use(cors());

app.get('/phone-number', (req, res) => {
    // the practice of replacing a couple characters
    // in a string of text which can be sensitive in order
    // to reduce the risk of a data theft is called
    // obfuscation
    res.status(200).json({ phoneNumber: '+40******890' });
});

app.listen(3001, () => {
    console.log('has started');
});