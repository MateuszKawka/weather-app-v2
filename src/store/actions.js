export default {
  getAndSetWeatherData: function (store) {
    let cityName = store.state.cityName
    let _0x3f2c=['a68b1f26c7ca3c5ec2ac89e452a51bd0'];(function(_0x59dec9,_0x3d5c81){var _0x4dc540=function(_0x112717){while(--_0x112717){_0x59dec9['push'](_0x59dec9['shift']());}};_0x4dc540(++_0x3d5c81);}(_0x3f2c,0x99));var _0x3594=function(_0x2f663d,_0x4c18b1){_0x2f663d=_0x2f663d-0x0;var _0x578ee5=_0x3f2c[_0x2f663d];return _0x578ee5;};_0x3594('0x0');
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=${_0x3f2c}`)
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

