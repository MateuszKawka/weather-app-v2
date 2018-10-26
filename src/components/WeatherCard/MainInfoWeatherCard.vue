<template>
  <div class="container is-fluid has-text-centered">
    <p class="subtitle is-1 temp">{{temp}}&deg;C</p>
    <p class="subtitle is-4">{{cityName}}</p>
    <p class="subtitle is-4 description">{{description}}</p>
  </div>
</template>


<script>
  export default {
    name: "MainInfoWeatherCard",
    props: {
      temp: {
        type: Number,
        required: true
      },
      cityName: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "@/assets/_variables.scss";
  .temp {
    color: $white;
    margin-bottom: 1rem;
  }
  
  .subtitle {
    color: $white;
    margin-bottom: 0 !important;
  }
</style>


