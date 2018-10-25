export default {
  filterList: function(state) {
      let filteredList = []
      state.shortCities.filter(item => {
        if(item.name.toLowerCase().indexOf(state.searchQ.toLowerCase()) > -1)
        filteredList.unshift(item)
            
            // output max results
            if(filteredList.length > 5) {
              filteredList.length = 5
            }
            
        });
        return filteredList
    }
}