## Glossary

You'll find here a list of terms and briefly explained concepts we will mention in the lab. Make yourself familiar with them, this way we'll have a common ground of understanding. Feel free to use <kbd>ctrl</kbd>+<kbd>f</kbd> to find what you're looking for.

> Feel free to reach out either via email or Pull Request if you consider we need to add something else

### HTTP

| Term | Explanation
| :--: | :--
| **HTTP** | *HyperText Transfer Protocol* The main protocol of the Internet [More...](https://developer.mozilla.org/en-US/docs/Web/HTTP)
| **Client** | An application (can also refer to physical devices, but for our purposes, it will be an application) which connects to the Internet, most commonly via HTTP [More...](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Client-Server_overview)
| **Server** | An application (can also refer to physical devices, but for our purposes, it will be an application) which responds to clients' requests, most commonly via HTTP [More...](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Client-Server_overview)
| **API** | *Application Programming Interface*, in our context, an application which acts as an interface to the business logic of the app [More...](https://developer.mozilla.org/en-US/docs/Glossary/API)
| **Webserver** | Application which most of the times will serve HTML, CSS and JS for clients to load [More...](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server)
| **Request** | A client asking a server to perform an action (*give me all the accounts*, *create this new item*) [More...](https://developer.mozilla.org/en-US/docs/Web/API/Request)
| **HTTP Method** | Part of the request, will specify the action the client wants the server to take on the specified resource [More...](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
| **Domain** | Memorable, branded equivallent for an IP Address, converted to an IP Address by a DNS (e.g. `google.com`) [More...](https://developer.mozilla.org/en-US/docs/Glossary/Domain)
| **DNS** | *Domain Name System*, basically a huge table of domains and IP Addresses [More...](https://developer.mozilla.org/en-US/docs/Glossary/DNS)
| **TLD** | *Top Level Domain*, .ro, .com, .org part of a Domain [More...](https://developer.mozilla.org/en-US/docs/Glossary/TLD)
| **Endpoint** | Specification of the resource within the API [More...](https://blog.postman.com/what-is-an-api-endpoint/)
| **Resource** | An object that the API can take actions on (e.g. accounts, tasks, assignments) [More...](https://restful-api-design.readthedocs.io/en/latest/resources.html)
| **Status Code** | HTTP's way of signaling whether the request was successful or not, and providing this information without needed to look in the `body` of the Response [More...](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
| **Response** | Always comes as an effect of a Request performed by a client to a server [More...](https://developer.mozilla.org/en-US/docs/Web/API/Response)
| **JSON** | *JavaScript Object Notation* representation of Objects, used to transmit information between clients and servers through HTTP [More...](https://developer.mozilla.org/en-US/docs/Glossary/JSON)
| **Idempotency** | About HTTP methods, a method is idempotent if performing it twice on the same resouce, does not change the outcome [More...](https://developer.mozilla.org/en-US/docs/Glossary/Idempotent)
| **URL/URI** | *Uniform Resource Locator*/*Uniform Resource Identifier* string of text that specifies where a resource is found [More...](https://developer.mozilla.org/en-US/docs/Glossary/URL)

### HTML

| Term | Explanation
| :--: | :--
| **HTML** | *HyperText Markup Language* **not** a programming language, used to describe the structure of a web page [More...](https://developer.mozilla.org/en-US/docs/Web/HTML)
| **Website** | Literally collection of static `.html` documents interconnected via links (anchors) [More...](https://www.wix.com/blog/what-is-a-website)
| **Web app** | Application that has functionality and state (with JS) [More...](https://aws.amazon.com/what-is/web-application/)
| **Element** | Part of a webpage, has a opening tag, content and closing tag (some elements make exceptions to this rule, e.g. `img`) [More...](https://developer.mozilla.org/en-US/docs/Glossary/Element)
| **Tag** | Syntactic way of determining where an element starts and ends [More...](https://developer.mozilla.org/en-US/docs/Glossary/Tag)
| **Attribute** | Adds additional information to an HTML element or tweaks the look/behaviour of the element, are always declared within the opening tag (e.g. `class`, `id`, `alt`) [More...](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes)
| **A11Y** | *Accessibility* Practices that enable web page to be accessible for visually impaired (and not only) users too (via Screen Readers, or other tools) [More...](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
| **Screen Reader** | Text-to-speech software which recites the contents of the HTML document, so that visually impaired users can navigate it via an audio channel [More...](https://developer.mozilla.org/en-US/docs/Glossary/Screen_reader)
| **Semantic elements** | HTML elements which have semantic meaning (e.g. `nav`, `main`, `footer`, etc.) [More...](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantics_in_html)
| **Templating** | Action of generalizing an HTML fragment so that it can be reused, via placeholder variables instead of hardcoded-text [More...](https://mfrachet.github.io/create-frontend-framework/templating/intro.html)
| **Framework** | Collection of tools and libraries which makes life easy when writing complex templates [More...](https://www.geeksforgeeks.org/what-is-a-frontend-framework/)
| **DOM** | *Document Object Model* A representation of the HTML document but in an object form, connection between HTML and JS [More...](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)

### CSS

| Term | Explanation
| :--: | :--
| **CSS** | *Cascading Style Sheets* Provide style to the HTML document [More...](https://developer.mozilla.org/en-US/docs/Web/CSS)
| **Selector** | Determine upon which HTML elements is the specified style applied [More...](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors)
| **ID** | (HTML element attribute) Uniquely identifies an HTML element within the document, selectable with `#` [More...](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id)
| **Class** | (HTML element attribute) Identifies elements that should be displayed similarly, selectable with `.` [More...](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class)
| **Specificity** | Browser computation to determine the most relevant styles for an element (`id > class > tagname` and other rules) [More...](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)
| **Combinator** | Or `combined selector`, multiple selectors chained together with combinator characters such as ` `(space), `>`, etc. [More...](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Combinators)
| **CSS Property** | Basically what you want to control style-wise about the element (e.g. `background-color`, `font-family`, etc.) [More...](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/How_CSS_is_structured#properties_and_values)
| **CSS Value** | Hand-in-hand with properties [More...](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/How_CSS_is_structured#properties_and_values)
| **Layout** | How the elements sit in the web page, spacing, alignment, etc. [More...](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout)
| **Axis** | Most of the times related to `flexbox`, represents one of two axes of alignment (horizontal or vertical), where one is `main` the other is `cross`; which is which can be controlled via `flex-direction` [More...](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox#the_two_axes_of_flexbox)
| **Box model** | CSS treating every HTML element as a box, and generally providing the ability to add `padding`, `border` and `margin` to them [More...](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
| **Responsiveness** | Set of practices that enables web pages to be visually appealing both on small dimensions (mobile devices) or large ones (desktops) [More...](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)

### JS

| Term | Explanation
| :--: | :--
| **dynamic typing** | Infers the data type of a variable at runtime depending on it's value at that moment [More...](https://developer.mozilla.org/en-US/docs/Glossary/Dynamic_typing)
| **interpreter** | Program which executes intstructions without compiling them [More...](https://en.wikipedia.org/wiki/Interpreter_(computing))
| **arrow function** | Functions without a name, usually like this because they're not to be reused [More...](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
| **callback** | Function which is usually passed to another function, to be *called back* in a specific manner [More...](https://en.wikipedia.org/wiki/Callback_(computer_programming))
| **closure** | The context of a JS function (lexical environment) [More...](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
| **hoisting** | Behaviour of moving all declarations to the current scope, it doesn't matter if you define a variable above a function which uses it or below [More...](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
| **Promise** | *a promise of a future value*, we can handle async operations through this object in JS [More...](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
| **async operation** | Executes asynchronously, does not block main execution of a program if it is a time-consuming task; this does not imply other *threads* since JS is single-threaded [More...](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing)