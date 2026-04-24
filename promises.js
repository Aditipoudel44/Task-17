//Question no:1
function checkNumber(num) {
  return new Promise((resolve, reject) => {
    if (num % 2 === 0) {
      resolve("Number is even");
    } else {
      reject("Number is odd");
    }
  });
}
checkNumber(4)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

//Question no:2
function checkNumber(num) {
  return new Promise((resolve, reject) => {
    if (num % 2 === 0) {
      resolve("Number is even");
    } else {
      reject("Number is odd");
    }
  });
}
checkNumber(4)
  // .then() runs when the promise is resolved (success case)
  .then((result) => {
    console.log("Then:", result); // prints the success message
  })
  // .catch() runs when the promise is rejected (error case)
  .catch((error) => {
    console.log("Catch:", error); // prints the error message
  })
  // .finally() runs in both cases (whether resolved or rejected)
  .finally(() => {
    console.log("Finally: This always runs");
  });

  //Question no:3
function loadData() {
  return new Promise((resolve, reject) => {
    console.log("Loading data..."); 
    setTimeout(() => {
      resolve("Data loaded successfully");
    }, 2000);
  });
}
loadData()
  // Runs when promise is resolved
  .then((result) => {
    console.log("Then:", result);
  })
  // Runs if promise is rejected 
  .catch((error) => {
    console.log("Catch:", error);
  })
  // Always runs after promise is settled
  .finally(() => {
    console.log("Finally: Loading process finished");
  });

  //Question no:4
/* What a Promise is 
A Promise in JavaScript is an object that represents the result of an asynchronous operation (a task that takes time to complete), 
such as fetching data from a server or reading a file.
Instead of returning the result immediately, a Promise returns a placeholder value that will be available in the future.

Difference between pending, fulfilled, rejected 
Pending  : Initial state; operation is still running; no result yet 
Fulfilled : Operation completed successfully; result is available 
Rejected : Operation failed; error is returned

Why Promises are useful in real-world async operations 
Promises are useful in real-world async operations because they handle tasks like API calls and file loading in a clean way, 
improve readability, and make error handling easier without callback confusion.*/