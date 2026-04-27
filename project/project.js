const usersDiv = document.getElementById("users");
const selectedDiv = document.getElementById("selectedUser");

// Fetch users
async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  displayUsers(users);
}

// Display users
function displayUsers(users) {
  usersDiv.innerHTML = "";

  users.forEach(user => {
    const div = document.createElement("div");

    div.innerHTML = `
      <p><b>${user.name}</b></p>
      <p>${user.email}</p>
      <p>${user.address.city}</p>
      <hr>
    `;

    div.onclick = () => {
      localStorage.setItem("selectedUser", JSON.stringify(user));
      showSelectedUser(user);
    };

    usersDiv.appendChild(div);
  });
}
// Show selected user
function showSelectedUser(user) {
  selectedDiv.innerHTML = `
    <p><b>${user.name}</b></p>
    <p>${user.email}</p>
    <p>${user.address.city}</p>
  `;
}

// Load saved user
function loadSavedUser() {
  const data = localStorage.getItem("selectedUser");
  if (data) {
    showSelectedUser(JSON.parse(data));
  }
}

// Run
fetchUsers();
loadSavedUser();