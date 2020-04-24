// UI Variables
const form = document.getElementById('myForm');
const text = document.querySelector('.typeText');
const password = document.querySelector('.typePassword');

// Event Handler
form.addEventListener('submit', getFromLS);

// Get from LS
function getFromLS(e) {

  let arr = [];
  const final = `${text.value} ${password.value}`
  arr.push(final);

  const users = JSON.parse(localStorage.getItem('user', 'user'))

  for (i of users) {
    if (arr.includes(i)) {
      alert('Success!')
      break;
    } else {
      e.preventDefault();
      alert('User does not exit!')
      break;
    }
  }
}