import './App.css';

const user = 'Gigel';
// imagine this data comes from an API in JSON format
// e.g. GET /accounts
const accounts = [{
  name: 'Current account',
  iban: 'RO00 AIEN 0000 0000 0000 0001',
  balance: '5,831.21',
  currency: 'RON',
}, {
  name: 'Savings account',
  iban: 'RO00 AIEN 0000 0000 0000 0002',
  balance: '200.90',
  currency: 'RON',
}];

// this is called a "Component" in frontend lingo
function App() {
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

      {
        // `map` is a method of JS lists
        // that allows the iteration of their elements
        // executing the callback for each element
        accounts.map((account) => {
          return (
            <div>
              <h3>{account.name}</h3>
              <p>{account.iban}</p>
              <p>{account.balance} {account.currency}</p>
            </div>
          )
      })}
    </>
  );
}

export default App;
