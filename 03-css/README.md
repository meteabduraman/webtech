## Styling with CSS

The second building block of the web, CSS (Cascading Style-Sheets) provide style to the webpage. We can use multiple CSS properties to specify how an element would look when displaying it.

CSS syntax is basically:
```
<selector> {
    <property>: <value>;
}
```

**Selectors** determine which element would result in getting the specified styles. We can select an element based on (orderded by priority):
1. **`id` (using `#`), uniquely identifying an element in the document**

e.g. the following HTML element with an `id` attribute:
```html
<p id="iban">RO00 AAAA 0000 0000 0000 0001</p>
```
can be selected with:
```css
#iban {
    color: #757575;
}
```

2. **`class` (using `.`) identifies elements that should be displayed similarly, like a template**

e.g. the following HTML element with a `class` attribute:
```html
<img src="./avatar.png" alt="" class="avatar">
```
can be selected with:
```css
.avatar {
    width: 100px;
    /* below we basically crop the photo to a circle */
    border-radius: 100%;
}
```

3. **by tag name (with no prefix), applying the styles on all elements with the specified tag name**

e.g. the following HTML element:
```html
<h2>Your accounts with us</h2>
```
can be selected with:
```css
h2 {
    margin: 0;
}
```

While we can definitely use these simple selectors too, some combined ones can also be formed. E.g.:

```css
/* any children with class .foo of the <main></main> element */
main .foo {}

/* direct descendants with class .foo of the <main></main> element */
main > .foo {}

/* an element with id bar that is the immediate sibling of an element with class foo */
.foo + #bar {}
```

Using combined selectors can get really complicated really fast, generally you can add classes in your template to make this easier.

> [> More about CSS Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors/Selectors_and_combinators)

A lot of CSS **properties** exist, they're pretty much standard, you can find a list of them here: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#index. You'll learn them as you go, not all of them will be used.

Each property generally accepts certain values, e.g. the `color` accepts a color string, a hex value or the result of a `rgb()` function call, etc. You will not be able to assign a `px` value to it, for example.

> [> Extensive list of CSS properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors/Selectors_and_combinators)

With these CSS properties, you will be able to control granular aspects of the element, such as the style of the cursor (`arrow` or `pointer`), to the **layout** and dimensions of the element.

The **layout** is usually controlled via `display` properties, a common one to use that's straight forward would be `flex`. A flexbox is a container which is aware of its contents, being able to control their placement on 2 axes (horizontal, vertical). A flexbox also has multiple specific propoerties (such as `flex-direction`, `justify-content`, `align-items`, etc.).

> [> More about the flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)

> [> Flexboxfroggy game, where you can learn more](https://flexboxfroggy.com/)

Another CSS concept to look at is the **box model**. Everything in CSS fits in a box which has (from the inside-out): *content*, *padding*, *border* and *margin*. Each one of those can be controlled via CSS too.

> [> More about the box model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)

### In the lab

Initially we created a separate Express API that would provide us the accounts and tried to add a `fetch` call in the component to retrieve the accounts from there.

Afterwards, we added some classes and flexboxes on the accounts we received.