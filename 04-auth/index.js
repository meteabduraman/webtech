const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const port = 3000;

// password should be hashed and salted
const db = [{ username: 'mete', password: 'nete' }];

// hashing of the password should happen first during the registration
// process (creation of the account)
// we can hash stuff with Node JS's `crypto` module like below:

// const crypto = require('crypto'); // this should be at the beginning of the file in the imports section
// const hash = crypto.createHash('sha256'); // sha256 is a hashing algorithm
// hash.update(password); // here we provide the plain password
// const digest = hash.digest('hex') // gets a hexadecimal representation of the hashed password

// this digest variable will actually hold the hashed password, and this is what we need to store in the DB
// every time we need to check the password afterwards, it will be necessary for us to compute the hash again using the same algorithm, like above

app.use(express.json());

app.post('/authenticate', (req, res) => {
    // body: { username: 'mete', password: 'nete' } 
    const username = req.body.username;
    const password = req.body.password;

    // go to the database and select the user where the combination of username and password is found
    const foundUser = db.find((user) => user.username === username && user.password === password);

    if (foundUser) {
        // thisismysecret1234 should not be added in the code, rather in environment variables
        // or other secret management solutions
        const token = jwt.sign({ username: foundUser.username }, 'thisismysecret1234');
        res.status(200).json({ token });
        return;
    }

    res.status(400).json({ message: 'Invalid credentials' });
});

// say your API also manages direct messages (DMs)
// it makes sense that only authenticated users (ones which have a valid access token)
// should be able to access them
// here's an example on how to enforce that
app.get('/direct-messages', (req, res) => {
    if (!req.headers.authorization) {
        // if the header (Access Token) does not exist, then we respond with 401 Unauthorized
        res.status(401).json({ message: 'Missing authorization' });
        return;
    }

    // if exists, the authorization header will be a string like 'Bearer eyJkd...'
    // we need to extract the token value, without 'Bearer '
    const token = req.headers.authorization.split(' ')[1];

    let tokenContents;

    try {
        // here we should verify using the same secret
        tokenContents = jwt.verify(token, 'thisismysecret1234');
    } catch (err) {
        // here it seems that the token was either wrong or
        // not signed using our secret
        res.status(401).json({ message: 'Wrong authorization' });
        return;
    }

    // the tokenContents variable will now hold the `username` we added
    // during login

    // ...
    // here we should add logic to fetch the direct messages for the username in the access token
    // ...

    // and send them in the response where the empty array is below
    res.status(200).json({ dms: [] });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});