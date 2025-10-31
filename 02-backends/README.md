## About backends

Backends are actually the part of the application which keeps all the business logic of the app. For a banking app, e.g. it will perform all the checks needed when transferring money (balance, validity of data, etc).

### Requests, responses and resources

Our backend will actually be an app which will listen for *requests* on a port of our machine. Once such a request is hit, it will *respond* adequately. Usually these requests and responses are used to serve the abstract concept of a *resource*. 

Basically the dynamic is that a **client** asks to perform an **action** (or method) on a **resource**. Resources are really the object or the mission of a backend. E.g. for a grocery store backend, the main resource will be *groceries*; for an online learning platform, one resource will be *courses*.

> It's important to keep in mind what resource you're working on when designing a backend API.

It's also important to think of the components of a request as interpreted by a backend:

- **request URL (endpoint)** defines the *resource* the request is made on (e.g. `/students`, `/groceries/1`, where `1` is an identifier of a grocery item);
- **HTTP method** defines the *what*; the action taken on the resource (e.g. `GET` which asks for a resource, `POST` which creates a new resource, `DELETE` which deletes a resource)
- **optionally, a body** brings in data, in case the action needs them, e.g. for `POST`, you need to provide the details of the resource to be created (e.g. in case of *students*: name, group, etc)

> [More about HTTP Methods...](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods)

Similar to the request components, responses also have some:

- **response status** which tells the client if the request was successful or not, but in slightly more detail (there are a bunch of categories, but most commonly `2XX` for success - `200 OK`, `201 Created`, `4XX` for client-side errors - `404 Not Found`, `400 Bad Request`, `5XX` for server-side errors - `500 Internal Server Error`)
- **optionally, a body** contains data the client asked for or the result of an operation it asked for

> [More about HTTP Status Codes...](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status)

### JSON

This is the form of the data as it passes through frontend and backend. It's actually a `notation` which is quite simple. For example:

```json
{
    "key": "value",
    "otherKey": 1,
    "lastKey": true
}
```

### In the lab

We scaffolded our first backend API, by going through the following steps:
1. We created a new directory where our project will live
2. We opened the directory in VS Code
3. We ran `npm init` in the directory from a terminal, this will enable us to install dependencies and do version management on our app; skip providing the details it asks for by pressing <kbd>Enter</kbd> until a `package.json` file appears in the directory
4. We ran `npm install express`, this is the library we will use to build backend APIs with JavaScript

Checkout the code in the [`index.js`](./index.js) which we wrote.

In order to run the app, in the terminal, run `node index.js`, which will start it. If everything is fine, you will see `"Example app listening on port 3000"` in the console.

At this time, you are ready to call your endpoints. This can be done via browsers for `GET` requests, but I recommend installing an API Client (like [Postman](https://www.postman.com/) or [Bruno](https://www.usebruno.com/)). This will make it easier for us to test.

You will manage to hit the endpoints if you perform a call via your API client on `http://localhost:3000/<name-of-the-endpoint>`, in our case `http://localhost:3000/date-time`. You should be able to see a JSON object containing the current date and time.

> Be careful, if the port is already used, you will not be able to start the project. Close the processes running on the port, or change it to `3001`, `3002`, etc. You can close the server by running <kbd>Ctrl</kbd>+<kbd>C</kbd> in the terminal while the app is running.