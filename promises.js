fetch("https://api.randomuser.me")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const user = data.results[0];
  });

// document
//   .querySelector(".app__user__image")
//   .setAttribute("src", user.picture.large);
// document.querySelector(
//   ".app__user__name"
// ).innerHTML = `${user.name.first} ${user.name.last}`;
