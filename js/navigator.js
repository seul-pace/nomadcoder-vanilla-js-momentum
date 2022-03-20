const info = document.querySelector("#info");

const API_KEY = "75ec16278251a26322819e6041043069";
const ERROR_MSG = "지원되지 않는 기능입니다.";

// 시계
const divClock = document.createElement("div");
info.appendChild(divClock);

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    divClock.innerText = `지금 시간은 ${hours}시 ${minutes}분 ${seconds}초입니다.`;
}

getClock();
setInterval(getClock, 1000);

// 위치, 날씨
const divGeo = document.createElement("div");
const divWeather = document.createElement("div");
info.appendChild(divGeo);
info.appendChild(divWeather);

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;
    fetch(url)
        .then((response) => response.json())
        .then(data => {
            divWeather.innerText = `현재 날씨는 [${data.weather[0].description}]입니다.`;
            divGeo.innerText = `현재 위치는 [${data.name}]입니다.`;
    });
}

function onGeoErr() {
    divWeather.innerText = ERROR_MSG;
    divGeo.innerText = ERROR_MSG;
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);