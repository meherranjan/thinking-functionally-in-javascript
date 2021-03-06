// 1
// A minimal function in JS, that just returns a 0
// A function is a value, giving this to console, 
// gives us back the same thing. Just like a number 23.
// But functions are usually more complex in nature. 
// You can store operations in them which can be performed later.
() => 0   // prints back the same function on the console


// 2
// Based on Value Type and Reference Type as a 
// mechanism to distinguish nature of data.
// A function is based on Reference Type 
// just like objects and arrays.
(() => 0) === (() => 0)		// prints false on the console


// 3 
// The way we apply function is by 
// passing 0 or more arguments to it. 
// To apply a function we simply put a bracket 
// and then pass comma separated arguments to the functions
fn_expression( args1, args2 )
// or
( () => 0 )()      // prints 0 on the console


// 4 
// We can return a value back from function by 
// putting a value to the right of the arrow
// Values like 23 are expressions and so is 100 + 23 
// So can we put expressions to the right of the arrow?
( () => 100 + 23 )()      // prints 123 on the console
( () => 
     (() => 0)() 
)()


// 5
// Similarly, we can even put a block next to the arrow in the function
( () => {} )()      // prints undefined on the console


// 6
// undefined is absence of value and its like a value and of value type
undefined      // prints back undefined on the console
undefined === undefined       // prints back true
undefined === ( () => {} )()       // prints back true
// so all undefined in JS are identical irrespective of how they get returned
// also undefined is mutable, that makes them unreliable, and thats why using 
void 0 
// is considered a safe way to generate an undefined,
// because writing an empty function to return a generated undefined is too lengthy
// using undefined direclty is risky 
// hence void seems like a good choice


// 7 
// In simple words, blocks are JS statements separated by semicolon or not(babel)
// An expression is a JS statement
( () => { 1 + 1; 2 + 2 } )()      // prints undefined on the console
// The way we can return a value of an 
// evaluating statement is using the return keyword and 
// any expression on its right side
( () => { return 1 + 1 } )()      // prints 2 on the console
// the return statement terminates the function immediately
// return statement is differeny and behaves differently 
// than expression, it can only be used in blocks


// 8
// And because we can put any expression to the 
// right of the arrow.
// We can similarly put a function 
// on the right of the arrow as well
() => () => 0
// this is a function when applied, 
// returns a function. And when applied again, returns 0
// similarly, below function when applied twice returns 123
() => () => 100 + 23
// lets apply the function:
( () => () => 0 )()()