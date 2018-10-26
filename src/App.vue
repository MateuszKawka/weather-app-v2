<template>
  <div id="app" class='container is-fluid'>
    <transition name="slide-fade">
      <Entry v-if='!showWeatherCard' />
    </transition>
    <transition name="slide-fade">
      <WeatherCard v-if='showWeatherCard' class='card-weather' />
    </transition>
    <Alert />
  </div>
</template>

<script>
  import WeatherCard from "./components/WeatherCard/WeatherCard.vue";
  import Entry from "./components/EntryView/Entry.vue";
  import Alert from "./components/Alert.vue";
  
  export default {
    name: "app",
    components: {
      WeatherCard,
      Entry,
      Alert
    },
    mounted() {
      this.$store.dispatch("getCitiesFromLocalStorage");
    },
    computed: {
      showWeatherCard: function() {
        return this.$store.state.showWeatherCard;
      }
    }
  };
</script>

<style lang="scss">
  
  .columns {
    margin: 0 !important;
  }
  
  .card-weather {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
  }
  
  #app {
    background: $background;
    min-height: 100vh;
  }
  
  .slide-fade-enter-active {
    transition: all 0.4s ease;
  }
  
  .slide-fade-leave-active {
    transition: all 0.4s ease;
  }
  
  .slide-fade-enter,
  .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */
  
  {
    transform: translateY(24px);
    opacity: 0;
  }
</style>
