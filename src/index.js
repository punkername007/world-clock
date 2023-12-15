function updateCities() {
  let lacityElement = document.querySelector("#los-angeles");
  let lacityDateElement = lacityElement.querySelector(".current-date");
  let lacityTimeElement = lacityElement.querySelector(".current-time");
  let lacityTime = moment().tz("America/Los_Angeles");
  lacityDateElement.innerHTML = lacityTime.format("MMMM Do YYYY");
  lacityTimeElement.innerHTML = lacityTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let parisCityElement = document.querySelector("#paris");
  let parisCityDateElement = parisCityElement.querySelector(".current-date");
  let parisCityTimeElement = parisCityElement.querySelector(".current-time");
  let parisCityTime = moment().tz("Europe/Paris");
  parisCityDateElement.innerHTML = parisCityTime.format("MMMM Do YYYY");
  parisCityTimeElement.innerHTML = parisCityTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
setInterval(updateCities, 1000);
