<template>
  <div class='list-container'>
    <div class="box">
      <transition-group name="slide-right" class='list' tag='ul'>
        <li class='list__header has-text-right' key='list-header'>
          <p class='is-primary'>Cities list:</p>
          <b-icon pack="fas" icon="times" @click.native='closeList'></b-icon>
        </li>
        <li v-for='(item, index) in cities' :key='index' class='list__item' @click='setCityName'>{{item.name}}</li>
      </transition-group>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    computed: {
      cities: function() {
        if (this.$store.getters.filterList.length > 0) {
          return this.$store.getters.filterList;
        } else {
          return [{
            name: 'no results'
          }]
        }
      }
    },
    methods: {
      setCityName: function(el) {
        let cityName = el.target.textContent;
        this.$store.commit("setCityName", cityName);
        this.$store.commit("weatherCardTrigger")
      },
      closeList: function() {
        this.$store.commit('showListTrigger', false)
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "@/assets/_variables.scss";
  .list-container {
    position: absolute;
    width: 100%;
    left: 0;
    padding: 0 1rem;
    bottom: 4rem;
  }
  
  .list {
    width: 100%;
  }
  
  .list__header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 400;
    font-size: 1.4rem;
    padding: .5rem 1rem;
  }
  
  .list__item {
    color: $dark;
    font-size: 1.6rem;
    font-weight: 500;
    padding: .5rem 1rem;
    cursor: pointer;
  }
  
  .list__item:nth-child(2n) {
    background: $light-gray;
  }
  
  .box {
    padding: 0rem 0;
  }
  
  .slide-right-enter-active {
    transition: all .2s ease;
  }
  
  .slide-right-leave-active {
    transition: all .2s ease;
  }
  
  .slide-right-enter,
  .slide-right-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */
  
  {
    opacity: 0;
  }
</style>
