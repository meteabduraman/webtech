## About the basics

In this lab we will work with 3 languages mainly: **HTML**, **CSS** and **JavaScript**.
These are the building blocks of the web and are pretty much needed for a web app. Modern apps use frameworks which make it way easier to intertwine the 3 and be reactive to changes in data or input.

# HTML

When talking about HTML, we're talking **stucture**. It helps us define what exactly should the contents of the document be. Using an element or another should not be decided based on its looks, but rather its meaning.

> *Example* **Do not** choose to add an `h3` element for the only heading of the page just because it looks a bit smaller by default. The headings should be chosen based on importance, start with `h1` and go down if needed. Styling can be tweaked with CSS.

We have a standard set of HTML elements we can add, such as `button`, `p`, `img`, and so on. We're using **tags** to define the element and its contents.

For example: `<p>This is a paragraph.</p>`

Some elements do not have content, such as the `img` element. The source of the image is specified by using an **attribute** called `src` (source).

For example: `<img src="path/to/some/image.svg" alt="" />`

Some attributes can be set to all elements, such as `class` or `id`.

> [More about HTML...](https://developer.mozilla.org/en-US/docs/Web/HTML)

# CSS

Provides **styling** to the document. With CSS we can define which element in the document gets what style. We do this by writing CSS blocks. These are comprised of 2 elements:
- **selector** (basically answers the question *Which element is the style applied to?*)
    - these can be **element names** (styling every element with that name present in the document)
    - **classes** (styling every element which has the class specified; use `kebab-case` for class names)
    - **IDs** (individually styling an element by ID; use `camelCase` for IDs)

- **properties list** (basically answers the question *What should the style be?*)

There are a ton of CSS properties which control a lot of aspects about an element, including the text color, background color, border, margin, padding, font size, alignment, etc. You don't need to know all of them by heart, you'll get a feeling on which property you need to apply once you get used to them. MDN is your friend.

For example:
```css
/* sets the font family of all the h1 elements in the document to either Inter or if it's not installed on the user's machine, a sans-serif font which is OS-specific */
h1 {
    font-family: 'Inter', sans-serif;
}

/* does not display the elements with class mobile-only */
.mobile-only {
    display: none;
}

/* shows the cursor as a question mark when hovering above the element with id helpText only */
#helpText {
    cursor: help;
}
```

> [More about CSS...](https://developer.mozilla.org/en-US/docs/Web/CSS)

# JS

We use it to specify **functionality** in our documents. Behaviour of button clicks, background processes, API calls, all using JS. It's an *interpreted*, *dynamically-typed* language that is standard in the web.

JS is designed to be executed in a browser context, but with **NodeJS** it can run without one too.

We'll discuss more about JS in the next lab.

One cool thing is that JS allows us to be reactive to user events. This is achieved by **event listeners**. An **event listener** is a function which will be called whenever the specified event occurs.

Example:
```js
// takes the button element with id 'submitBtn' from the document
const btn = document.getElementById('submitBtn');

// executes the passed function every time the 'click' event
// occurs on the button
btn.addEventListener('click', () => {
    console.log('submit btn was clicked');
});
```

What we used above to specify the behaviour on click is called an **arrow function**, these are similar to **lambda functions** from other languages. It is basically a way to define a function without it having a name. This is useful if the function will not necessarily be reused.

> [More about JS...](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

# In the lab

We built a small screen containing *a heading*, *an image*, *a paragraph* and *a button*. We styled it with basic CSS. We added an **event listener** on the button so that it logged a message in the console whenever it was clicked.

Checkout the `index.html` file.

In order to see it in a browser, either double-click it in your file system and it will open in the browser, or install a Live Server plugin to VSCode. This will reflect the changes real-time as you change the document.
