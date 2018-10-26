<template>
  <div class='bar container'>
    <div class="columns is-vcentered is-mobile">
      <div class="column is-4 has-text-centered">
        <b-icon pack="fas" icon="chevron-left" class='icon' @click.native='weatherCardTrigger'></b-icon>
      </div>
      <div class="column is-4 has-text-centered">
        <h2 class='title is-3 main-title'>Weather</h2>
      </div>
      <div class="column is-4 has-text-centered">
        <b-icon pack="fas" icon="star" class='bookmark-icon' @click.native='saveOrRemoveCity' :class='{"bookmark-icon--save": isCitySaved}'></b-icon>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
        isCitySaved: Boolean
      };
    },
    computed: {},
    methods: {
      weatherCardTrigger: function() {
        this.$store.commit("weatherCardTrigger");
      },
      saveOrRemoveCity: function() {
        let cityName = this.$store.state.cityName;
        if (this.isCitySaved === false) {
          this.$store.commit("saveCity", cityName);
          this.isCitySaved = true;
          this.$store.commit("setAlertText", "City saved succesfull!");
        } else {
          this.$store.commit("removeCity", cityName);
          this.isCitySaved = false;
          this.$store.commit("setAlertText", "City removed succesfull!");
        }
        this.saveCitiesToLocalStorage();
      },
      saveCitiesToLocalStorage: function() {
        this.$store.dispatch("saveCitiesToLocalStorage");
      },
      checkIfCityIsSaved: function() {
        let name = this.$store.state.cityName;
        let cities = this.$store.state.savedCities;
        if (cities.indexOf(name) > -1) {
          this.isCitySaved = true;
        } else {
          this.isCitySaved = false;
        }
      }
    },
    beforeMount() {
      this.checkIfCityIsSaved();
    }
  };
</script>

<style lang="scss" scoped>
  @import "@/assets/_variables.scss";
  .bar {
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .icon {
    color: $white;
    font-size: 1.6rem
  }
  
  .title {
    padding-top: 4px;
    font-weight: 500;
    color: $white;
  }
  
  .columns {
    width: 100%;
  }
  
  .column {
    padding: 0;
  }
  
  .bookmark-icon {
    color: $light-background;
  }
  
  .bookmark-icon--save {
    color: $white;
    font-size: 1.6rem;
  }
</style>
