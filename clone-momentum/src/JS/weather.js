const API_KEY = "61e2c61924ac9d567926ba63686aa752"

function onGeoOK(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url).then(response => response.json())
    .then(data => {
        const city = document.querySelector("#city span");
        const weather = document.querySelector("#weather span")
        city.innerText = `${data.name}, ${data.sys.country}`;
        weather.innerText = `${Math.round(data.main.temp)}°C, ${data.weather[0].main}`
    });
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
