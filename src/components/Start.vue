<template>
  <div class="container">
    <div class="hero">
      <div class="hero-head has-text-centered">
        <h1 class='title is-2'>Wether app</h1>
        <p class='subtitle is-5'>based on openweathermap api </p>
      </div>
      <div class="hero-body">
        <SavedCities />
      </div>
      <div class="hero-foot">
        <div class="columns is-multiline">
          <div class="column is-12 has-text-centered">
            <transition name="slide-fade" mode='in-out'>
              <SearchList v-if='showList' />
            </transition>
            <SearchField />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import SearchField from '@/components/SearchField.vue'
  import SearchList from '@/components/SearchList.vue'
  import SavedCities from '@/components/SavedCities.vue'
  
  export default {
    name: 'Start',
    components: {
      SearchList,
      SearchField,
      SavedCities
    },
    methods: {
      weatherCardTrigger: function() {
        this.$store.commit('weatherCardTrigger')
      }
    },
    computed: {
      showList: function() {
        return this.$store.state.showList
      }
    }
  }
</script>


<style lang="scss" scoped>
  .container {}
  
  .hero {
    padding-bottom: 15%;
    padding-top: 15%;
  }
  
  .hero-body {
    align-items: flex-start !important
  }
  
  .hero-foot {
    position: relative;
  }
</style>
