greetings = () => {
  let date = new Date();
  let hour = date.getHours();
  if (hour >= 5 && hour < 12) {
    return "Good Morning";
  } else if ((hour >= 20 && hour <= 24) || (hour >= 0 && hour < 5)) {
    return "Good Night";
  } else if (hour >= 16 && hour < 20) {
    return "good Evening";
  } else if (hour > 12 && hour < 16) {
    return "good Afternoon";
  }
};
greet = () => {
  document.getElementById("buttonGreet").innerText = "Greeted";
  let name1 = document.getElementById("InputName").value;
  document.getElementById("greetContainer").innerText =
    "hy " + name1 + " " + greetings();
};
