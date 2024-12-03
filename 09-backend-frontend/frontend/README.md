## Building Frontends

An important aspect of any application that's client-facing is how real users interact with it, and the way it is perceived. That's what a frontend stands for. Technically speaking, it's an application which is destined to be executed on the users local machine (HTML, CSS and JS bundles are transferred via Webservers to the user's browser and they get executed there).

> Once the frontend has reached the machine of the user, the developers/maintainers of the frontend have little to no control over it. If a fix for a problem is promoted to Production, the user will still need to request the new HTML, CSS, JS content (*refresh*).

A bunch of ways exist to build frontends, what we'll use in the lab would be [React](https://react.dev/), the most popular amongst the frontend libraries or frameworks out there.

What these libraries/frameworks do that help us is keeping a `component` oriented mindset, while handling rendering cycles and state-related matters. It would be a huge feat to build a complex application only using Vanilla JS (plain JS with no other libraries/frameworks).

In React, a component is just **a function** (name in *UpperCamelCase*) which returns some **JSX** (an HTML template in which we can include JS variables and pieces of logic).

For example, we can have a component for a topbar (similar to a navbar but without the navigation, a header element):
```js
function Topbar() {
    const username = '@notmete';

    return (
        <header>
            <p className="bold">{username}</p>
            <button>Sign out</button>
        </header>
    )
}
```

Afterwards, we can reuse this component in others as well, similar to how we'd use an HTML element:
```js
import { Topbar } from './components/Topbar.js';

// ...
return (
    <Topbar></Topbar>
)
```

### The lifecycle of a component

In frontends, we can usually react and handle things that a user triggers via events (e.g. user clicks on a button, user hovers over an element, etc). However sometimes, no action is needed from the user in order to make something happen. We can think of this as "initial load", we need to react and handle the rendering itself through lifecycle methods.

React components have their own lifecycle:
- **mounting** (when it got added to the DOM)
- **updating** (when its state changes)
- **unmounting** (when its removed from the DOM)

We can specify when we want something to be executed (e.g. a call to an API) by using these lifecycle moments. In order to hook onto one of these events we'll need to use an `Effect`.

> [> More about React Effects](https://react.dev/learn/synchronizing-with-effects)

### In the lab

In the lab we scaffolded a React app and built a PhoneNumber component, in which we called the Express API endpoint we previously built.

In this component we're handling 3 scenarios: loading, error and success of the API call.