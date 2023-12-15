function updateTime() {
  let lacityElement = document.querySelector("#los-angeles");
  if (lacityElement) {
    let lacityDateElement = lacityElement.querySelector(".current-date");
    let lacityTimeElement = lacityElement.querySelector(".current-time");
    let lacityTime = moment().tz("America/Los_Angeles");
    lacityDateElement.innerHTML = lacityTime.format("MMMM Do YYYY");
    lacityTimeElement.innerHTML = lacityTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let parisCityElement = document.querySelector("#paris");
  if (parisCityElement) {
    let parisCityDateElement = parisCityElement.querySelector(".current-date");
    let parisCityTimeElement = parisCityElement.querySelector(".current-time");
    let parisCityTime = moment().tz("Europe/Paris");
    parisCityDateElement.innerHTML = parisCityTime.format("MMMM Do YYYY");
    parisCityTimeElement.innerHTML = parisCityTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let baCityElement = document.querySelector("#buenos-aires");
  if (baCityElement) {
    let baCityDateElement = baCityElement.querySelector(".current-date");
    let baCityTimeElement = baCityElement.querySelector(".current-time");
    let baCityTime = moment().tz("America/Argentina/Buenos_Aires");
    baCityDateElement.innerHTML = baCityTime.format("MMMM Do YYYY");
    baCityTimeElement.innerHTML = baCityTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  setInterval(function () {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
      cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `<div class="city"><div><h2>${cityName}</h2><div class="current-date">${cityTime.format(
      "MMMM Do YYYY"
    )}</div></div><div class="current-time">${cityTime.format(
      "h:mm:ss"
    )} <small>${cityTime.format(
      "A"
    )}</small></div></div> <a href="index.html">All cities</a>`;
  }, 1000);
}

setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
