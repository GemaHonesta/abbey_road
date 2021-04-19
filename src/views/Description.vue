<template>
  <div id="map">
    <button type="button" @click="toggleShowPath">
      show path = {{ showPath }}
    </button>
    <button type="button" @click="removeLayer">
      remove layer
    </button>
    <MglMap
    :accessToken="accessToken"
    :mapStyle="mapStyle"
    :center="center"
    :zoom="zoom"
    >
      <MglGeojsonLayer
        :sourceId="geoJsonSource.data.id"
        :source="geoJsonSource"
        layerId="myLayer"
        :layer="geoJsonLayer"
        ref="pathLayer"
        v-if="showPath"
      />
    </MglMap>
  </div>
</template>

<script>
import Mapbox from "mapbox-gl";
import { MglMap, MglGeojsonLayer } from "vue-mapbox";

export default {
  components: {
    MglMap,
    MglGeojsonLayer
  },
  data() {
    return {
      accessToken: 'pk.eyJ1IjoiYWJiZXlyb2FkYmlrZSIsImEiOiJja25lYm1yMTcwNXB6Mm5udzVncDVlaW42In0.e4uYEiu7CxaZcMdU9KRIbg', // your access token. Needed if you using Mapbox maps
      mapStyle: "mapbox://styles/mapbox/streets-v11", // your map style
      center: [50.40495599944921, 4.438645668835217],
      zoom: 14,
      showPath: true,
      geoJsonSource: {
        type: 'geojson',
        data: {
          id: 'testData',
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: [
              [-122.48369693756104, 37.83381888486939],
              [-122.48348236083984, 37.83317489144141],
              [-122.48339653015138, 37.83270036637107],
              [-122.48356819152832, 37.832056363179625],
              [-122.48404026031496, 37.83114119107971],
              [-122.48404026031496, 37.83049717427869],
              [-122.48348236083984, 37.829920943955045],
              [-122.48356819152832, 37.82954808664175],
              [-122.48507022857666, 37.82944639795659],
              [-122.48610019683838, 37.82880236636284],
              [-122.48695850372314, 37.82931081282506],
              [-122.48700141906738, 37.83080223556934],
              [-122.48751640319824, 37.83168351665737],
              [-122.48803138732912, 37.832158048267786],
              [-122.48888969421387, 37.83297152392784],
              [-122.48987674713133, 37.83263257682617],
              [-122.49043464660643, 37.832937629287755],
              [-122.49125003814696, 37.832429207817725],
              [-122.49163627624512, 37.832564787218985],
              [-122.49223709106445, 37.83337825839438],
              [-122.49378204345702, 37.83368330777276]
              ],
          },
        },
      },
      geoJsonLayer:  {
        id: 'route',
        type: 'line',
        layout: {
          'line-join': 'round',
          'line-cap': 'round',
        },
        paint: {
          'line-color': '#888',
          'line-width': 4,
        },
      },
    };
  },
  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox;
  },
  methods: {
    toggleShowPath() {
      this.showPath = !this.showPath;
    },
    removeLayer() {
      console.log('removing layer');
      this.$refs.pathLayer.remove();
    },
  },
};
</script>
