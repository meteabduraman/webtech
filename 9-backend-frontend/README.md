## Integrating your API with a Frontend

Most of the times, the Frontend will serve as a visual (or auditory) way for users to interact with your API. It translates most of the technicalities of an API to comprehensible messages that can be understood by your target audience.

We can think of the frontend as a mediator, it's there to most of the times display information coming from an API and helping users make requests to an API. This coupling between the 2 components is present in most applications, but not all.

An important thing to note is that `frontend !== UI`, building UIs (user interfaces) is included in frontend, but building a frontend goes beyond that through *behaviour handling* (via clicking buttons, submitting forms), via *a11y*, *performance*, *analytics*, and so on.

### How do they connect?

We can also have frontend parts (or **components**) which do not call any API/external service, they can be named **unconnected components**, while the ones which involve the use of **fetch** or other methods of communication with external services, can be named **connected components**.

While building backends we used tools like *Thunder Client (equivallent of Postman)* or the browser itself to *call* the API endpoints we built. Similarly, these calls can be performed from a Frontend via **`fetch`**.

Say we have this endpoint built in our Express API:
```js
app.get('/account-names', (req, res) => {
    res.send(200).json({ accounts: [
        { name: 'Current account' },
        { name: 'Investment account' },
    ] });
});
```

Once our API is started, we would be able to call this endpoint by performing a `GET http://localhost:<port>/account-names` in Thunder Client or the browser. In a React app, a call can be made via **`fetch`**.

```js
fetch('http://localhost:3001/account-names')
    .then(res => res.json())
    .then(body => console.log(body.accounts);) // expect a console statement with the contents of the accounts list
    .catch(err => console.log(err))
```
> [> More about the native `fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

### Handling every case in the frontend

Given our frontend asynchronously performs these operations, it's vital that its every state is handled accordingly. The use of the word `state` is important, since we can call `state` any collection of variables which influence the way the component behaves or is rendered.

Three states which come to mind while creating an API call would be:
- What happens while we fetch the accounts? **Loading state**
- What happens if fetching the accounts resulted in an error? **Error/Unhappy state**
- What happens if everything is fine? **Success/Happy state**

Handling these aspects of the state is vital for a robust frontend.

> [> Checkout more about Frontend in `./frontend/README.md`](./frontend/README.md)

### In the lab

In the lab we created an Express API which implemented a `GET /phone-number` endpoint which returned a hardcoded *obfuscated*phone number. We implemented a call to this endpoint from a dummy React app which we scaffolded using `npx create-react-app`.

This React app contained a `PhoneNumber` component which contained the template taken from the Bank UX Figma file (link on online.ase.ro), and also independently called the endpoint of the API and was able to handle the loading state.
