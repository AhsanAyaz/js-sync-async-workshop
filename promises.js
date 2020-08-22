console.log("App started");
let user;
fetch("https://api.randomuser.me")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    user = data.results[0];
  });
console.log(user);
console.log("App closed");

// document
//   .querySelector(".app__user__image")
//   .setAttribute("src", user.picture.large);
// document.querySelector(
//   ".app__user__name"
// ).innerHTML = `${user.name.first} ${user.name.last}`;
