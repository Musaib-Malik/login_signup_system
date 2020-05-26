// UI Variables
const form = document.getElementById("myForm");
const text = document.querySelector(".typeText");
const password = document.querySelector(".typePassword");

// Event Handler
form.addEventListener("submit", addToLocalStorage);

// Add to LS
function addToLocalStorage(e) {
  let user;
  if (text.value == "" || password.value == "") {
    e.preventDefault();
    alert("PLease fill out the form");
  } else {
    if (localStorage.getItem("user") === null) {
      user = [];
    } else {
      user = JSON.parse(localStorage.getItem("user"));
    }

    const final = `${text.value} ${password.value}`;

    if (user.includes(final)) {
      e.preventDefault();
      alert("User already exits");
    } else {
      user.push(final);
    }

    localStorage.setItem("user", JSON.stringify(user));
  }
}