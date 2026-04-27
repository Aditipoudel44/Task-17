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

/*
What localStorage is 
ocalStorage is a built-in web storage feature in JavaScript that 
allows you to store data in the browser permanently (until manually deleted).

Difference between localStorage vs sessionStorage 
localStorage: It is used to store data in the browser permanently, meaning the data remains saved even after the browser is closed and reopened,
 and it can only be removed manually by the user or code.

sessionStorage: It is used to store data only for a single browser tab session, meaning the data is available as long as the tab is open, 
but it gets automatically deleted when the tab or browser is closed.


When browser storage is useful in real applications
Browser storage is useful in real applications to store small data in the user’s browser without a server, such as user preferences (theme, language), login information, temporary form data,
and shopping cart items, so the data can be quickly accessed and not lost on refresh or page navigation.*/