<template>
  <div class="box">
  
    <div class="columns is-centered is-mobile">
      <div class="column is-3 has-text-centered">
       
        <p class='name'>Clouds</p>
        <i class="wi wi-cloudy"></i> 
        <p class='value'>{{clouds}}%</p>
      </div>
      <div class="column is-3 has-text-centered">
        <p class='name'>Visibility</p>
        <i class="wi wi-hurricane wi-rotate-90"></i> 
        <p class='value'>{{visibility}} km</p>
      </div>
      <div class="column is-3 has-text-centered">
        <p class='name'>Rain</p>
        <i class="wi wi-na"></i> 
        <p class='value'>{{rain || 'no'}}</p>
      </div>
      <div class="column is-3 has-text-centered">
        <p class='name'>Snow</p>
        <i class="wi wi-snow"></i> 
        <p class='value'>{{snow || 'no'}}</p>
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
  color: $details;
  font-weight: 400;
  font-size: 1.2rem;
}

.box {
  margin-top: 10%;
}

.name {
  color: $dark;
  margin-top: 1rem;
  font-weight: 400;
  font-size: 1.2rem;
}

.column {
  padding: 1rem 0;
}

.wi {
  color: $dark;
  font-size: 20px;
  margin: 0.5rem 0;
}
</style>

