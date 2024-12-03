## About HTTP

HTTP is the protocol of the Internet, used to communicate between **Clients** and **Servers**. The dynamic can be summarized by *Clients make requests to servers, and servers respond to those requests*.

A **client** is any program that is able to connect to the Internet through HTTP. The *requests* they send have a couple of components:
- URL endpoint (denoting the requested *resource*)

e.g.: `/accounts`, `/accounts/{id}`, `/shop/phones/{id}`

- HTTP method/verb (GET, POST, DELETE, etc - denoting the action to be taken on the requested resource)

e.g.: `POST /accounts`: Create a new account resource; `GET /accounts/{id}`: Retrieve the account resource identified by the passed ID

> [> More about HTTP methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)

- (optionally) a body (in case of a POST, PATCH, etc. in which details of the new/modified resource are passed)

e.g.: `POST /accounts { "accountName": "Some Name" }`: Create a new account resource which has the account name Some Name

**Servers** can usually be of 2 types: **webservers** or **APIs**.
**Webservers** are usually there to respond with HTML, CSS and JS so that clients within browsers can render HTML pages and maintain interactivity with the user. Webservers can be considered infrastructure, they're not usually there to fulfill business needs.

![Abstracted webserver interaction](./assets/Abstracted%20webserver%20interaction.png)

Screenshot of a hit on Google's webserver, responding 200 OK and some HTML, CSS and JS to be rendered and executed in the client's browser:
![Google webserver status code](./assets/Google%20webserver%20Headers.png)
![Google webserver response body](./assets/Google%20webserver%20Response.png)

**APIs** are responsible of fulfilling the business logic of the app itself. In case of a webshop, e.g. to effectively purchase items, fetch details of items, etc.

![API interaction - GET](./assets/API%20interaction%20-%20GET.png)

The *response* of an API usually contains:
- a status code (denoting the status of the requested action)

e.g.: `200 OK`, `404 Not Found`, `500 Internal Server Error`

> [> More about HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

- a body (JSON representation of the outcome of the action)

e.g.: in case of a GET, usually the body contains a JSON representation of the resource. For a `GET /courses/1` request, a valid response might be:
```json
200 OK
{
    "courseId": 1,
    "name": "webtech",
    "chapters": [{
        "name": "About HTTP",
        "date": "2024-10-01T07:30:00.000+03:00"
    }]
}
```

A `GET` request is an **idempotent** operation (if a client performs it multiple times, it should have the same outcome, not modifying the application's state). Operations that modify the application state can also be performed:

![API interaction - POST](./assets/API%20interaction%20-%20POST.png)

### In the lab

We created our first Express Node.js API (checkout [index.js](./index.js)) as a quick sneak peek on how HTTP communication works. Deep dives will follow in the *Back-end* part of the lab. 🤓