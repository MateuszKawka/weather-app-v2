<template>
  <div class="container">
    <BarTop />
    <div class="card">
      <div class="card-image">
        <figure class="image">
          <img src="~@/assets/moon.svg" alt="Placeholder image">
        </figure>
      </div>
      <div class="card-content ">
        <div class="container is-fluid has-text-centered">
          <p class="subtitle is-1 temp">{{weatherData.main.temp}}&deg;C</p>
          <p class="subtitle is-4">{{weatherData.name}}</p>
          <p class="subtitle is-4 description">{{weatherData.weather[0].description}}</p>
        </div>
        <div class="container is-fluid">
          <PanelMain :windSpeed='weatherData.wind.speed' :humidity='weatherData.main.humidity' :pressure='weatherData.main.pressure' />
        </div>
        <div class="container is-fluid">
          <PanelExtra :pressure='weatherData.main.pressure' />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BarTop from '@/components/BarTop.vue'
  import PanelMain from '@/components/PanelMain.vue'
  import PanelExtra from '@/components/PanelExtra.vue'
  
  export default {
    name: 'CardWeather',
    components: {
      BarTop,
      PanelMain,
      PanelExtra
    },
    computed: {
      weatherData: function() {
        return this.$store.state.weatherData
      }
    },
    mounted() {
      this.$store.dispatch('getAndSetWeatherData')
    }
  }
</script>

<style lang="scss" scoped>
  .card-content {
    padding: 1rem;
    height: 60%;
  }
  
  .card {
    height: 100%;
    box-shadow: none;
    background: none;
  }
  
  .card-image {
    height: 15%;
    margin-top: 10%;
  }
  
  .container {
    top: 0;
  }
  
  .card .container {
    margin-top: 2rem;
  }
  
  .columns {
    margin: 0;
  }
  
  .image {}
  
  .image img {
    height: 92px;
  }
  
  .box {
    box-shadow: none;
    padding: 0;
  }
  
  .main-info {
    color: #A0C1B9;
    font-weight: 600;
  }
  
  .title {
    margin-bottom: 1rem;
  }
  
  .wi {
    font-size: 3rem;
  }
  
  .description {}
  
  .subtitle {
    margin-bottom: 0 !important;
  }
</style>
