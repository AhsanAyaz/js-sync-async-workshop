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
