## Authentication and Authorization in Express APIs

Depending on the needs of your application, you might have to implement **authentication** and **authorization** processes. Not all applications have them, and that's alright. (e.g. a Weather app will probably be able to tell the weather without knowing its user's *identity*).

**Authentication** is a process of establishing the *identity* of a user which makes use of your application. E.g. in an Online learning plaform, the application should know who the user is prior to displaying course information.

**Authorization** is a process of establishing whether the *identified* user is allowed to perform certain activities. E.g. in an Online learning plarform, the application should not allow students to extend the deadline of an assignment, but this should be an allowed activity for teachers.

> [> More about authentication vs. authorization](https://auth0.com/docs/get-started/identity-fundamentals/authentication-and-authorization)

When it comes to this process, there are a bunch of ways we can implement them, but what we'll talk about is the **Bearer Token** method.

The word **bearer** implies that a *request bears a token* which identifies the user who initiated that request. Commonly, the form of a **Bearer Token** is a **JWT (JSON Web Token)** which is an open standard ([RFC 7519](https://datatracker.ietf.org/doc/html/rfc7519)).

A **JWT** is practically a string which is the result of the Base64 encoding of the *header* and *payload*, along with a *secret*.

> **Never publish secrets, keys or credentials in repositories, whether they be private or public**, if you want to use a secret, key or credential, consider looking into [dotenv](https://www.npmjs.com/package/dotenv), and make sure `.env` is present in your `.gitignore` file. If you accidentally pushed a secret, key or credential in a repository (on any branch), delete the repository entirely and create a new one from scratch.

Before encoding a token in Base64, it will get signed, via a signature algorithm. This will help to verify if the contents of the JWT have not been meddled with.

Optionally, the contents can also be encrypted, if sensitive information should make part of the payload.

> [> More about JWTs on jwt.io](https://jwt.io/introduction)

> [> More about cryptographic algorithms used with JWTs](https://www.langton.cloud/jwt-a-cryptographic-love-story-with-security-vulnerabilities-and-a-state-of-confusion/)

After logging in in an application, the client will receive this JWT, which should make part of all future requests, within the `Authorization` header:

```
Content-Type: application/json
Authorization: Bearer eyJhbGc...
```

> Note that the `Bearer` keyword must also be concatenated at the beginning of the token, along with a space.

While using the **Bearer Token** strategy, the client is responsible for refreshing the token if its nature is to expire within a set amount of time (practice which is recommended).

Although the subject is interesting and in your projects you should probably have an authentication and authorization layer, the recommendation is to spend time on the actual logic of the application instead of implementing these authentication processes from scratch. Third party libraries or providers can easily be used in the project. But if you feel like you have time and are willing to take on this challenge, feel free to do it.

## Monitoring your Express API

Monitoring is also an important aspect of developing a robust API solution, since without it, we would have no idea if our application fails, how many times it fails, for whom it fails, etc. This can be achieved easily by introducing a 3rd party library which handles all technicalities for us.

One of such libraries, for JS, is **winston** (https://github.com/winstonjs/winston).

The simplest way of adding logging to our application would be to add `console.log`/`console.error`/`console.warn` statements throughout the execution of our controllers, although this will not provide the control and granularity that **winston** or other 3rd party libraries will.

> Be careful of the contents of the logs. They should not contain sensitive information, and should be concise, but sufficient for us to be able to debug what's going on for a certain use-case.

Logfiles can quickly build up a lot of memory on the hardware on which our application runs. If our application is used by millions of users, imagine the huge amount of logs. Consider this whenever you add a log statement (preferably avoid logging in loop structures or others which might increase the memory usage).

## In the lab

We discussed aspects of authentication and authorization, then proceeded to implement an Express API endpoint which will need an Access Token to perform a database transaction (fetching the account associated with the User ID present in the token's payload).

This was naively implemented, systems generally use standalone applications for the purposes of Token generation or signature verification.

What we did:
1. initialized our new `npm` package with `npm init -y`
2. installed `express` with `npm i express`
3. installed `sequelize` and `sqlite3` with `npm i sequelize sqlite3`
4. defined our `Account` model in `/db/Account.model.js` which stores a UUID as primary key and a holder name
5. defined a service for the `Account` model to fetch an account by the primary key in `/db/service.js`
6. installed `express-jwt` with `npm i express-jwt`, a library which will help us verify the signature of the JWT passed in the headers of the requests
7. added the `expressjwt` middleware with `app.use()` and provided it with a `secret` and `algorithm`
8. defined a `GET /account` endpoint which would call the service function taking the user ID from the `req.auth`, under the `sub` key.
9. added some `console.log` statements throughout the execution of the controller

In order to test this, we went to [jwt.io](https://jwt.io/) and in the Debugger section, we modified the payload of the token so that it would look like:

```json
{
    "sub": "80f23616-f9f4-41f8-ba48-3ec4bdf03f81"
}
```

The UUID passed there is an actual UUID we inserted in the database in the `migrate()` function.

We also modified the secret from the Verify Signature section to the same one we declared in the `expressjwt` middleware (in our case `'my-secret-which-should-actually-be-a-secret-from-a-.env-file'`), and we made sure the algorithm was the same (in our case `HS256`).

We copied the Encoded token on the left side, and added it in the `Authorization` header, along with the `Bearer <encoded-token>` keyword and space.