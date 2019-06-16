export default {
  getAndSetWeatherData: function (store) {
    store.commit('dataReadyTrigger', false)
    let cityName = store.state.cityName
    let _0x3738 = ["\x61\x36\x38\x62\x31\x66\x32\x36\x63\x37\x63\x61\x33\x63\x35\x65\x63\x32\x61\x63\x38\x39\x65\x34\x35\x32\x61\x35\x31\x62\x64\x30"];

    function magic() {
      return _0x3738[0]
    }
    magic()
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=${_0x3738}`)
      .then(resp => resp.json())
      .then(data => store.commit('setWeatherData', data))
      .then(() => {
        store.commit('dataReadyTrigger', true)
        store.commit('setCityName', store.state.weatherData.name)
      }
      )
      .catch(error => {
        console.log(error)
      })
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