## About authentication

Authentication is an important part of the functionality of most apps. Basically it is the answer to the question *Who?* when talking about either requesting resources from an API.

There are multiple *schemes* of authentication, one of the more basic ones is using an `API Key` to validate that the request originated from someone the API has provided a custom key for.

```mermaid
sequenceDiagram
    actor User
    participant Weather Forecasts API

    User->>+Weather Forecasts API: I want to use your service for weather forecasts
    Weather Forecasts API->>-User: Okay! If you pay a monthly fee of 5 EUR you'll get a key you can use for it!
    User-->>+Payment Gateway: performs payment
    activate Payment Gateway
    Payment Gateway->>Weather Forecasts API: This user has successfully payed 5 EUR!
    deactivate Payment Gateway
    activate Weather Forecasts API
    Weather Forecasts API->>User: Thanks! I give you the key.
    deactivate Weather Forecasts API
```

The API Key received is similar to a password which the `User` needs to attach in the `Authorization header` of all the requests sent to `Weather Forecasts API`. This way, the forecast service knows that it originates from someone which payed the fee. You can also see why if other people have knowledge of the key, it's bad, as they can use the service without having payed for it.

### Token-based authentication

One of the most used schemes, which we will also implement involves an `Access Token`, which is also just a string that the client needs to attach on the request in the `Authorization header`. It's just that the management and manner of generation is different.

It's usually the result of an authentication process in which the user has been `identified` (e.i. exists in the database and we found them via e.g. a combination of the username and the password).

After identification, the authentication service creates a token, usually, in the form of a `JWT` (JSON Web Token). This is a standard that most apps use. This is signed and optionally encrypted and then sent back to the client.

```mermaid
sequenceDiagram
    actor User
    participant Instagram Authentication API
    participant Users@{ "type": "database" }

    User->>+Instagram Authentication API: I want to log in with my email and password
    Instagram Authentication API->>+Users: Lookup the combination of email and password
    deactivate Instagram Authentication API
    Users->>-Instagram Authentication API: Here are the results of the query
    alt combination is found
        Instagram Authentication API->>+Instagram Authentication API: creates a JWT
        Instagram Authentication API->>User: Here's your token!
    else combination not found
        Instagram Authentication API->>-User: Invalid credentials, sorry!
    end
```

An example of how a JWT or `Access Token (AT)` looks like:
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzdHVkZW50MSIsIm1lc3NhZ2UiOiJpZiB5b3UncmUgYWJsZSB0byBzZWUgdGhpcyBtZXNzYWdlLCB5b3UgZ2V0IDEgYm9udXMgcG9pbnQifQ.mvj4Pq1qcN_mdQurDG_qj28xwCtKjAPWNkh7rwWylcQ
```

Inside it, usually *identifiers of the user* (whom the token refers to) are stored.

These tokens usually expire. The frontend app is in general responsible for refreshing them every once in a while, if the user still interacts with the app. If they don't interact, usually apps display a dialog with a message along the lines of: "Are you still there? If not, we'll log you out." (aka, if you don't interact with the app anymore, your AT will expire and we will not refresh it anymore).

In the frontend, they are usually stored in browser level, in `Local Storage`, so they are available for every request that a user can perform in the app.

> Note: **NEVER store the passwords of users in clear in the database! They need to be hashed and salted first!** [More about hashing](https://www.codecademy.com/resources/blog/what-is-hashing) and [More about salting](https://auth0.com/blog/adding-salt-to-hashing-a-better-way-to-store-passwords/)

> Note: **NEVER store secrets used to sign the JWT in clear in the code! They need to be part of environments variables or in some other mechanism of secret management!**

> [JWT.io](https://www.jwt.io/)

### What about authorization?

Technically `authentication` and `authorization` are 2 different concepts, but overlap in the context of the name of the header onto which we should add our Access Token.

`authentication` answers the question "Who are you?"
`authorization` answers the question "Are you allowed to access this resource?"

In most role-based permission architectures, by answering the question "Who are you?" we get our answer on default authorizations too (aka we know X is a student, or a teacher, and they have separate standard permissions).

> [More on Authentication vs. Authorization](https://auth0.com/intro-to-iam/authentication-vs-authorization)

## In the lab

We scaffolded a new backend API, by going through the following steps:
1. We created a new directory where our project will live
2. We opened the directory in VS Code
3. We ran `npm init` in the directory from a terminal, this will enable us to install dependencies and do version management on our app; skip providing the details it asks for by pressing <kbd>Enter</kbd> until a `package.json` file appears in the directory
4. We ran `npm install express`, this is the library we will use to build backend APIs with JavaScript
5. We ran `npm install jsonwebtoken`, this is the library we will use to generate access tokens

We wrote the logic in the `index.js` endpoint, and then ran it with `node index.js` in a terminal.

Some useful links we accessed:
- [expressjs.com](https://expressjs.com/)
- [jwt.io](https://www.jwt.io/)