const API_KEY = "0c4627e995849e86aca2c3b924970782";

function getWeather() {
    const CITY_NAME = document.getElementById('city-input').value;

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}&units=metric`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.cod === '404') {
                throw new Error('City not found');
            }
            document.getElementById('city').innerHTML= data.name;
            document.getElementById('temp').innerHTML = `${data.main.temp} °C`;
            document.getElementById('desc').innerHTML = data.weather[0].description;
        })
        .catch(error => {
            console.error('Error:', error);
            alert(error);
        });
}

