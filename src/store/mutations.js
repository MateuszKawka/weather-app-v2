export default {
  setWeatherData: (state,data) => state.weatherData  = data,
  setCitiesList: (state,data) => state.cities = data,
  weatherCardTrigger: state => state.showWeatherCard = !state.showWeatherCard,
  clearFilteredList: state => state.filteredList = [],
  addToFilteredList: (state, data) => state.filteredList.unshift(data),
  setSearchQ: (state, data) => state.searchQ = data,
  setCityName: (state, data) => state.cityName = data,
  showListTrigger: (state, data) => state.showList = data
}