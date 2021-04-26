<template>
<div>
    <div v-for="slide in images" :key="slide">
        <img height="auto" width="210" class="marker-img" :src="slide" loading="lazy" />
    </div>
    <div class="grid-container">
        <img width="20" class="marker-img" src="/images/map/bed.svg"/>   
        <div class="grid-item" >{{name}}</div>   
    </div>
    <div class="grid-container">
        <img width="20" class="marker-img" src="/images/map/cutlery.png"/>   
        <div class="grid-item" >{{description}}</div>   
    </div>
    <div class="grid-container">
        <img width="20" class="marker-img" src="/images/map/eye.png"/>   
        <div class="grid-item" >{{description2}}</div>   
    </div>
    <div style="height:20px"></div>   
</div>
</template>

<script> 

const props = {
    name: {
        default: '',
    },
    description: {
        default: '',
    },
    description2: {
        default: '',
    },
    markerImage: {
        default: ''
    },
    images: {
        default: [],
    },
};
export default {
    name:  'marker-popup',
    props: props,
    components: {
    }
}
</script>
<style scoped>
    .marker-img {
        pointer-events:none;
        user-select: none;
    }
    .grid-container {
        display: grid;
        grid-template-columns: 20px auto;
        padding: 10px;
    }
    .grid-item {
        padding: 0px 0px 0px 10px ;
        text-align: left;
    }
</style>