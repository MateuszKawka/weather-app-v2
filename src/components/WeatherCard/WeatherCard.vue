<template>
  <div>
    <BarWeatherCard />
    <div class="card" v-if='dataReady'>
      <ImageWeatherCard />
      <div class="card-content">
        <MainInfoWeatherCard :temp='weatherData.main.temp' :cityName='weatherData.name' :description='weatherData.weather[0].description' />
        <MainPanelWeatherCard :windSpeed='weatherData.wind.speed' :humidity='weatherData.main.humidity' :pressure='weatherData.main.pressure' />
        <ExtraPanelWeatherCard :clouds='weatherData.clouds.all' :visibility='weatherData.main.pressure' :rain='weatherData.rain' :snow='weatherData.snow' />
      </div>
    </div>
  </div>
</template>

<script>
  import BarWeatherCard from "@/components/WeatherCard/BarWeatherCard.vue";
  import MainPanelWeatherCard from "@/components/WeatherCard/MainPanelWeatherCard.vue";
  import ExtraPanelWeatherCard from "@/components/WeatherCard/ExtraPanelWeatherCard.vue";
  import ImageWeatherCard from "@/components/WeatherCard/ImageWeatherCard.vue";
  import MainInfoWeatherCard from "@/components/WeatherCard/MainInfoWeatherCard.vue";
  export default {
    name: "CardWeather",
    components: {
      BarWeatherCard,
      MainPanelWeatherCard,
      ExtraPanelWeatherCard,
      ImageWeatherCard,
      MainInfoWeatherCard
    },
    computed: {
      weatherData: function() {
        return this.$store.state.weatherData;
      },
      dataReady: function() {
        return this.$store.state.dataReady;
      }
    },
    mounted() {
      this.$store.dispatch("getAndSetWeatherData");
    }
  };
</script>

<style lang="scss" scoped>
  
  .card-content {
    padding: 1rem;
    height: 60%;
  }
  
  .card {
    height: auto;
    box-shadow: none;
    background: none;
  }
  
 
  
  .columns {
    margin: 0;
  }
  
  .temp {
    color: $white;
  }
  
  .box {
    box-shadow: none;
    padding: 0;
  }
  
  .wi {
    font-size: 3rem;
  }
</style>
