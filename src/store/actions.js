export default {
  getAndSetWeatherData: function (store) {
    let cityName = store.state.cityName
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=a68b1f26c7ca3c5ec2ac89e452a51bd0`)
      .then(resp => resp.json())
      .then(data => store.commit('setWeatherData', data))
  },
  loadCityList: function () {
    fetch("https://mateuszkawka.github.io/weather-app/src/current.city.list.min.json")
      .then(resp => resp.json())
      .then(function (data) {
        console.log(data)
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  saveCitiesToLocalStorage(store) {
    let cities = store.state.savedCities;
    let citiesJSON = JSON.stringify(cities)
    localStorage.setItem('cities', citiesJSON);
  },
  getCitiesFromLocalStorage(store) {
    if (localStorage.getItem('cities') !== null) {
      let citiesJSON = localStorage.getItem('cities');
      let cities = JSON.parse(citiesJSON);
      store.commit('loadSavedCities', cities)
    }
  },
  removeCityFromSavedCities(store) {
    let cities = store.state.savedCities;
    let citiesJSON = JSON.stringify(cities)
    localStorage.setItem('cities', citiesJSON);
  }
}

