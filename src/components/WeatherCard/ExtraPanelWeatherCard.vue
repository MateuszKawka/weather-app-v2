<template>
  <div class="container is-fluid">
    <div class="box">
      <div class="columns is-centered is-mobile">
        <div class="column is-3 has-text-centered">
          <b-tooltip type='is-light' label="In kilometers per hour" :animated='true' :square='true' size='is-medium' position='is-right'>
          <p class='name'>Clouds</p>
          </b-tooltip>
          <p><i class="wi wi-cloudy"></i></p>
          <p class='value'>{{clouds}}%</p>
        </div>
        <div class="column is-3 has-text-centered">
          <b-tooltip type='is-light' label="In kilometers per hour" :animated='true' :square='true' size='is-medium'>
          <p class='name'>Visibility</p>
          </b-tooltip>
          <p><i class="wi wi-hurricane wi-rotate-90"></i></p>

          <p class='value'>{{visibility}} km</p>
        </div>
        <div class="column is-3 has-text-centered">
          <b-tooltip type='is-light' label="In kilometers per hour" :animated='true' :square='true' size='is-medium'>
          <p class='name'>Rain</p>
          </b-tooltip>
          <p><i class="wi wi-na"></i></p>
          <p class='value'>{{rain || 'no'}}</p>
        </div>
        <div class="column is-3 has-text-centered">
          <b-tooltip type='is-light' label="In kilometers per hour" :animated='true' :square='true' size='is-medium' position='is-left'>
          <p class='name'>Snow</p>
          </b-tooltip>
          <p><i class="wi wi-snow"></i></p>
          <p class='value'>{{snow || 'no'}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ExtraPanel",
    props: {
      clouds: {
        type: Number,
        required: true
      },
      visibility: {
        type: Number,
        required: true
      },
      rain: {
        type: Number,
        required: false
      },
      snow: {
        type: Number,
        required: false
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "@/assets/_variables.scss";
  .value {
    color: $white;
    font-weight: 400;
    font-size: 1.2rem;
  }
  
  .box {
    margin-top: 10%;
    background: $light-background
  }
  
  .name {
    color: $white;
    margin-top: 1rem;
    font-weight: 400;
    font-size: 1.2rem;
  }
  
  .column {
    padding: 1rem 0;
  }
  
  .wi {
    color: $details;
    font-size: 20px;
    margin: 0.5rem 0;
  }

  .tooltip:after {
    font-size: 1.6rem !important;
  }
</style>

