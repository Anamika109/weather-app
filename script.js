const searches = document.getElementById("searching")
const information = document.getElementById("infobox")
const cityInput = document.getElementById("cityInput")
searches.addEventListener("click", function() {
    const city = cityInput.value;
    // information.innerHTML = "<h2>You searched for " + city + "</h2>"
    const stuff = getCoordinates(city)
    

})
console.log(cityInput.value)


async function getCoordinates(city) {
    const url = "https://geocoding-api.open-meteo.com/v1/search?name="
        + encodeURIComponent(city)
        + "&count=1&language=en&format=json";
    const response = await fetch(url);
    const data = await response.json();
    return  {
        name: data.results[0].name,
        longitude: data.results[0].longitude,
        latitude: data.results[0].latitude
    }
}

async function getWeather(latitude, longitude) {
    const url = "https://api.open-meteo.com/v1/forecast?latitude="
        + latitude
        + "&longitude="
        + longitude
        + "&current=temperature_2m,relative_humidity_2m,weather_code"
        + "&timezone=auto";
    const response = await fetch(url);
    const data = await response.json();
    return data.current
}

// const data = {"results":
//     [{"id":5907364,"name":"Brampton","latitude":43.68341,"longitude":-79.76633,"elevation":221.0,"feature_code":"PPL","country_code":"CA","admin1_id":6093943,"admin2_id":6100475,"admin3_id":13680198,"timezone":"America/Toronto","population":656480,"country_id":6251999,"country":"Canada","admin1":"Ontario","admin2":"Peel","admin3":"Brampton"}],
// "generationtime_ms":0.08010864}

{"latitude":43.67227,"longitude":-79.75425,"generationtime_ms":0.760197639465332,"utc_offset_seconds":-14400,"timezone":"America/Toronto","timezone_abbreviation":"GMT-4","elevation":222.0,"current_units":{"time":"iso8601","interval":"seconds","temperature_2m":"°C","relative_humidity_2m":"%","weather_code":"wmo code"},"current":{"time":"2026-10-22T19:45","interval":900,"temperature_2m":12.5,"relative_humidity_2m":77,"weather_code":0}}