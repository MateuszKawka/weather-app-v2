export default {
  getAndSetWeatherData: function (store) {
    let cityName = store.state.cityName
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=a68b1f26c7ca3c5ec2ac89e452a51bd0`)
      .then(resp => resp.json())
      .then(data =>  store.commit('setWeatherData', data))
  },
  loadCityList: function(store) {
    fetch("https://mateuszkawka.github.io/weather-app/src/current.city.list.min.json")
      .then(resp => resp.json())
      .then(function(data) {
        console.log(data)
      })
      .catch(function(error) {
        console.log(error);
      });
  }
}

