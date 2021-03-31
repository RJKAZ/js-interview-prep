/*

So the Answers....
Whats the difference between undefined and null

 Undefined is a varibale that has been declared but not assinged a value
 Null is declaring the value is explicitly empty. 
 Javascript automatically assigns no value to undefinted, so Javascript itself will never set a Null value. 

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
