<template>
  <MglMap :accessToken="accessToken" 
          :mapStyle="mapStyle" @load="onMapLoaded"
          :center="center"   
/>
</template>

<script>
import Mapbox from "mapbox-gl";
import { MglMap } from "vue-mapbox";

export default {
  components: {
    MglMap
  },
  data() {
    return {
      accessToken: 'pk.eyJ1IjoiYWJiZXlyb2FkYmlrZSIsImEiOiJja25lYm1yMTcwNXB6Mm5udzVncDVlaW42In0.e4uYEiu7CxaZcMdU9KRIbg', // your access token. Needed if you using Mapbox maps
      mapStyle: "mapbox://styles/mapbox/streets-v11", // your map style
    };
  },
  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox;
  },
  methods: {
    async onMapLoaded(event) {
      // Here we cathing 'load' map event
      const asyncActions = event.component.actions

      const newParams = await asyncActions.flyTo({
        center: [4.438721533158272,50.40502369315966], //localisation centrale
        zoom: 15, //zoom
        speed: 1.5 //vitesse du zoom
      })
      console.log(newParams)
      /* => {
              center: [30, 30],
              zoom: 9,
              bearing: 9,
              pitch: 7
            }
      */
    }
  }
};
</script>