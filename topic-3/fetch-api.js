// Get HTML elements where data will be displayed
const postsDiv = document.getElementById("posts");
const dogDiv = document.getElementById("dog");
// FETCH POSTS 
function fetchPosts() {
  // Show loading message while fetching data
  postsDiv.innerHTML = "Loading posts...";
  // Fetch posts from API
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
      // Check if response is successful
      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }
      // Convert response into JSON
      return response.json();
    })
    .then(data => {
      // Show data in console for debugging
      console.log("Posts:", data);
      // Clear loading text
      postsDiv.innerHTML = "";
      // Show only first 5 posts
      data.slice(0, 5).forEach(post => {
        const div = document.createElement("div");
        // Insert post title and body into HTML
        div.innerHTML = `
          <h4>${post.title}</h4>
          <p>${post.body}</p>
          <hr>
        `;
        // Add each post to the page
        postsDiv.appendChild(div);
      });
    })
    .catch(error => {
      // Show error message if API fails
      postsDiv.innerHTML = "Error loading posts";
      console.error(error);
    });
}
// FETCH DOG IMAGE 
function fetchDog() {
  // Show loading message
  dogDiv.innerHTML = "Loading dog image...";
  // Fetch random dog image from API
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => {
      // Check if response is successful
      if (!response.ok) {
        throw new Error("Failed to fetch dog image");
      }
      // Convert response to JSON
      return response.json();
    })
    .then(data => {
      // Show API response in console
      console.log("Dog API:", data);

      // Display dog image in HTML
      dogDiv.innerHTML = `
        <img src="${data.message}" width="300" alt="Dog Image"/>
      `;
    })
    .catch(error => {
      // Show error message if API fails
      dogDiv.innerHTML = "Error loading dog image";
      console.error(error);
    });
}
// Call both functions when page loads
fetchPosts();
fetchDog();

/* What Fetch API is 
Fetch API is a modern way in JavaScript to make HTTP requests (like GET, POST) and receive responses.
It allows your web page to talk to online data sources and bring information into your website.

Difference between fetch vs XMLHttpRequest 
XMLHttpRequest (XHR) → Old way to request data from a server
Fetch API → Modern, simpler way to request data

Importance of handling errors in API calls
Error handling in API calls is important because it prevents app crashes, 
handles server or network failures, and improves user experience by showing proper messages instead of broken or blank pages.*/