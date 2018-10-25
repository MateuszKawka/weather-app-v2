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
        <b-icon pack="fas" icon="star" class='bookmark-icon'></b-icon>
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
    components: {
  
    },
    methods: {
      weatherCardTrigger: function() {
        this.$store.commit('weatherCardTrigger')
      }
    }
  }
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
