## Intro to JavaScript

Third building block of the web, JavaScript provides a way to add functionality to web applications. It can be said that it makes the difference between *websites* and *web apps*.

**JS** is an interpreted language, meaning it doesn't have a compiler, the instructions are executed one by one from top to bottom. It was designed exclusively to be used in a browser, but since [Node.js](https://nodejs.org/en) appeared, it can also be used to create applications of broader scopes than just the web.

### Variables in JS

Three main keywords you'll probably encounter:
- `const` defines a constant (a variable that cannot be reassigned using the assignment operator); this does not mean that its contents may also not change if the variable is an array or object
- `let` and `var` define variables which can get reassigned; we'll most of the times (if not always) use `let`; the difference between them is related to the scope they're available in ([short explanation here](https://stackoverflow.com/questions/762011/what-is-the-difference-between-let-and-var))

When defining a variable, we don't need to specify the type. JS is **dynamically-typed** and able to infer the type of a variable based on the value assigned to it.

```js
// typeof currency will output `string`
const currency = 'RON'; // consts always need to be initialized

let selectedAccount; // when a variable is not initialized it has the default value of `undefined`

// typeof selectedAccount will output `string`
selectedAccount = 'd9052a86-7025-41b3-bac0-c20902ee3c45';
```

An important thing to note with variables is that once a variable is initialized with a value and the type inferred, there's nothing holding you back from reassigning another data type to it. If not paying attention, this can lead to errors or unexpected behaviour.

```js
// account is an object with properties `id` and `balance`
let account = { id: 'd9052a86-7025-41b3-bac0-c20902ee3c45', balance: 20 };

// ... after 10 lines of code

// reassign account to the balance of the account
account = accounts.findIndex((account) => id === 'd9052a86-7025-41b3-bac0-c20902ee3c45').balance;

// ... after 10 lines of code

// `id` property no longer exists because now account is a number
// we will get `undefined` here
console.log(account.id);
```

There are a bunch of data types in JS ([list here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)):
- `string`
- `number`
- `boolean`
- `undefined`
- `null`
- `Object`
- and a couple others

> [> More about variables in JS](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables#what_is_a_variable)

### Functions in JS

JS has functions similar to other programming languages. The basic syntax can be observed in the example below:

```js
function transfer(sourceIban, destinationIban, amount) {
    // logic
}
```

When defining parameters, no information about their type is required. Make sure to validate that you have the right data in the params before processing them to avoid errors. Also note that no information about the return value is included in the signature of the function itself.

JS also has *arrow functions* (also known as *lambda functions* or *anonymous functions*). These are generally functions that are only executed once, or constitute callbacks for other functions and are passed as parameters.

```js
accounts.map((account) => { return account.balance; })
```

In the example above, the `.map` method of the `accounts` array accepts a *callback* (another function that would get executed for every element of the array). In this case, we decided to use an arrow function to return the balance of every account object.

> [> More about functions in JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

### Concepts you might get asked about at an interview

- **Closures**: the JS interpretor putting together a function and its sorrounding state (lexical environment) [More...](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- **Hoisting**: the JS interpretor rearranging functions and variables to the top of their scope [More...](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
- **Promises**: similar to Java Futures, *a promise of a future value* [More...](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

## In the lab

In the lab we discussed introductory aspects of JS, and we also got started and implemented a `transfer` function that would transfer money from an account to another within an array of accounts. Checkout the implementation in `index.js`.