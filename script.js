const key = '5a98650cc0bc4b3d0c7620eb098049a0'
const url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='


let cit = document.getElementById('city-name');
let wind = document.getElementById('wind')
let temperature = document.getElementById('temperature')
let humidity = document.getElementById('humid')
let btn = document.getElementById('btn');
let search = document.getElementById('search')
let image = document.getElementById('main-image')

async function checkweather(city) {
    const response = await fetch(url + city + `&appid=${key}`)
    var data = await response.json()

    cit.innerHTML = data.name;
    wind.innerHTML = data.wind.speed + 'km/h';
    temperature.innerHTML = Math.round(data.main.temp) + '°C'
    humidity.innerHTML = data.main.humidity + '%';
    if (data.weather[0].main == 'Clouds') {
        image.src = '/images/clouds.svg'
    }
    if (data.weather[0].main == 'Clear') {
        image.src = '/images/sun.svg'
    }
    console.log(data)
}
btn.addEventListener('click', () => {
    checkweather(search.value);

})


