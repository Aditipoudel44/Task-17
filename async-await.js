//Question no 1
function checkUser(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Mock condition
            if (username === "Aditi") {
                resolve("Login successful");
            } else {
                reject("Login failed ,User not found");
            }

        }, 2000);
    });
}
// Async function using await
async function runCheck() {
    try {
        // Wait for Promise result
        const result = await checkUser("Aditi");

        console.log("Success:", result);

    } catch (error) {
        console.log("Error:", error);

    } finally {
        console.log("Execution completed");
    }
}
runCheck();

//Question no:2
// Promise that simulates data loading (with possible error)
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true; // change to false to test error
      if (success) {
        resolve("Data loaded successfully");
      } else {
        reject("Failed to load data");
      }
    }, 2000);
  });
}
// async function with error handling
async function fetchData() {
  try {
    // wait for Promise result
    const result = await getData();
    console.log(result);
  } catch (error) {
    // runs if there is an error
    console.log("Error:", error);
  }
}
fetchData();

//Question no:3
function getUserData() {
    return new Promise((resolve) => {
        // Message shown immediately when function is called
        console.log("Fetching user data...");
        // Simulating delay (like API call)
        setTimeout(() => {
            // Mock user data returned after 2 seconds
            resolve({
                id: 3,
                name: "Aditi Poudel",
                email: "aditi@1234.com"
            });

        }, 2000);
    });
}
// Async function to handle Promise using async/await
async function fetchUser() {
    try {
        // Wait until getUserData() completes and returns data
        const user = await getUserData();
        // Print the received user data
        console.log("User Data:", user);
    } catch (error) {
        // Runs if any error occurs in try block
        console.log("Error:", error);

    } finally {
        // Always runs whether success or error
        console.log("Process finished");
    }
}
fetchUser();