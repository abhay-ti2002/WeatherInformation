const apikey = "11d7beabaee0ea5e25587c6ed6f99a59";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
// console.log(apikey);
// console.log(url);
const temp = document.querySelector(".temp");
const cityName = document.querySelector("#cityName");
const humidity = document.querySelector("#humidityinper");
const wind = document.querySelector("#windspeed");
const searchbtn = document.querySelector("#searchbtn");
const cityQuery = document.querySelector("#searchcity");

// ------------------------Search bar----------------

searchbtn.addEventListener("click", function (event) {
          console.log(event);
        const citySearch = cityQuery.value;
        // console.log(citySearch); 
        checkWether(citySearch);
});

cityQuery.addEventListener("keydown", function (event) {
        //   console.log(event);
        if(event.key === "Enter"){
        const citySearch = cityQuery.value;
        
        // console.log(citySearch); 
        checkWether(citySearch);
        }
});

// ---------------------------All About api-------------

async function checkWether(query) {
        console.log(query);
        const res = await fetch(`${url}${query}&apiKey=${apikey}`);
        const data = await res.json();
        // console.log(data);
        temp.innerHTML = Math.round(data.main.temp) + "°C";
        cityName.innerHTML = data.name;
        humidity.innerHTML = data.main.humidity + "%";
        wind.innerHTML = data.wind.speed + "Km/h";

//     --------------------Change images according to weather------------
       
         if (data.weather[0].main === "Clear") {
                document.querySelector("#weatherimg").src = "clear.png";
        }
        else if (data.weather[0].main === "Clouds") {
                document.querySelector("#weatherimg").src = "clouds.png";
        }
        else if (data.weather[0].main === "Haze") {
                document.querySelector("#weatherimg").src = "drizzle.png";
        }
        else if (data.weather[0].main === "Rain") {
                document.querySelector("#weatherimg").src = "rain.png";
        }
        else if (data.weather[0].main === "Mist") {
                document.querySelector("#weatherimg").src = "mist.png";
        }
        else if (data.weather[0].main === "Snow") {
                document.querySelector("#weatherimg").src = "snow.png";
        }
       
}
