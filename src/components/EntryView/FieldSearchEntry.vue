<template>
  <b-field class='is-primary'>
    <b-input placeholder="Search..." icon-pack="fas" icon="search" type="search" size="is-large" class='is-expanded is-twitter search-input' v-model='searchQ' @keyup.native='setSearchQ' @focus='showList'>
    </b-input>
  </b-field>
</template>


<script>
  export default {
    data() {
      return {
        searchQ: ""
      };
    },
    methods: {
      setSearchQ: function() {
        this.showList();
        this.$store.commit("setSearchQ", this.searchQ);
      },
      showList: function() {
        this.$store.commit("showListTrigger", true);
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "@/assets/_variables.scss";
  .button {
    padding: 0 1.5rem;
  }
  
  .icon {
    color: $dark;
  }
</style>
