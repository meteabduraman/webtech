## Templating with HTML

HTML is one of the 3 building blocks of the web, giving the web page a structure. HTML is **not** a programming language, but rather a markup language similar to [Markdown](https://www.markdownguide.org/cheat-sheet/).

HTML documents are made up of **nodes** (elements) which have an *opening tag* (`<p>`, `<div>`, `<h1>`), *content* (either plain text or another node(s)), and *closing tag* (`</p>`, `</div>`, `</h1>`, although some elements might lack this, as `<img/>` does).

> [> More about HTML elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

Constructing a solid foundation/structure for a web page is important, but HTML generally also plays another big role in *A11Y (accessibility)*. With regards to this, we can categorize elements in 2 types:
- those that **don't have an intrinsic meaning** (classic example of `div`: you know it's a group of something, but it does not convey the purpose or meaning of this group)
- those that **do have an intrinsic meaning** (also known as **semantic tags**, e.g. `nav`, `main`, `article`, they're essentially also groups of elements, but their purpose is conveyed via the name of the element)

> [> More about semantic elements](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantics_in_html)

The latter category provides insights for Screen Reader technologies which visually impaired persons use to navigate the web. These technologies recite the contents of the web document (nodes/elements present), so this is the relation between how visually impaired users perceive the web and the HTML we use to build it.

> [> MDN Definition of a Screen Reader](https://developer.mozilla.org/en-US/docs/Glossary/Screen_reader)

Key takeaways and advice for using HTML elements:
- [x] Always question whether a `div` can be converted to a semantic element, it's not guaranteed that it will always be the case though
- [x] Do not rely on the initial appearance of an element to decide whether it's suitable or not (e.g. "`h1` is too big, I'll use `h4` for my main heading"/"In the prototype, this does not look like a button, but the user is expected to click on this, I'll just add a `div`"), make sure to take into account the meaning and interaction behind the element and control it's appearance via CSS
- [x] Always question whether a piece of HTML can be "componentized" and reused

### On templating

Generally, when we'll write HTML documents, it won't contain hardcoded text, but rather placeholders for variables (e.g. showing the user's name, account balance, or others). In this sense, we can say we'll write **templates**.

For a news article fragment, e.g., a potential reusable template can be:

```jsx
<main>
    <h1>{article.title}</h1>
    <div>
        <p>Written by</p>
        <img src={article.author.avatarUrl} alt=""/>
        <p>{article.author.name}</p>
        <p>on {article.date}</p>
    </div>
    ...
</main>
```

HTML is simply a markup language, so variables are not a thing here. But that's where frontend frameworks similar to `React` come in. More on frontend and React will follow in the upcoming labs.

### In the lab

We scaffolded our first React app and added a template corresponding to the **Account Overview: Home** screen of the Figma file on online.ase.ro.  In the next labs we'll try to request the data from an API, and then style it a bit. 🤓

Along the way, we used the following commands:
* `npx create-react-app bank` to scaffold the project (yes to everything)
* `npm start` to start the app and check the template we built, it automatically opens the browser on `localhost:3000` where our app is living