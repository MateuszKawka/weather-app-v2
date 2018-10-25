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
      <b-field v-if='false'>
        <b-input placeholder="Search..." type="search" icon="magnify">
        </b-input>
        <p class="control">
          <button class="button is-primary">Search</button>
        </p>
      </b-field>
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
      } else {
        this.$store.commit("removeCity", cityName);
        this.isCitySaved = false;
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
.bar {
  height: 10vh;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.icon {
  font-size: 24px;
}

.title {
  padding-top: 4px;
  font-weight: 500;
}

.columns {
  width: 100%;
}

.column {
  padding: 0;
}

.bookmark-icon {
  color: #ababab;
}

.bookmark-icon--save {
  color: #ffcf11;
}
</style>
