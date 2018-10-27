<template>
  <div class="container is-fluid">
    <div class="box">
      <div class="columns is-centered is-mobile">
        <div class="column is-4 has-text-centered">
          <b-tooltip type='is-light' label="Meter/sec" :animated='true' :square='false' size='is-large' position='is-right'>
            <p class='value'>{{windSpeed}}</p>
          </b-tooltip>
          <p><i class='wi wi-windy'></i></p>
          <p class='name'>Wind</p>
        </div>
        <div class="column is-4 has-text-centered">
          <b-tooltip type='is-light' label="Percent" :animated='true' :square='false' size='is-large'>
            <p class='value'>{{humidity}}</p>
          </b-tooltip>
          <p><i class='wi wi-humidity'></i></p>
          <p class='name'>Humidity</p>
        </div>
        <div class="column is-4 has-text-centered">
          <b-tooltip type='is-light' label="Hectopascal" :animated='true' :square='false' size='is-large' position='is-left'>
            <p class='value'>{{pressure}}</p>
          </b-tooltip>
          <p><i class='wi wi-barometer'></i></p>
          <p class='name'>Pressure</p>
        </div>
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
  
  .value {
    color: $details;
    font-weight: 400;
    font-size: 1.8rem;
  }
  
  .name {
    color: $white;
    font-size: 1.2rem;
    font-weight: 400;
  }
  
  .icon {
    width: 32px;
    height: auto;
  }
  
  .box {
    margin-top: 10%;
    background: $light-background
  }
  
  .wi {
    font-size: 24px;
    margin: .5rem 0;
    color: $white
  }
  
  .column {
    border-right: 1px solid $background;
  }
  
  .column:last-child {
    border-right: none
  }
  
  .tooltip:after {
    font-size: 1.6rem !important;
  }
</style>
