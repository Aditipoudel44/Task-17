// Get display element
const display = document.getElementById("display");
// Save data on form submit
document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    showData();
});
// Show saved data
function showData() {
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");

    if (name && email) {
        display.innerHTML = "Name: " + name + "<br>Email: " + email;
    } else {
        display.innerHTML = "No data found";
    }
}
// Clear data
function clearData() {
    localStorage.clear();
    display.innerHTML = "Data cleared!";
}
// Load data on page open
showData();