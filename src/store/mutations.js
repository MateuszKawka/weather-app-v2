export default {
  setWeatherData: (state, data) => state.weatherData = data,
  setCitiesList: (state, data) => state.cities = data,
  weatherCardTrigger: state => state.showWeatherCard = !state.showWeatherCard,
  setSearchQ: (state, data) => state.searchQ = data,
  setCityName: (state, data) => state.cityName = data,
  saveCity: (state, data) => state.savedCities.push(data),
  removeCity: (state, data) => {
    let cityIndex = state.savedCities.findIndex(x => x.name === data);
    state.savedCities.splice(cityIndex, 1);
  },
  loadSavedCities: (state, data) => state.savedCities = data,
  setAlertText: (state, data) => state.alertText = data,
  dataReadyTrigger: (state, data) => state.dataReady = data
}