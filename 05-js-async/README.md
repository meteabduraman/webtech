## Async JavaScript

JavaScript can also handle asynchronous operations through Promises, despite the fact that it is **single threaded**. The notion of *threads* does not exist, but asynchronous operations can be executed through the **JS Event Loop**.

The **Event Loop** is a low-level concept of the language that can be the subject of JS tech interviews.

> Back in 2018, Jake Archibald explained the event loop at a conference in a visual manner, checkout his talk here: [Jake Archibald on the web browser event loop](https://www.youtube.com/watch?v=cCOL7MC4Pl0).

### Promises

Most of the async operations in JS are handled through Promises, these are objects literally designating *the promise of a future value* (whether it be in 80ms or 8minutes). A promise can be in 3 mutually exclusive states:
- fulfilled (operation was completed successfully)
- rejected (operation failed)
- pending (operation is neither fulfilled nor rejected)

> [> More about Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

With this in mind, we can handle promises in 2 main ways:

1. **through `async/await`**

`async` is a keyword added to functions, and it automatically wraps the returned value in a `Promise` object. This keyword also allows the use of the `await` keyword to indicate that the execution should not continue while a promise we want to wait for is still pending.

```js
// say this function is used to check whether a
// student submitted an assignment or not
async function checkAssignmentStatus(assignmentId, studentId) {
    try {
        // latent operation that implies a query to the Db
        // function returns a Promise we need to wait for
        const assignment = await goToDatabaseAndGetAssignmentById(assignmentId);
        
        // return a boolean depending on if the passed studentId is among
        // the submitters of the assignment as stored in the Db
        return assignment.submitters.includes(studentId);
    } catch (e) {
        // if the promise were to be rejected,
        // the execution would jump to this catch block
        throw new Error('An error occurred. :/');
    }
}

// when we want to use this function, we'll also need to await its result
// and handle the error case with a try-catch
try {
    const hasSubmitted = await checkAssignmentStatus('webtech-1', 'some-student-id');
} catch (e) {
    console.log(e);
}

// if we wouldn't have cared about the outcome of the
// checkAssignmentStatus function, we'd simply not
// await it, the promise would fulfill in an async manner
// and the execution would continue past it, but we would
// not be able to access the result anymore
const hasSubmitted = checkAssignmentStatus('webtech-1', 'some-student-id');
```

Using `async/await` provides a more readable experience and makes it clear when the execution is stopped, waiting for a promise to be fulfilled or not.

2. **through `then/catch`**

`then` and `catch` are methods present on any Promise object and they allow the chaining of *callback* functions whenever the promise gets resolved and/or rejected. Using this approach requires additional care with regards to the sequence is which callbacks are chained.

```js
function checkAssignmentStatus(assignmentId, studentId) {
    goToDatabaseAndGetAssignmentById(assignmentId)
        .then((result) => {
            // this callback will be executed async
            // when the promise is resolved
            return result.submitters.include(studentId);
        })
        .catch((e) => {
            // this will execute async
            // when the promise is rejected
            throw new Error('An error occurred. :/');
        });
}

// when we call it:
checkAssignmentStatus('webtech-1', 'some-student-id')
    .then((result) => {
        console.log(result);
    })
    .catch((e) => {
        console.log(e);
    });
```

> [> More on using promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)

### In the lab

In the lab we wrapped the `transfer` function within an Express API endpoint and tested it via VSCode's Thunder Client Extension. We didn't have time to implement another API call to check the limit before performing the transfer, but we will do that in the next lab.