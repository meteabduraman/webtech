## Async JavaScript

See [Async JS Concepts from the previous lab](../05-js-async/README.md).

### In the lab

In the lab, we added an async call to `http://localhost:3001/limit` in the `/transfer` endpoint, in order to fetch a limit for this transfer. Transferring an amount above the limit provided via this call would block the transaction, having the endpoint respond with `400 Bad Request`.

We ran:
1. `npm init` to initialize the npm package
2. `npm install express body-parser` installs the dependencies
    a. `express` provides the tools to build an API in NodeJS
    b. `body-parser` automatically parses the request's body, therefore we won't need to parse it everytime we want to look at the body of the request - we configured it to parse JSON
3. `node index.js` to start the application

> Remember to save your changes if you don't have auto save configured, and to restart the server everytime you make changes to the source code of the application.

> Tip: checkout [how to turn on auto save in VSCode](https://code.visualstudio.com/docs/editor/codebasics#_save-auto-save) and if you're tired of always restarting the application after you make changes, you can use [nodemon](https://nodemon.io/)