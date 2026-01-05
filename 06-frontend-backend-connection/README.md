## Frontend - backend connections

It is important to understand how the two separate apps (frontend and backend) communicate with eachother so that they make the user's experience unified.

While a backend will be connected to a database via an ORM, and that usually abstracts most of the technicalities, the frontend performs direct **API Calls** to the backend's endpoints.

### Using `fetch` to perform an API call

The browser native way of performing an API call is using `fetch`. This allows us to specify the resource we're trying to access and to optionally pass bodies and headers, depending on the HTTP method used.

```js

// the sequence below will perform an API call to a backend which runs
// locally on port 3000, asking for the student resource with ID 1

// notice we need to await the response
const response = await fetch('http://localhost:3000/students/1', {
    method: 'GET' // this is default so we can also omit it
});

// usually we'll also need to manually parse the response body
const student = await response.json();
```

> Don't forget that `fetch` is an async function. It returns a promise which needs to be handled accordingly in case of success or error.

When we want to pass data to our backend, say when we're asking it to create a resource for us, then we need to pass a body to `fetch` as well, and to specify the format of the data as well (`application/json` most of the times).

```js
// if it's not a GET, we need to specify the HTTP method
// content-type should also be added in the headers
// in the headers we can also add e.g. an Access Token if it's the case
// don't forget to JSON.stringify the body too
const response = await fetch('http://localhost:3000/students', {
    method: 'POST',
    headers: {
        'content-type': 'application/json',
    },
    body: JSON.stringify({ name: 'Mete', group: 1000, faculty: 'CSIE' }),
});

// we can check here if the response is ok or not (aka the status code is a successful one - 2XX category)
if (response.ok) {
    // we still need to parse the response body in case our API returns the created student
    const student = await response.json();

    // PRO TIP! Generally IDs of resources are ALWAYS created by the backend. The FE sends out the values, and the backend creates the ID for it and usually responds with it.
    console.log(`Created student with ID ${student.id}`);
} else {
    console.log('Error occurred while creating student resource.');
}
```

> [> More about fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

### BONUS: Conditional rendering

Sometimes, depending on whether API calls succeed or not, we might want to render different things in the frontend. This concept is called **conditional rendering**. We can achieve this by storing a piece of state which is controlled by the outcome of the API call.

Let's take the call above, which POSTs a student to our backend.
We can store a `studentId` state, which should be populated if the call is successful. If it's not populated, we can assume an error occurred.

This will be the variable which controls what we display in the frontend:

```js
import { html, reactive } from '@arrow-js/core';

// let's initialize it as undefined first
const state = reactive({
    studentId: undefined,
});

const response = await fetch('http://localhost:3000/students', {
    method: 'POST',
    headers: {
        'content-type': 'application/json',
    },
    body: JSON.stringify({ name: 'Mete', group: 1000, faculty: 'CSIE' }),
});

if (response.ok) {
    // if everything is fine then we can populate the studentId
    // state variable with the actual studentId received from the backend
    const body = await response.json();
    state.studentId = body.studentId;
} else {
    // else, we can set it to `null`
    state.studentId = null;
}

// based on our logic to assign `undefined`, `null` or an actual value to the `studentId` state variable, we can now handle each scenario separately
html`
    ${() => state.studentId === undefined && html`
        <p>The call was not yet performed. studentId has the initial value of undefined.</p>
    `}

    ${() => state.studentId === null && html`
        <p>An error occurred and the response was not ok! We set studentId to null.</p>
    `}

    ${() => state.studentId && html`
        <p>Student with ID ${() => state.studentId} was created successfully!</p>
    `}
`
```

Conditional rendering is one of the most used concepts in frontend apps as it allows them to achieve reactivity.

>[> Checkout what React docs say about conditional rendering](https://react.dev/learn/conditional-rendering)

### In the lab

We created a new frontend app that would call an existing API that's deployed on the internet. It's called Bank API and it can be found at `https://bank-api-fltw.onrender.com`.

There's a Swagger document on online.ase.ro where you can explore what this API does and what endpoints it exposes.

What we did is recreated the frontend part of the SMS Authentication functionality, where the user would enter a phone number, would receive an SMS with a code, and would enter that code in order to authenticate in the platform. This was achieved through 2 API calls, and conditional rendering. Checkout the `src` directory for the code.