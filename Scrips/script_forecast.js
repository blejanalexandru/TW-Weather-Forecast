let forecast = {
    apiKey: "9c326f854c8945b5aed895ee4e202d9a",
    fetchForecast: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/forecast?q=" +
          city +
          "&units=metric&appid=" +
          this.apiKey
      )
        .then((resp) => {
          if (!resp.ok) {
            alert("No Forecast found.");
            throw new Error("No Forecast found.");
          }
          return resp.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayForecast: function (data) {
        console.log(data);
        let row = document.querySelector('.weather loading');
        row.innerHTML = data.daily
      .map((day, idx) => {
        if (idx <= 5) {
          let dt = new Date(day.dt * 1000); //timestamp * 1000
        }});
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        var intvalue = Math.round( temp );
        document.querySelector(".city").innerText = "Forecast in " + name;
        document.querySelector(".icon").src =
            "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = intvalue + "°C";
        document.querySelector(".humidity").innerText =
            "Humidity: " + humidity + "%";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage =
            "url('https://source.unsplash.com/1920x1080/?" + name + "')";
    },
    search: function () {
        this.fetchForecast(document.querySelector(".search-bar").value);
    },
  };
  
document.querySelector(".btn").addEventListener("click", function () {
    forecast.search();
});
  
document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        forecast.search();
      }
});
  
forecast.fetchForecast("Craiova");