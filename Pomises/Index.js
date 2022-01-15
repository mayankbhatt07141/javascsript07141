async function x() {
  console.log("intial");
  const response = await fetch("https://api.github.com/users?since=XXX");
  console.log(response);
  console.log("after response");
  const user = await response.json();
  console.log(user);
  console.log("after user");
  return user;
}
let a = x();
// a.then((data) => console.log(data));
