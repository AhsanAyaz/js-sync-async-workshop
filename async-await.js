async function main() {
  console.log("App started");
  let user;
  const response = await fetch("https://api.randomuser.me");
  const data = await response.json();
  user = data.results[0];
  document
    .querySelector(".app__user__image")
    .setAttribute("src", user.picture.large);
  document.querySelector(
    ".app__user__name"
  ).innerHTML = `${user.name.first} ${user.name.last}`;
  console.log(user);
  console.log("App closed");
}

main();
