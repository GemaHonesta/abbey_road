<template>
<div>
  <div style="height:80vh">
    <MglMap :accessToken="accessToken" 
            :mapStyle="mapStyle" 
            @load="onMapLoaded"
            :center="center"   
    >
      <div v-for="m in markers" v-bind:key="m">
        <MglMarker :coordinates="m.coordinates" 
          color="orange" >
          <v-icon slot="marker">
            <img width="50" :src="m.markerImage" />
          </v-icon>
          <MglPopup anchor="top">
              <marker-popup :name="m.name" 
                :description="m.description" 
                :description2="m.description2" 
                :images="m.images"
              > 
              </marker-popup>
          </MglPopup>
        </MglMarker>
      </div>
    </MglMap>
  </div>
  <div class="button">
      <router-link :to="{name: 'Payment'}">
          <a>OUI, JE VEUX !</a>
      </router-link>
  </div>
</div>
</template>

<script>
import Mapbox from "mapbox-gl";
import { MglMap, MglPopup, MglMarker  } from "vue-mapbox";

export default {
  components: {
    MglMap,
    MglPopup,
    MglMarker
  },
  data() {
    return {
      accessToken: 'pk.eyJ1IjoiYWJiZXlyb2FkYmlrZSIsImEiOiJja25lYm1yMTcwNXB6Mm5udzVncDVlaW42In0.e4uYEiu7CxaZcMdU9KRIbg', // your access token. Needed if you using Mapbox maps
      mapStyle: "mapbox://styles/mapbox/streets-v11", // your map style
      center: [4.4635,50.3429],
      markers:  [
        {
          name:"Gare de Charleroi",
          description: "Gare de Charleroi Sud",
          description2: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren",
          markerImage:  "/images/map/marker-1.png",
          images: [
            "/images/1.gare_charleroi.jpg",
            "/images/1.gare_charleroi.jpg"
          ],
          coordinates: [4.438744384615781, 50.4049040609266],
        },
        {
          name:"Relais de la haute Sambre",
          description: "DRelais de la haute Sambre: Rue de la Fontaine Pépin 12, 6540 Lobbes ",
          description2: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren",
          markerImage:  "/images/map/marker-2.png",
          images: [
            "images/2.chateaumotte.jpg",
            
            "images/2.chateaumotte.jpg"
          ],
          coordinates: [4.284442184639614, 50.362873707307024],
        },
        {
          name:"Ferme De La Galoperie",
          description: "Ferme De La Galoperie: Rue de la Galopperie 56, 5660 Couvin ",
          description2: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren",
          markerImage:  "/images/map/marker-3.png",
          images: [
            "images/3.relaissambre.jpg",
            "images/3.relaissambre.jpg"
          ],
          coordinates: [4.395042913466393, 50.08158165010936],
        },
        {
          name:"Les Sorbiers",
          description: "Les Sorbiers: Rue des Sorbiers 241, 5543 Heer - Belgique",
          description2: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren",
          markerImage:  "/images/map/marker-4.png",
          images: [
            "images/4.parc_avesnois.jpg"
          ],
          coordinates: [4.826870330656539, 50.180584758577126],
        },
        {
          name:"Les Jardins De La Molignée",
          description: "Les Jardins De La Molignée: Rue de la Molignée 1, 5537 Anhée",
          description2: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren",
          markerImage:  "/images/map/marker-5.png",
          images: [
            "images/5.auberge_de_l_Abbaye.jpg"
          ],
          coordinates: [4.875556304768184, 50.314624616609926],
        },
        {
          name:"Le Castel",
          description: "Fosse-la-ville: Hôtel restaurant Le Castel Le Rue du Chapître 10, 5070 Fosses-la-Ville",
          description2: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren",
          markerImage:  "/images/map/marker-6.png",
          images: [
            "images/6.best_western_lake_plus.jpg"
          ],
          coordinates: [4.697410771146264, 50.39651210872614],
        },
      ]
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

      await asyncActions.flyTo({
        center: [4.4635,50.3429], //localisation centrale
        zoom: 9, //zoom
        speed: 1.5 //vitesse du zoom
      })
    }
  }
};
</script>