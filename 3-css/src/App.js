import './App.css';
import { useEffect, useState } from 'react';

const user = 'Gigel';

// this is called a "Component" in frontend lingo
function App() {
  // this keeps the component's state
  // this would allow the component to rerender
  // on if the state changes
  // https://react.dev/reference/react/useState
  const [accounts, setAccounts] = useState([]);

  // a React hook to connect to external systems
  // https://react.dev/reference/react/useEffect
  useEffect(() => {
    // native function to fetch resources
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    // we created a separate API with express that would respond with the accounts
    // we started it on port 3001
    // check it out in /1-http lab (/accounts endpoint in index.js)
    fetch('http://localhost:3001/accounts')
      .then(response => response.json())
      .then(json => setAccounts(json.accounts));
  }, []);
  
  // React components can only return 1 element/node
  // this is the reason the `<>` and `</>` tags are
  // added in the beginning and the end of this block
  // these are not HTML standard, but a React thing
  // also other solutions exist too for this

  // this combined JS+HTML syntax is something
  // specific to React (JSX: https://react.dev/learn/writing-markup-with-jsx)
  // although all frameworks have something similar
  // that will allow this
  return (
    <>
      <button>
        {user}
      </button>

      <h1>Welcome, {user}!</h1>

      <div>
        <button>Send</button>
        <button>Settings</button>
      </div>

      <h2>Your accounts with us</h2>

      {
        // one of the ways to conditionally render in React
        // this renders the right-side operand if the left-side operand is true
        // https://react.dev/learn/conditional-rendering#logical-and-operator-
        // there are more ways to do this, including using the ternary operator
        // and using if-statements when this is it's own component
        accounts.length === 0 && <p>You don't have any accounts</p>

        // we're using the strict equality operator `===`
        // always try to use this when comparing stuff
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality
        // the `.length` property is added by default in all JS Arrays
        // it's a property, not a function as in Python (`len(list)`)
        // or a method as in Java ArrayLists (`.size()`)
      }

      {/* we added a container on all the list items
      classes in React should be specified with `className`,
      normal `class` works too, but there will be an error in the console
      about it */}
      <div className="account-container">
        {
          // `map` is a method of JS lists
          // that allows the iteration of their elements
          // executing the callback for each element
          accounts.map((account) => {
            return (
              // all list items must have a unique `key` when mapping them
              // this ensures that updates of a list item don't affect
              // the others, for us, this could be the iban, or an `accountId`
              // if we'd have one
              <div className="account" key={account.iban}>
                {/* we added another div that would wrap the h3 and p
                because they needed to be aligned in a column, not
                in a row as the account should be */}
                <div className="account-id">
                  <h3>{account.name}</h3>
                  <p className="iban">{account.iban}</p>
                </div>
                <p>{account.balance} {account.currency}</p>
              </div>
            )
        })}
      </div>
    </>
  );
}

export default App;

