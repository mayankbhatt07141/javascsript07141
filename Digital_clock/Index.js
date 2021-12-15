let getTime = () => {
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let AMPM = "";
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }
  if (hour > 12) {
    AMPM = "PM";
  } else {
    AMPM = "AM";
  }
  if (hour > 12) {
    hour = hour - 12;
  }
  if (hour == 0) {
    hour = 12;
  }
  if (hour < 10) {
    hour = "0" + hour;
  }
  document.getElementById("clock").innerText =
    hour + ":" + min + ":" + sec + " " + AMPM;
};
setInterval(getTime, 1000);
