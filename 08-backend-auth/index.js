import express from 'express';
import { expressjwt } from 'express-jwt';
import { migrate, findAccountById } from './db/service.js';

const app = express();

// this creates the tables and populates the DB in memory
migrate();

// this tells express that all requests should pass through
// this middleware, where we invoke expressjwt to verify
// the signature of the JWT received via the passed secret
// and the passed algorithm
// there are other algorithms we can use, this one is HMAC SHA256
app.use(expressjwt({
    secret: 'my-secret-which-should-actually-be-a-secret-from-a-.env-file',
    algorithms: ['HS256'],
}));

app.get('/accounts', async (req, res) => {
    // if the request has a valid JWT, the payload will be found
    // in req.auth (this property is populated by expressjwt)
    // we care about the `sub` here, which is a common claim in JWTs
    // stands for `Subject` (to whom the token refers to)
    console.log(`user id: ${req.auth.sub}`);
    const account = await findAccountById(req.auth.sub);

    // if the request does not contain a JWT, then
    // expressjwt would automatically respond with status code 401
    // so we don't need to handle that anymore

    if (!account) {
        console.log(`id ${req.auth.sub} was not found`);
        res.status(404).json({ error: 'Not found' });
        return;
    }

    console.log(`id ${req.auth.sub} was found`);
    res.status(200).json({ account });
});

app.listen(3001, () => {
    console.log('has started');
});