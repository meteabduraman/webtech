## Submitting data from your frontend to your API

Connecting an API to its frontend involves two-way communication, the frontend displays information provided by the API and also the frontend submits information to the API. Both actions are enabled by the use of `fetch`.

We'll make use of a `form` element and handle `submit` events triggered by the click on a `button` of `type="submit"`.

In order to not keep building backends, I prepared an API which we can use in order to focus on the frontend part of the app. Most of the endpoints require an Access Token or an API Key.

### How can I get an Access Token?

You can use an API client to call the `/sms-means/auth/initiate`, `/sms-means/{smsId}` and `/sms-means/auth/finalize` endpoints that are registered in the Swagger. ([Swagger here](https://bank-api-fltw.onrender.com/swagger))

You will need to select a user from the list on `online.ase.ro` and use the endpoints to get a Token on its behalf.

Once you receive the Access Token, it will be valid for 1 hour. After it expires, you'll need to get a new one repeating the process.

The endpoints which require an Access Token follow the Bearer Token authentication scheme, you'll see the `Authorization` header is already added there.

### How can I get an API Key?

This is a static key that is shared on `online.ase.ro`, you can add it to the request headers under the name of `X-API-Key` (it's not case-sensitive).

### In the lab

We scaffolded a React app, and created a `PhoneNumber` component in `src/components`. We used an effect to call the `GET /users/me` endpoint that provides the obfuscated phone number we show in the first step.

Afterwards, we added a form and an input used to submit the new phone number and called the `PATCH /users/me/phone-number` endpoint passing the FormData to its body.

In the end, we received an `orderId`, which is the expected success scenario. The logic of the application implies the order be approved first. 