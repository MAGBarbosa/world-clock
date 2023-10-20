function updateTime() {
  //Tokyo
  let tokyo = document.querySelector("#tokyo");
  let tokyoDateElement = tokyo.querySelector(".date");
  let tokyoTimeElement = tokyo.querySelector(".time");

  let tokyoTime = moment().tz(Asia / Tokyo);

  tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>A</small>]");

  //Paris
  let paris = document.querySelector("#paris");
  let parisDateElement = paris.querySelector(".date");
  let parisTimeElement = paris.querySelector(".time");

  let parisTime = moment().tz(Europe / Paris);

  parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>A</small>]");

  //Sydney

  let sydney = document.querySelector("#sydney");
  let sydneyDateElement = sydney.querySelector(".date");
  let sydneyTimeElement = sydney.querySelector(".time");

  let sydneyTime = moment().tz(Australia / Sydney);

  sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
  sydneyTimeElement.innerHTML = sydneyTime.format("h:mm:ss [<small>A</small>]");

  //London
  let london = document.querySelector("#london");
  let londonDateElement = london.querySelector(".date");
  let londonTimeElement = london.querySelector(".time");

  let londonTime = moment().tz(Europe / london);

  londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
  londonTimeElement.innerHTML = londonTime.format("h:mm:ss [<small>A</small>]");
}

updateTime();
setInterval(updateTime, 1000);
