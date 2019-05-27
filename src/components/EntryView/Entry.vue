<template>
  <div class="container">
    <div class="hero is-fullheight">
      <div class="hero-head has-text-centered">
        <h1 class='title is-2'>Wether app</h1>
        <p class='subtitle is-5'>based on openweathermap api </p>
      </div>
      <div class="hero-body">
        <CitiesSavedEntry />
      </div>
      <div class="hero-foot">
        <div class="columns is-multiline">
          <div class="column is-12 has-text-centered">
            <FieldSearchEntry />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import FieldSearchEntry from '@/components/EntryView/FieldSearchEntry.vue'
  import CitiesSavedEntry from '@/components/EntryView/CitiesSavedEntry.vue'
  
  export default {
    name: 'Start',
    components: {
      FieldSearchEntry,
      CitiesSavedEntry
    },
    methods: {
      weatherCardTrigger: function() {
        this.$store.commit('weatherCardTrigger')
      }
    },
  }
</script>


<style lang="scss" scoped>
  
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
  
  .title,
  .subtitle {
    color: $white;
  }
</style>
