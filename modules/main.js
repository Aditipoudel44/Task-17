// Importing functions from other files
import { add, subtract } from "./mathUtils.js";
import { getUserName, getUserAge } from "./userUtils.js";
// Using functions
console.log(add(6, 7));        
console.log(subtract(13, 5));   

console.log(getUserName("Aditi Poudel "));
console.log(getUserAge(20));


/*
What JavaScript modules are
JavaScript modules are a way to split your code into separate files so you can organize, reuse, and manage it better.
Instead of writing everything in one big file, you break it into smaller pieces (modules), 
and then export what you need and import it where required.

Difference between: 
■ export 
■ default export 
■ import
-export is used to send multiple functions or variables from a file, and you must import them using the same names inside curly braces.
-export default is used to send one main function or value from a file, and you can import it without curly braces and even rename it.
-import is used to bring functions, variables, or values from another file into your current file so you can use them.

Why modular code is important in large applications
Modular code is important in large applications because it breaks a big system into smaller, reusable parts. This makes the code easier to 
maintain, understand, test, and scale,and also allows multiple developers to work on different parts at the same time without conflicts. */