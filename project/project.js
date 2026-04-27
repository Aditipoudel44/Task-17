// Get HTML elements where data will be shown
const usersDiv = document.getElementById("users");
const selectedDiv = document.getElementById("selectedUser");
// FETCH USERS FROM API 
async function fetchUsers() {
  // Fetch data from API
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  // Convert response into JSON format
  const users = await res.json();
  // Display users on the page
  displayUsers(users);
}
// DISPLAY USERS IN HTML 
function displayUsers(users) {
  // Clear previous content
  usersDiv.innerHTML = "";
  // Loop through all users
  users.forEach(user => {
    const div = document.createElement("div");
    // Show user details in HTML
    div.innerHTML = `
      <p><b>${user.name}</b></p>
      <p>${user.email}</p>
      <p>${user.address.city}</p>
      <hr>
    `;
    // When user is clicked
    div.onclick = () => {
      // Save selected user in localStorage
      localStorage.setItem("selectedUser", JSON.stringify(user));
      // Show selected user on screen
      showSelectedUser(user);
    };
    // Add user to the page
    usersDiv.appendChild(div);
  });
}
//  SHOW SELECTED USER 
function showSelectedUser(user) {
  selectedDiv.innerHTML = `
    <p><b>${user.name}</b></p>
    <p>${user.email}</p>
    <p>${user.address.city}</p>
  `;
}
//  LOAD USER FROM LOCAL STORAGE 
function loadSavedUser() {
  // Get stored user data
  const data = localStorage.getItem("selectedUser");
  // If data exists, show it on screen
  if (data) {
    showSelectedUser(JSON.parse(data));
  }
}
// RUN FUNCTIONS 
fetchUsers();       // Load users from API
loadSavedUser();    // Load previously selected user (if any)

/*
 Real-world use of: 
■ APIs 
■ Async handling 
■ Browser storage 
■ Modular structure

1. Real-world use of APIs
APIs are used to get or send data between apps and servers.
Examples:
Weather apps get weather data 
Facebook/Instagram load posts 
Online stores show products 
In short: APIs connect your app to real-world data.

2. Real-world use of Async handling
Async handling is used when tasks take time (like fetching data).
Examples:
Loading posts without freezing the page
Streaming videos on YouTube 
Chat apps sending messages instantly 
In short: It keeps apps fast and non-blocking.

3. Real-world use of Browser Storage
Browser storage saves data inside the user’s browser.
Examples:
Remembering logged-in users 
Saving cart items in shopping websites 
Keeping theme (dark/light mode) 
In short: It stores user data locally in the browser.

4. Real-world use of Modular Structure
Modular structure means breaking code into small parts/files.
Examples:
React components in web apps
Separating API calls, UI, and logic
Large apps like Amazon or Netflix organized in modules
In short: It makes code clean, reusable, and easy to maintain.
*/