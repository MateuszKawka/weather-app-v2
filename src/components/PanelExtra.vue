<template>
  <div class="box">
  
    <div class="columns is-centered is-mobile">
      <div class="column is-3 has-text-centered">
       
        <p class='name'>Clouds</p>
        <i class="wi wi-cloudy"></i> 
        <p class='main-info'>{{clouds}}%</p>
      </div>
      <div class="column is-3 has-text-centered">
        <p class='name'>Visibility</p>
        <i class="wi wi-hurricane wi-rotate-90"></i> 
        <p class='main-info'>{{visibility}} km</p>
      </div>
      <div class="column is-3 has-text-centered">
        <p class='name'>Rain</p>
        <i class="wi wi-na"></i> 
        <p class='main-info'>{{rain || 'no'}}</p>
      </div>
      <div class="column is-3 has-text-centered">
        <p class='name'>Snow</p>
        <i class="wi wi-snow"></i> 
        <p class='main-info'>{{snow || 'no'}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ExtraPanel',
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
  }
</script>

<style lang="scss" scoped>
  .value {
    color: #A0C1B9;
    font-weight: 400;
  }

  .box {
    margin-top: 10%;
  }
  
  .name {
    color: #333333;
    margin-top: 1rem;
    font-weight: 400;
  }

  .main-info {
font-weight: 400;
font-size: 1.2rem;
  }
  
  .icon {
    width: 24px;
    height: auto;color: #98D5FF;
  }
  
  p {
    font-size: 1.2rem;
    color: #333333;
  }
  
  .column {
    padding: 1rem 0;
  }
  
  

.wi {
  color: #2cb383;
  font-size: 20px;
  margin: .5rem 0;
}
</style>

