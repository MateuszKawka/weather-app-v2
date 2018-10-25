<template>
  <div id="app" class='container is-fluid'>
    <transition name="slide-fade">
      <Start v-if='!showWeatherCard' />
    </transition>
    <transition name="slide-fade">
      <CardWeather v-if='showWeatherCard' />
    </transition>
  </div>
</template>

<script>
  import CardWeather from './components/CardWeather.vue'
  import Start from './components/Start.vue'
  
  export default {
    name: 'app',
    components: {
      CardWeather,
      Start
    },
    mounted() {
  
    },
    computed: {
      showWeatherCard: function() {
        return this.$store.state.showWeatherCard
      }
    }
  }
</script>

<style lang="scss">
  html {
    font-size: 62.5%;
  }
  
  .columns {
    margin: 0 !important;
  }
  
  .wi {
    color: #fff;
  }
  
  #app {
    background: #e2efff;
    min-height: 100vh;
  }
  
  .slide-fade-enter-active {
    transition: all .4s ease;
  }
  
  .slide-fade-leave-active {
    transition: all .4s ease;
  }
  
  .slide-fade-enter,
  .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */
  
  {
    transform: translateY(24px);
    opacity: 0;
  }
</style>
