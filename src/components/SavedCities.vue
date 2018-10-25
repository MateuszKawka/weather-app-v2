<template>
  <div class="container">
    <div class="columns is-multiline is-mobile">
      <div class="column is-6" v-for='(item,index) in savedCities' :key='index'>
        <div class='box bookmarks has-text-centered'>
          <p class='bookmarks__name'  @click='loadWeatherCard'>{{item}}</p>
        </div>
      </div>
    </div>
  
  </div>
</template>

<script>
export default {
  name: 'SavedCities',
  computed: {
    savedCities: function() {
      return this.$store.state.savedCities
    }
  },
  methods: {
    loadWeatherCard: function(el) {
        let cityName = el.target.textContent;
        this.$store.commit("setCityName", cityName);
        this.$store.commit("weatherCardTrigger")
      }
  }
}
</script>


<style lang="scss" scoped>
  .bookmarks__name {
    font-size: 1.4rem;
  }
</style>
