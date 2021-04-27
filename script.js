/*
__________________________GENERAL QUESTIONS _________________________________________

What did you learn yesterday/this week?
What excites or interests you about coding?
What is a recent technical challenge you experienced and how did you solve it?
When building a new web site or maintaining one, can you explain some techniques you have used to increase performance?
Can you describe some SEO best practices or techniques you have used lately?
Can you explain any common techniques or recent issues solved in regards to front-end security?
What actions have you personally taken on recent projects to increase maintainability of your code?
Talk about your preferred development environment.
Which version control systems are you familiar with?
Can you describe your workflow when you create a web page?
If you have 5 different stylesheets, how would you best integrate them into the site?
Can you describe the difference between progressive enhancement and graceful degradation?
How would you optimize a website's assets/resources?
How many resources will a browser download from a given domain at a time?
What are the exceptions?
Name 3 ways to decrease page load (perceived or actual load time).
If you jumped on a project and they used tabs and you used spaces, what would you do?
Describe how you would create a simple slideshow page.
If you could master one technology this year, what would it be?
Explain the importance of standards and standards bodies.
What is Flash of Unstyled Content? How do you avoid FOUC?
Explain what ARIA and screenreaders are, and how to make a website accessible.
Explain some of the pros and cons for CSS animations versus JavaScript animations.
What does CORS stand for and what issue does it address?
How did you handle a disagreement with your boss or your collaborator?
What resources do you use to learn about the latest in front end development and design?
What skills are needed to be a good front-end developer?
What role do you see yourself?
Explain the difference between cookies, session storage, and local storage?

______________________HTML QUESTIONS ________________________________________________________________

What does a doctype do?
-- Doctype stands for document type declaration. It informs the web browser about the type
   and version of HTML used in building the web document so the browser can handle and load it properly.

How do you serve a page with content in multiple languages?
-- 

What kind of things must you be wary of when designing or developing for multilingual sites?
What are data- attributes good for?
Consider HTML5 as an open web platform. What are the building blocks of HTML5?
Describe the difference between a cookie, sessionStorage and localStorage.
Describe the difference between <script>, <script async> and <script defer>.
Why is it generally a good idea to position CSS <link>s between <head></head> and JS <script>s just before </body>? Do you know any exceptions?
What is progressive rendering?
Why you would use a srcset attribute in an image tag? Explain the process the browser uses when evaluating the content of this attribute.
Have you used different HTML templating languages before?
What is the difference between canvas and svg?
What are empty elements in HTML ?

_____________________CSS QUESTIONS_________________________________________________________________

What is CSS selector specificity and how does it work?
What's the difference between "resetting" and "normalizing" CSS? Which would you choose, and why?
Describe Floats and how they work.
Describe z-index and how stacking context is formed.
Describe BFC (Block Formatting Context) and how it works.
What are the various clearing techniques and which is appropriate for what context?
How would you approach fixing browser-specific styling issues?
How do you serve your pages for feature-constrained browsers?
What techniques/processes do you use?
What are the different ways to visually hide content (and make it available only for screen readers)?
Have you ever used a grid system, and if so, what do you prefer?
Have you used or implemented media queries or mobile specific layouts/CSS?
Are you familiar with styling SVG?
Can you give an example of an @media property other than screen?
What are some of the "gotchas" for writing efficient CSS?
What are the advantages/disadvantages of using CSS preprocessors?
Describe what you like and dislike about the CSS preprocessors you have used.
How would you implement a web design comp that uses non-standard fonts?
Explain how a browser determines what elements match a CSS selector.
Describe pseudo-elements and discuss what they are used for.
Explain your understanding of the box model and how you would tell the browser in CSS to render your layout in different box models.
What does * { box-sizing: border-box; } do? What are its advantages?
What is the CSS display property and can you give a few examples of its use?
What's the difference between inline and inline-block?
What's the difference between the "nth-of-type()" and "nth-child()" selectors?
What's the difference between a relative, fixed, absolute and statically positioned element?
What existing CSS frameworks have you used locally, or in production? How would you change/improve them?
Have you used CSS Grid?
Can you explain the difference between coding a web site to be responsive versus using a mobile-first strategy?
Have you ever worked with retina graphics? If so, when and what techniques did you use?
Is there any reason you'd want to use translate() instead of absolute positioning, or vice-versa? And why?
How is clearfix css property useful?
Can you explain the difference between px, em and rem as they relate to font sizing?
Can you give an example of a pseudo class? Can you provide an example use case for a pseudo class?
What is the difference between a block level element and an inline element. Can you provide examples of each type of element?


_______________________JAVASCRIPT QUESTIONS ________________________________________________________

Explain event delegation.
Explain how this works in JavaScript.
Can you give an example of one of the ways that working with this has changed in ES6?
Explain how prototypal inheritance works.
What's the difference between a variable that is: null, undefined or undeclared?
How would you go about checking for any of these states?
What is a closure, and how/why would you use one?
What language constructions do you use for iterating over object properties and array items?
Can you describe the main difference between the Array.forEach() loop and Array.map() methods and why you would pick one versus the other?
What's a typical use case for anonymous functions?
What's the difference between host objects and native objects?
Explain the difference between: function Person(){}, var person = Person(), and var person = new Person()?
Explain the differences on the usage of foo between function foo() {} and var foo = function() {}
Can you explain what Function.call and Function.apply do? What's the notable difference between the two?
Explain Function.prototype.bind.
What's the difference between feature detection, feature inference, and using the UA string?
Explain "hoisting".
Describe event bubbling.
Describe event capturing.
What's the difference between an "attribute" and a "property"?
What are the pros and cons of extending built-in JavaScript objects?
--

What is the difference between == and ===?
    -- These are equality operators, === is the strict equality operator where as == is still an equality operator but not strict. 
       To use it, 1 === '1' turns false, but 1 == '1' would return true.

Explain the same-origin policy with regards to JavaScript.
    --

Why is it called a Ternary operator, what does the word "Ternary" indicate?
    --

What is strict mode? What are some of the advantages/disadvantages of using it?
    --

What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?
    -- 

What tools and techniques do you use debugging JavaScript code?
    -- The Console.log and the Dev tools in the browser

Explain the difference between mutable and immutable objects.
    --

What is an example of an immutable object in JavaScript?
What are the pros and cons of immutability?
How can you achieve immutability in your own code?
Explain the difference between synchronous and asynchronous functions.
What is event loop?
What is the difference between call stack and task queue?
What are the differences between variables created using let, var or const?
What are the differences between ES6 class and ES5 function constructors?
Can you offer a use case for the new arrow => function syntax? How does this new syntax differ from other functions?
What advantage is there for using the arrow syntax for a method in a constructor?
What is the definition of a higher-order function?
Can you give an example for destructuring an object or an array?
Can you give an example of generating a string with ES6 Template Literals?
Can you give an example of a curry function and why this syntax offers an advantage?
What are the benefits of using spread syntax and how is it different from rest syntax?
How can you share code between files?
Why you might want to create static class members?
What is the difference between while and do-while loops in JavaScript?
What is a promise? Where and how would you use promise?

Coding questions ___________________

Make this work:

duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]

Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5

What will be returned by each of these?
console.log("hello" || "world")
console.log("foo" && "bar")

Write an immediately invoked function expression (IIFE)

Accessibility Interview Questions ______________________________________

These questions try to stay away from asking people to recite specifications, or rattle off screen reader hot keys. Those can easily be looked up on the job. Instead these questions try to act as conversation starters, to gain insight into how someone solves problems, and interprets accessible, inclusive user experiences.

Questions are grouped into four buckets:

General,
Technical,
Design, and
Content
These categories may be a mistake, but we’re going with it for now. If you have ideas for categories, and questions in general, please let us know! Ideally a candidate would be able to answer questions from each category.

General
Who benefits from accessibility?
How would you define inclusive and/or universal design?
Can you provide an example? (does not need to be web related)
How has your approach to accessibility changed over time?
Name some ways responsive/mobile first design can affect accessibility.
What are some user experience (UX) concerns to be aware of when using iconography in user interfaces (UI)?
What assistive technologies (ATs) are you familiar with (desktop + mobile)?
What do you feel is your skill level with these AT(s)?
What are skip links?
What benefit(s) do they provide?
What are some of their limitations?
What are some of the tools available to test the accessibility of a website or web application?
What is WCAG?
What are the differences between A, AA, and AAA compliance?
How can using plain language benefit the accessibility of a project?
Describe appropriate instances to use a link, vs a generic button, vs a submit button.
Describe ways to indicate an element or component’s state that aren’t entirely reliant on visuals.
How can carousels be problematic for users with disabilities?
How would you convince your Manager to allocate some funds to do an accessibility external audit?
Describe a situation where a coworker may have been resistant to accessibility or inclusive design best practices.
How were you able to work with them to mitigate such issues?
What sort of strategies do you use in situations like these to help educate coworkers?
Technical
What methods would you use to find an element’s accessible name?
What is the accessibility tree?
Why are rems or ems preferable to pixels for setting type size?
Why is it important to allow the viewport to be resized, and/or zoomed?
How is the title attribute exposed to assistive technologies?
What kind of elements can title attributes be used on?
What sort of information is appropriate for use with the title attribute?
Describe a scenario where you might need to use aria-describedby.
What is a focus trap, or focus trapping? Describe an instance of when you’d need focus trapping, and how it can be an accessibility failure if not used appropriately.
Describe a situation where one might need to add or modify the focusability of an element by using the tabindex attribute.
What are landmark regions and how can they be useful?
In what situations might you use a toggle button, vs a switch control, vs a checkbox?
Describe methods to hide content:
From all users.
From only screen reader users.
From sighted users, but not screen reader users.
And why you might do so.
Describe an instance of inappropriately using ARIA attributes.
Aside from screen readers, what other assistive technologies can be affected by use of ARIA? How?
What is the difference between hidden, aria-hidden="true" and role="presentation" or role="none"?
Describe instances where you might need to use aria-live.
What values (such as assertive or polite) might you give the attribute in different situations?
How would you mark-up an icon font or SVG that was for decorative purposes?
How is CSS pseudo content treated by screen readers?
What is the purpose of the alt attribute for images?
Can you describe the effect of an empty alt, and/or the lack of the attribute, on an image?
In what instances might an empty alt or no alt be appropriate?
How might alternative text for an image vary, depending on the context the image is used in?
Since svgs don’t accept the alt attribute, how can one provide alternative text for these graphics?
Do you need to supply an image an alt attribute if used witin a figure with a figcaption?
Describe the steps you take in reviewing or auditing a website or application for accessibility?
Describe an instance where an automated test would not flag a blatant accessibility error?
When should you use or recommend ARIA roles or attributes to solve an accessibility issue?
Describe your process for figuring out if an accessibility bug is due to a developer, browser, or assistive technology error?
What is the difference between legend, caption and label elements?
What are their similarities?
Describe the purpose of heading and header elements, and how they are useful in websites and applications.
Describe how you’d handle a single page web app should and managing focus when changing routes.
Name an ARIA attribute that requires either a child/parent relationship or a pairing role.
What is your understanding of “accessible name computation” and how it affects modifying the way screen readers announce certain content?
What are some issues with modifying normal scrolling behavior? For example: infinite scrolling or scrolljacking.
Some ARIA widgets are presently best supported on devices with physical keyboard, rather than mobile/touch interfaces. Are you aware of any widgets that would be described this way, and why?
Design
Talk about the pros and cons of flat and skeuomorphic design trends in regards to accessibility.
Explain the importance of color contrast in designing for inclusion.
Besides :hover, name other states an actionable element (links, buttons, form controls, etc.) could have styles for, and why providing them is important?
When might it be appropriate to remove the visual outline from a focused element?
If a form or form field were to return an error message, where might you want those error messages to be located?
How can utilizing animation in an interface affect the user experience?
Explain how you could make an infographic accessible for screen reader users.
Why is color alone insufficient to draw attention to actionable elements, or to convey state?
What are some of the inclusive UX problems that need to be solved when content (static or actionable) is revealed on :hover, and how would you propose solving for them?
Content
What are some things you can do to make an accessible presentation?
Is it possible to make email accessible?
How can you make a podcast accessible?
How would you make sure that a Word document is accessible?
How would you make sure that an Excel spreadsheet document is accessible?
Why is it important to tag a PDF correctly?
What goes into making an accessible eBook?
Tell me some social media accessibility best practices.
Facebook
Instagram
Pinterest
Snapchat
TikTok
Twitter
YouTube
How would you handle a situation where your organization accidentally disseminates an inaccessible document?
What do you think should happen if an employee repeatedly ignores making their documents accessible after being trained?
What steps would you undertake to create a sustainable culture of creating accessible documents?
In your previous experiences, was there an opportunity to insert accessibility checks and content authoring best practices into existing workflows?


TESTING QUESTIONS _______________________________________________

What are some advantages/disadvantages to testing your code?
What tools would you use to test your code's functionality?
What is the difference between a unit test and a functional/integration test?
What is the purpose of a code style linting tool?
What are some of the testing best practices?

PERFORMANCE QUESTIONS ____________________________________________

What tools would you use to find a performance bug in your code?
What are some ways you may improve your website's scrolling performance?
Explain the difference between layout, painting and compositing.

NETWORK QUESTIONS __________________________________________________

Traditionally, why has it been better to serve site assets from multiple domains?
Do your best to describe the process from the time you type in a website's URL to it finishing loading on your screen.
What are the differences between Long-Polling, Websockets and Server-Sent Events?
Explain the following request and response headers:
Diff. between Expires, Date, Age and If-Modified-...
Do Not Track
Cache-Control
Transfer-Encoding
ETag
X-Frame-Options
What are HTTP methods? List all HTTP methods that you know, and explain them.
What is domain pre-fetching and how does it help with performance?
What is a CDN and what is the benefit of using one?

FUN QUESTIONS ________________________________________________________

What's a cool project that you've recently worked on?
What are some things you like about the developer tools you use?
Who inspires you in the front-end community?
Do you have any pet projects? What kind?
What's your favorite feature of Internet Explorer?

___________________________________________________________________________________________________

What does the && operator do?

&& is the logical AND operator for a set of operands is true if and only if all of its operands are true. This is typically used with Boolean True/Flase values. When it is, it returns a boolean value, however the && operator acctually returns the value of one of its operands. So if this operator is used with a non-boolean value, it will return a non-boolean value

const a = 3;
const b = -2;

console.log(a > 0 && b > 0);
This returns false
___________________________________________________________________________________________________

What does the || operator do?

|| is the logical OR operator. it is used for a set of operands is true if only one of more of the operands is true...also used primarilly with Boolean values. functions verys similar to the Logical AND operator


const a = 3;
const b = -2;

console.log(a > 0 || b > 0);
This returns True

___________________________________________________________________________________________________
          
Is using the +  'unary plus operator' the fastest way in converting a string to a number?

It is, and although the unary negation ( - ) can also conmvert non numbers, unary plus is the fastest and prefered way of converting somthing into a number because it does not perform any other operations on the number. It can convert string representations of integers and floats, as well as the non string values. 

Bascily, if a value is a number, the unary plus does not take any effect where as unary minus will negate the value. 

let a = 10
a = +a // 10
a = -a // -10

let s = '10';
console.log(+s);

In that example, the S is a string, but when used with the unary plus operator, the string is converted into a number. 

___________________________________________________________________________________________________
            
What is the DOM

Document Object Model - it is the progaming inteface for HTML and XML documents. The Dom is the object orientated representation of the web page which can be modified with a scripting language like JavaScript. To note, Javascript is not the DOM, Javascript just communicates with it. The DOM is created as soon as the web page loads and it takes a Tree like strucutre.
___________________________________________________________________________________________________
            
What is Event Propagation?

Event progagation is a way to describe the "Stack" of events that fired in a web browser. 

another way to put it, it is the mechanism that defines how events propagate or travel thru the DOM tree to arrrive at its target.

It can be observed in code where you may have more then one .addEventListener set to Click. The click event fires the first listener but it gets greedy and just keeps climbing up the to the parent and fires every click handler untill there aren't any left. 

A way to stop this is to use a method called "stopPropagation" which will contain the click to one html element and only one click handler fires. 

___________________________________________________________________________________________________
            
What's event bubbling?  

Event Bubbling and Event Capture are two ways ot event propagation. When an event occurs in an element inside another element, and both elements have registered a handle for that event. The even propagation mode determines in which order the elements recieve an event.

With bubbling, the event is first captured and handled by the innermost element and then propagated to other elements. 

with Capturing, the event is first captured by the outermost element and propagated to the inner elements.  

___________________________________________________________________________________________________
            
Whats Event Capturing?

See above answer for bubbling. 

___________________________________________________________________________________________________
            
Whats the difference between event.preventDefault() and event.stopProgagation() methods

stopPropagation prevents futher propagation fo the current event in the capturing and bubbling phases. 

preventDefault prevents the default action the browser makes on that event.

with stopPropagation, only the buttons click handler is called while the div's click handler never fires. 

Where as if you use preventDefault, only the browers defauly action is stopped, but the div's click handler still fires. 
___________________________________________________________________________________________________
            
How to know if the event.preventDefault()method was used in an element?

You can check the event objects defaultPrevented property (which is a boolean indicating if prevent default was ever called for that particular event object. )
          





*/
