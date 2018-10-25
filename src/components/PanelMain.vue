<template>
  <div class="box">
          <div class="columns is-centered is-mobile">
            <div class="column is-4 has-text-centered">
              <p class='value'>{{windSpeed}} km/h</p>
              <i class='wi wi-windy'></i>
              <p class='name'>Wind</p>
            </div>
            <div class="column is-4 has-text-centered">
              <p class='value'>{{humidity}}%</p>
              <i class='wi wi-humidity'></i>
              <p class='name'>Humidity</p>
            </div>
            <div class="column is-4 has-text-centered">
              <p class='value'>{{pressure}} hPa</p>
              <i class='wi wi-barometer'></i>
              <p class='name'>Pressure</p>
            </div>
          </div>
          </div>
</template>

<script>
export default {
  name: 'MainPanel',
  props: {
    windSpeed: {
      type: Number,
      required: true
    },
    humidity: {
      type: Number,
      required: true
    },
    pressure: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";

.value {
  color: $dark;
  font-weight: 500;
  font-size: 1.5rem;
}

.name {
color: $dark;
font-size: 1.2rem;
font-weight: 400;
}

.icon {
  width: 32px;
  height: auto;
}

.box {
  margin-top: 10%;
}

.wi {
  font-size: 24px;
  margin: 1rem;
  color: $dark
}

.column {
  border-right: 4px solid $background;
}

.column:last-child {
  border-right: none
}
</style>
