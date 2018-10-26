(function(t){function e(e){for(var s,r,o=e[0],c=e[1],l=e[2],d=0,f=[];d<o.length;d++)r=o[d],a[r]&&f.push(a[r][0]),a[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(f.length)f.shift()();return n.push.apply(n,l||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],s=!0,o=1;o<i.length;o++){var c=i[o];0!==a[c]&&(s=!1)}s&&(n.splice(e--,1),t=r(r.s=i[0]))}return t}var s={},a={app:0},n=[];function r(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=s,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(i,s,function(e){return t[e]}.bind(null,s));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/weather-app-v2/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"049f":function(t,e,i){"use strict";var s=i("59a6"),a=i.n(s);a.a},"0500":function(t,e,i){},"150b":function(t,e,i){},2665:function(t,e,i){},"266b":function(t,e,i){"use strict";var s=i("eb0f"),a=i.n(s);a.a},2856:function(t,e,i){},"2edf":function(t,e,i){"use strict";var s=i("791f"),a=i.n(s);a.a},3136:function(t,e,i){t.exports=i.p+"img/moon.af8d4b4a.svg"},"35f4":function(t,e,i){"use strict";var s=i("60f8"),a=i.n(s);a.a},"39f3":function(t,e,i){"use strict";var s=i("65b1"),a=i.n(s);a.a},"3fa4":function(t,e,i){"use strict";var s=i("bfc0"),a=i.n(s);a.a},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("097d");var s=i("2b0e"),a=i("2f62"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container is-fluid",attrs:{id:"app"}},[i("transition",{attrs:{name:"slide-fade"}},[t.showWeatherCard?t._e():i("Start")],1),i("transition",{attrs:{name:"slide-fade"}},[t.showWeatherCard?i("CardWeather",{staticClass:"card-weather"}):t._e()],1),i("Alert")],1)},r=[],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"c"},[i("BarTop"),i("div",{staticClass:"card"},[t._m(0),i("div",{staticClass:"card-content "},[i("div",{staticClass:"container is-fluid has-text-centered"},[i("p",{staticClass:"subtitle is-1 temp"},[t._v(t._s(t.weatherData.main.temp)+"°C")]),i("p",{staticClass:"subtitle is-4"},[t._v(t._s(t.weatherData.name))]),i("p",{staticClass:"subtitle is-4 description"},[t._v(t._s(t.weatherData.weather[0].description))])]),i("div",{staticClass:"container is-fluid"},[i("PanelMain",{attrs:{windSpeed:t.weatherData.wind.speed,humidity:t.weatherData.main.humidity,pressure:t.weatherData.main.pressure}})],1),i("div",{staticClass:"container is-fluid"},[i("PanelExtra",{attrs:{clouds:t.weatherData.clouds.all,visibility:t.weatherData.main.pressure,rain:t.weatherData.rain,snow:t.weatherData.snow}})],1)])])],1)])},c=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card-image"},[s("figure",{staticClass:"image"},[s("img",{attrs:{src:i("3136"),alt:"Placeholder image"}})])])}],l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bar container"},[i("div",{staticClass:"columns is-vcentered is-mobile"},[i("div",{staticClass:"column is-4 has-text-centered"},[i("b-icon",{staticClass:"icon",attrs:{pack:"fas",icon:"chevron-left"},nativeOn:{click:function(e){return t.weatherCardTrigger(e)}}})],1),t._m(0),i("div",{staticClass:"column is-4 has-text-centered"},[i("b-icon",{staticClass:"bookmark-icon",class:{"bookmark-icon--save":t.isCitySaved},attrs:{pack:"fas",icon:"star"},nativeOn:{click:function(e){return t.saveOrRemoveCity(e)}}})],1)])])},u=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"column is-4 has-text-centered"},[i("h2",{staticClass:"title is-3 main-title"},[t._v("Weather")])])}],d={components:{},data:function(){return{isCitySaved:Boolean}},computed:{},methods:{weatherCardTrigger:function(){this.$store.commit("weatherCardTrigger")},saveOrRemoveCity:function(){var t=this.$store.state.cityName;!1===this.isCitySaved?(this.$store.commit("saveCity",t),this.isCitySaved=!0,this.$store.commit("setAlertText","City saved succesfull!")):(this.$store.commit("removeCity",t),this.isCitySaved=!1,this.$store.commit("setAlertText","City removed succesfull!")),this.saveCitiesToLocalStorage()},saveCitiesToLocalStorage:function(){this.$store.dispatch("saveCitiesToLocalStorage")},checkIfCityIsSaved:function(){var t=this.$store.state.cityName,e=this.$store.state.savedCities;e.indexOf(t)>-1?this.isCitySaved=!0:this.isCitySaved=!1}},beforeMount:function(){this.checkIfCityIsSaved()}},f=d,h=(i("a733"),i("2877")),v=Object(h["a"])(f,l,u,!1,null,"701d549c",null);v.options.__file="BarTop.vue";var m=v.exports,p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"box"},[i("div",{staticClass:"columns is-centered is-mobile"},[i("div",{staticClass:"column is-4 has-text-centered"},[i("p",{staticClass:"value"},[t._v(t._s(t.windSpeed))]),i("i",{staticClass:"wi wi-windy"}),i("p",{staticClass:"name"},[t._v("Wind")])]),i("div",{staticClass:"column is-4 has-text-centered"},[i("p",{staticClass:"value"},[t._v(t._s(t.humidity))]),i("i",{staticClass:"wi wi-humidity"}),i("p",{staticClass:"name"},[t._v("Humidity")])]),i("div",{staticClass:"column is-4 has-text-centered"},[i("p",{staticClass:"value"},[t._v(t._s(t.pressure))]),i("i",{staticClass:"wi wi-barometer"}),i("p",{staticClass:"name"},[t._v("Pressure")])])])])},C=[],_=(i("c5f6"),{name:"MainPanel",props:{windSpeed:{type:Number,required:!0},humidity:{type:Number,required:!0},pressure:{type:Number,required:!0}}}),b=_,w=(i("aaf8"),Object(h["a"])(b,p,C,!1,null,"33637403",null));w.options.__file="PanelMain.vue";var g=w.exports,y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"box"},[i("div",{staticClass:"columns is-centered is-mobile"},[i("div",{staticClass:"column is-3 has-text-centered"},[i("p",{staticClass:"name"},[t._v("Clouds")]),i("i",{staticClass:"wi wi-cloudy"}),i("p",{staticClass:"value"},[t._v(t._s(t.clouds)+"%")])]),i("div",{staticClass:"column is-3 has-text-centered"},[i("p",{staticClass:"name"},[t._v("Visibility")]),i("i",{staticClass:"wi wi-hurricane wi-rotate-90"}),i("p",{staticClass:"value"},[t._v(t._s(t.visibility)+" km")])]),i("div",{staticClass:"column is-3 has-text-centered"},[i("p",{staticClass:"name"},[t._v("Rain")]),i("i",{staticClass:"wi wi-na"}),i("p",{staticClass:"value"},[t._v(t._s(t.rain||"no"))])]),i("div",{staticClass:"column is-3 has-text-centered"},[i("p",{staticClass:"name"},[t._v("Snow")]),i("i",{staticClass:"wi wi-snow"}),i("p",{staticClass:"value"},[t._v(t._s(t.snow||"no"))])])])])},S=[],x={name:"ExtraPanel",props:{clouds:{type:Number,required:!0},visibility:{type:Number,required:!0},rain:{type:Number,required:!1},snow:{type:Number,required:!1}}},$=x,L=(i("35f4"),Object(h["a"])($,y,S,!1,null,"fae9aac6",null));L.options.__file="PanelExtra.vue";var k=L.exports,T={name:"CardWeather",components:{BarTop:m,PanelMain:g,PanelExtra:k},computed:{weatherData:function(){return this.$store.state.weatherData}},mounted:function(){this.$store.dispatch("getAndSetWeatherData")}},O=T,j=(i("266b"),Object(h["a"])(O,o,c,!1,null,"018a35e6",null));j.options.__file="CardWeather.vue";var N=j.exports,W=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("div",{staticClass:"hero"},[t._m(0),i("div",{staticClass:"hero-body"},[i("SavedCities")],1),i("div",{staticClass:"hero-foot"},[i("div",{staticClass:"columns is-multiline"},[i("div",{staticClass:"column is-12 has-text-centered"},[i("transition",{attrs:{name:"slide-fade",mode:"in-out"}},[t.showList?i("SearchList"):t._e()],1),i("SearchField")],1)])])])])},P=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hero-head has-text-centered"},[i("h1",{staticClass:"title is-2"},[t._v("Wether app")]),i("p",{staticClass:"subtitle is-5"},[t._v("based on openweathermap api ")])])}],D=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-field",[i("b-input",{staticClass:"is-expanded",attrs:{placeholder:"Search...","icon-pack":"fas",icon:"search",type:"search",size:"is-large"},on:{focus:t.showList},nativeOn:{keyup:function(e){return t.setSearchQ(e)}},model:{value:t.searchQ,callback:function(e){t.searchQ=e},expression:"searchQ"}})],1)},A=[],E=i("f837"),Q={directives:{focus:E["focus"]},data:function(){return{searchQ:""}},methods:{setSearchQ:function(){this.showList(),this.$store.commit("setSearchQ",this.searchQ)},showList:function(){this.$store.commit("showListTrigger",!0)}}},F=Q,M=(i("39f3"),Object(h["a"])(F,D,A,!1,null,"6e787501",null));M.options.__file="SearchField.vue";var I=M.exports,q=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"list-container"},[i("div",{staticClass:"box"},[i("transition-group",{staticClass:"list",attrs:{name:"slide-right",tag:"ul"}},[i("li",{key:"list-header",staticClass:"list__header has-text-right"},[i("p",[t._v("Cities list:")]),i("b-icon",{attrs:{pack:"fas",icon:"times"},nativeOn:{click:function(e){return t.closeList(e)}}})],1),t._l(t.cities,function(e,s){return i("li",{key:s,staticClass:"list__item",on:{click:t.setCityName}},[t._v(t._s(e.name))])})],2)],1)])},B=[],J={data:function(){return{}},computed:{cities:function(){return this.$store.getters.filterList.length>0?this.$store.getters.filterList:[{name:"no results"}]}},methods:{setCityName:function(t){var e=t.target.textContent;this.$store.commit("setCityName",e),this.$store.commit("weatherCardTrigger")},closeList:function(){this.$store.commit("showListTrigger",!1)}}},R=J,z=(i("3fa4"),Object(h["a"])(R,q,B,!1,null,"e2807b4a",null));z.options.__file="SearchList.vue";var V=z.exports,H=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("div",{staticClass:"columns is-multiline is-mobile"},t._l(t.savedCities,function(e,s){return i("div",{key:s,staticClass:"column is-6"},[i("div",{staticClass:"box bookmarks has-text-centered"},[i("p",{staticClass:"bookmarks__name",on:{click:t.loadWeatherCard}},[t._v(t._s(e))])])])}))])},G=[],K={name:"SavedCities",computed:{savedCities:function(){return this.$store.state.savedCities}},methods:{loadWeatherCard:function(t){var e=t.target.textContent;this.$store.commit("setCityName",e),this.$store.commit("weatherCardTrigger")}}},U=K,X=(i("db7a"),Object(h["a"])(U,H,G,!1,null,"f40ea6e0",null));X.options.__file="SavedCities.vue";var Y=X.exports,Z={name:"Start",components:{SearchList:V,SearchField:I,SavedCities:Y},methods:{weatherCardTrigger:function(){this.$store.commit("weatherCardTrigger")}},computed:{showList:function(){return this.$store.state.showList}}},tt=Z,et=(i("2edf"),Object(h["a"])(tt,W,P,!1,null,"a4e27890",null));et.options.__file="Start.vue";var it=et.exports,st=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-notification",{attrs:{"auto-close":"",duration:t.duration,active:t.visible},on:{"update:active":function(e){t.visible=e}}},[i("p",[t._v(t._s(t.alertText))])])},at=[],nt={name:"Alert",data:function(){return{visible:!1,duration:3e3}},computed:{alertText:function(){return this.$store.state.alertText}},watch:{alertText:function(){console.log("data change"),this.visible=!0,this.duration<5001&&(this.duration+=2e3)}}},rt=nt,ot=(i("049f"),Object(h["a"])(rt,st,at,!1,null,"2c4c9672",null));ot.options.__file="Alert.vue";var ct=ot.exports,lt={name:"app",components:{CardWeather:N,Start:it,Alert:ct},mounted:function(){this.$store.dispatch("getCitiesFromLocalStorage")},computed:{showWeatherCard:function(){return this.$store.state.showWeatherCard}}},ut=lt,dt=(i("5c0b"),Object(h["a"])(ut,n,r,!1,null,null,null));dt.options.__file="App.vue";var ft=dt.exports,ht={weatherData:Array,showWeatherCard:!1,cityName:String,cities:Array,showFilteredList:!0,filteredList:Array,searchQ:"",showList:!1,savedCities:[],alertText:String,shortCities:[{name:"Warsaw"},{name:"Paris"},{name:"Moscow"},{name:"Venice"},{name:"Milan"},{name:"Rome"},{name:"Tunis"},{name:"Palermo"},{name:"Ancona"},{name:"Sassari"},{name:"Naples"}]},vt=(i("7f7f"),i("20d6"),{setWeatherData:function(t,e){return t.weatherData=e},setCitiesList:function(t,e){return t.cities=e},weatherCardTrigger:function(t){return t.showWeatherCard=!t.showWeatherCard},clearFilteredList:function(t){return t.filteredList=[]},addToFilteredList:function(t,e){return t.filteredList.unshift(e)},setSearchQ:function(t,e){return t.searchQ=e},setCityName:function(t,e){return t.cityName=e},showListTrigger:function(t,e){return t.showList=e},saveCity:function(t,e){return t.savedCities.push(e)},removeCity:function(t,e){var i=t.savedCities.findIndex(function(t){return t.name===e});t.savedCities.splice(i,1)},loadSavedCities:function(t,e){return t.savedCities=e},setAlertText:function(t,e){return t.alertText=e}}),mt={filterList:function(t){var e=[];return t.shortCities.filter(function(i){0===i.name.toLowerCase().indexOf(t.searchQ.toLowerCase())&&e.unshift(i),e.length>5&&(e.length=5)}),e}},pt={getAndSetWeatherData:function(t){var e=t.state.cityName;fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&units=metric&APPID=a68b1f26c7ca3c5ec2ac89e452a51bd0")).then(function(t){return t.json()}).then(function(e){return t.commit("setWeatherData",e)})},loadCityList:function(){fetch("https://mateuszkawka.github.io/weather-app/src/current.city.list.min.json").then(function(t){return t.json()}).then(function(t){console.log(t)}).catch(function(t){console.log(t)})},saveCitiesToLocalStorage:function(t){var e=t.state.savedCities,i=JSON.stringify(e);localStorage.setItem("cities",i)},getCitiesFromLocalStorage:function(t){if(null!==localStorage.getItem("cities")){var e=localStorage.getItem("cities"),i=JSON.parse(e);t.commit("loadSavedCities",i)}},removeCityFromSavedCities:function(t){var e=t.state.savedCities,i=JSON.stringify(e);localStorage.setItem("cities",i)}},Ct={state:ht,mutations:vt,getters:mt,actions:pt},_t=i("9483");Object(_t["a"])("".concat("/weather-app-v2/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var bt=i("8a03"),wt=i.n(bt);i("2665"),i("7051"),i("150b");s["default"].use(wt.a),s["default"].use(a["a"]);var gt=new a["a"].Store(Ct);s["default"].config.productionTip=!1,new s["default"]({render:function(t){return t(ft)},store:gt}).$mount("#app")},"59a6":function(t,e,i){},"5c0b":function(t,e,i){"use strict";var s=i("2856"),a=i.n(s);a.a},"60f8":function(t,e,i){},"65b1":function(t,e,i){},"791f":function(t,e,i){},a733:function(t,e,i){"use strict";var s=i("be5c"),a=i.n(s);a.a},aaf8:function(t,e,i){"use strict";var s=i("0500"),a=i.n(s);a.a},be5c:function(t,e,i){},bfc0:function(t,e,i){},d236:function(t,e,i){},db7a:function(t,e,i){"use strict";var s=i("d236"),a=i.n(s);a.a},eb0f:function(t,e,i){}});
//# sourceMappingURL=app.74c6cb73.js.map