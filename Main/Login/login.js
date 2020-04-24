// UI Variables
const form = document.getElementById("myForm");
const text = document.querySelector(".typeText");
const password = document.querySelector(".typePassword");

// Event Handler
form.addEventListener("submit", getFromLS);

// Get from LS
function getFromLS(e) {

  let arr = [];

  const final = `${text.value} ${password.value}`;
  arr.push(final);

  let users = JSON.parse(localStorage.getItem("user", "user"));

  const p = users.filter(i => arr.includes(i));

  let stringed = p.toString();

  if (arr.includes(stringed)) {
    alert('Success!')
  } else {
    e.preventDefault();
    alert('User does not exist!')
  }


}