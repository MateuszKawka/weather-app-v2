<template>
  <b-field>
    <b-input
      placeholder="Search..."
      type="search"
      icon-pack="fas"
      icon="search"
      size="is-large"
      class="is-expanded"
      v-model="searchQ"
      @keyup.native="setSearchQ"
      @keyup.native.enter='getCity'
    ></b-input>
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
      this.searchQ.charAt(0).toUpperCase()
      console.log(this.searchQ)
      this.$store.commit("setSearchQ", this.searchQ);
    },
    getCity: function() {
      this.$store.commit("setCityName", this.searchQ);
      this.$store.commit("weatherCardTrigger");
    }
  }
};
</script>

<style lang="scss" scoped>
.button {
  padding: 0 1.5rem;
  height: 100%;
}

.icon {
  color: $dark;
}

.search-input {
  background: #384266 !important;
  border: none;
}
</style>
