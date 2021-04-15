// <template>
//     <MglMap
//     :mapboxGl="mapbox-gl"
//     :accessToken="accessToken"
//     :mapStyle.sync="mapStyle"
//     @load="onMapLoaded"
//   />
//   <MglMap :accessToken="accessToken" :mapStyle="mapStyle" />
// </template>

// <script>
// import Mapbox from "mapbox-gl";
// import { MglMap } from "vue-mapbox";

// export default {
//   components: {
//     MglMap
//   },
//   data() {
//     return {
//       accessToken: ACCESS_TOKEN, // your access token. Needed if you using Mapbox maps
//       mapStyle: MAP_STYLE // your map style
//     };
//   },

//   created() {
//     // We need to set mapbox-gl library here in order to use it in template
//     this.mapbox = Mapbox;
//   },

//   methods: {
//     onMapLoaded(event) {
//       // in component
//       this.map = event.map;
//       // or just to store if you want have access from other components
//       this.$store.map = event.map;
//     }
//   }


  
// };




// </script>