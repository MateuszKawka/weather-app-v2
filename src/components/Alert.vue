<template>
  <b-notification auto-close :duration='duration' :active.sync="visible"  type='is-light'>
    <p>{{alertText}}</p>
  </b-notification>
</template>

<script>
  export default {
    name: "Alert",
    data() {
      return {
        visible: false,
        duration: 3000
      };
    },
    computed: {
      alertText: function() {
        return this.$store.state.alertText;
      }
    },
    watch: {
      // whenever question changes, this function will run
      alertText: function() {
        console.log("data change");
        this.visible = true;
        if (this.duration < 5001) {
          this.duration += 2000;
        }
      }
    }
  };
</script>


<style lang='scss' scoped>
  .notification {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 100;
  }
  
  .notification p {
    font-size: 1.6rem;
    font-weight: 400;
  }
</style>
