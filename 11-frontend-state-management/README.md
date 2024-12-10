## Managing complex state in your Application

During the last couple of frontend labs, we discussed a lot about the concept of **state** being a collection of variables which controls the behaviour of our components.

In our examples, the `PhoneNumber` component always had it's own - or **local** - state which was not shared by or with other components. This is not always a pattern apps can follow easily. Sharing state among components is something you'll need to pay close attention to, given it can easily become a mess.

Take the following schematic example:
```html
<App> [user] [accounts]
    <Dashboard> (user)
        <PhoneNumber></PhoneNumber> (user) [phoneNumber]
        <Limit></Limit> (user) [limit]
        <Accounts></Accounts> (user) (accounts)
        <TransferMoney></TransferMoney> (user) (accounts)
        <EmailAddress></EmailAddress> (user) [emailAddress]
        <TransactionOverview> (user) (accounts) [transactions]
            <Transaction> (user) (accounts) (transactions)
                <Account></Account> (user) (accounts)
            </Transaction>
        </TransactionOverview>
    </Dashboard>
</App>
```

In the example above, you'll see the local state between `[]` and state that's shared from a parent component between `()`. Let's consider that `accounts` will get updated via the `<Accounts>` component, which would allow someone to open a new account. This change should not only be reflected in the `<Accounts>` component itself, but rather also in the `<TransferMoney>`, `<TransactionOverview>`, `<Transaction>` and `<Account>` component.

Also, if we study the parent-child relations, we get to the conclusion that `<TransactionOverview>` and `<Transaction>` are used to pass the `accounts` state to `<Account>`, but they won't either display, nor change that state. They're simply part of the *road* to get to the place where it should be displayed.

Imagine now a huge tree of components with big interdependencies among their state. Not nice. This can be avoided usually, by architecting the app in such a way that every component is as independent as possible state-wise, and is able to fetch and modify its own data. The business needs and UX design on the app itself should also allow this, therefore it's not a universal solution.

In big applications, we can introduce a `state manager`, that would externalize the state, making it globally available to the entire app. The one we'll look into is [`redux`](https://redux.js.org/).

### Redux as state manager

We can think of a state manager as the same collection of variables which control our application, but it's not part of the components themselves, rather they're separately maintained. Using `redux` we can create `slices` of state (fancy name for a variable in our state, along with the actions we can take on it) ([see classic example of a counter](https://redux.js.org/introduction/getting-started#basic-example)).

After we create our `slices` with the pieces of state we want to react on, we need to add them in a `store` (fancy name for a collection of multiple `slices`).

```js
// in the same classic example of a counter
// https://redux.js.org/introduction/getting-started#basic-example

import { configureStore } from '@reduxjs/toolkit';

// ...
// define the slice
// ...

// add it to the store
const store = configureStore({ reducer: counterSlice.reducer });
```

`reducer` is a term used in functional programming to describe a function which *reduces* a collection to a single value, irregardless of the operation itself (addition, substraction, transformation, etc.).

### Using the state within a React app

Once we created our store, we can either `select` or `dispatch` an action on a slice. Selecting it would mean reading the value inside the store, while dispatching an action would trigger the use of a reducer from the ones we specified when the slice was created. 

Easy usage of `redux` stores in React apps can be achieved by installing the [`react-redux` dependency](https://react-redux.js.org/).

This library will provide a `<Provider>` component, which we will use to wrap our entire application in, while accepting a `store` property, in which we specify the `redux` store we want to make available.

```jsx
// in index.js
import { Provider } from 'react-redux';
import store from './store.js'; // this is our redux store

// ...
root.render(
    <Provider store={store}>
        <App />
    </Provider>
)
```

Now we'll be able to access and update the state easily from any component within our application by using two main hooks: `useSelector` and `useDispatch`.

Say we want to view the accounts in the `<Accounts>` component:

```jsx
// in /components/Accounts.jsx
import { useSelector } from 'react-redux';
import { accounts } from './state/slices/accounts.js';

export function Accounts() {
    // we pass here a slice (in this case the accounts slice, which would hold an array in the `value` property)
    const accounts = useSelector(state => state.accounts.value);

    return (
        <p>You have {accounts.length} accounts</p>
    );
}
```

And now say this component should also have the ability to open an account, and will need to update the state:

```jsx
// in /state/slices/account.js
export const accounts = createSlice({
    name: 'accounts',
    initialState: [],
    reducers: {
        openAccount: (state, action) => {
            // pushes the payload in the array
            state.push(action.payload);
        }
    }
});

export { openAccount } = accounts.reducers;

// in /components/Accounts.jsx
import { useSelector, useDispatch } from 'react-redux';
import { accounts, openAccount } from './state/slices/accounts.js';

export function Accounts() {
    const accounts = useSelector(state => state.accounts.value);
    const dispatch = useDispatch();

    function openAccount() {
        // we call this dispatch function
        // which notifies the store we want to change the state
        // we pass it the action/reducer we defined in the account slice
        // and its payload
        dispatch(openAccount({ name: 'Current account', currency: 'RON' }));
        // now all components which get the accounts from the redux store
        // will be able to handle/display this new account being opened
    }

    return (
        <p>You have {accounts.length} accounts</p>
        <button onClick={openAccount}>Open a new dummy account</button>
    )
}
```
The concept of a state manager is something that can be very useful, but often including it in small projects is not feasible enough (does not bring enough value for the effort), therefore it's recommended you use it for big projects with a lot of state.

## In the lab

We scaffolded a React app using `vite` this time (the current recommended way), not by using `create-react-app`. `vite` is a build tool helping build frontend projects (https://vite.dev/).

We ran `npm create vite@latest s11-fe -- --template react`, which produced the boilerplate react app. We then installed the dependencies running `npm i` (dependencies are already declared in a `package.json` file, we only lack `node_modules`).

We installed the dependencies allowing us to use a redux store:
- `npm i @reduxjs/toolkit` (to create the store)
- `npm i react-redux` (to provide it to the app)

Afterwards, we created a `<PhoneNumber>` component which we want to connect to a global state. We created the `phoneNumberSlice` with the `change` action, we then added it to our store. We dispatched the action upon a button click in the `<PhoneNumber>` component and we saw the state change.

> Note: since we created the project with `vite`, now the app can be started by running `npm run dev`, see the `package.json` scripts for more