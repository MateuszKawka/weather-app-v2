<template>
  <div id="app" class='container is-fluid'>
    <transition name="slide-fade">
      <Start v-if='!showWeatherCard' />
    </transition>
    <transition name="slide-fade">
      <CardWeather v-if='showWeatherCard' class='card-weather' />
    </transition>
    <Alert />
  </div>
</template>

<script>
import CardWeather from "./components/CardWeather.vue";
import Start from "./components/Start.vue";
import Alert from "./components/Alert.vue";
export default {
  name: "app",
  components: {
    CardWeather,
    Start,
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
@import "@/assets/_variables.scss";

html {
  font-size: 62.5%;
}

.columns {
  margin: 0 !important;
}

.card-weather {
  position: absolute;
  top: 0;
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
