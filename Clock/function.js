function clock() {
  const hours = document.querySelector(".hours");
  const minutes = document.querySelector(".minutes");
  const seconds = document.querySelector(".seconds");

  // Get and set Hour
  hours.innerHTML = new Date().getHours();
  // Get and set Minute
  minutes.innerHTML = new Date().getMinutes();
  // Get and set Seconds
  seconds.innerHTML = new Date().getSeconds();

  // Concatenate a '0' ahead if the length of time string = 1
  if (hours.innerHTML.toString().length === 1) {
    hours.innerHTML = "0" + hours.innerHTML;
  }
  if (minutes.innerHTML.toString().length === 1) {
    minutes.innerHTML = "0" + minutes.innerHTML;
  }
  if (seconds.innerHTML.toString().length === 1) {
    seconds.innerHTML = "0" + seconds.innerHTML;
  }
}
// call function 'clock' on an interval of 1000ms
setInterval(clock, 1000);
