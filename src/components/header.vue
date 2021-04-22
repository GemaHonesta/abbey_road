<template>
<div>
  <div class="header">
    <div class="header-content">
      <div class="logo-div">
        <img src="/images/logo/abbey_road-02.svg" alt="logo">
      </div>
      <div class="nav-menu">
        <div class="hamburger" @click="toggleHamburger">
          <i class="fas fa-bars"></i>
        </div>
        <a href="https://www.instagram.com/abbeyroadbike/?hl=fr" target="_blank" class="instagram">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com/Abbey-Road-Bike-106820304853677?_rdc=2&_rdr" target="_blank" class="facebook">
          <i class="fab fa-facebook"></i>
        </a>
        <div @click="toggleFlag">
          <img :src="flagSrc" class="flag">
        </div>
      </div>
    </div>
    <div class="hamburger-links" v-if="showHamburger">
      <a href="#">Accueil</a>
      <a href="#">Parcours</a>
      <a href="#">Tarifs</a>
      <a href="#">Gallerie</a>
      <a href="#">Contact</a>
    </div>
    <div class="flag-container" v-if="showFlag">
      <img src="/images/icons/england.png" v-if="!flagSrc.includes('england')" class="flag" @click="selectFlag">
      <img src="/images/icons/netherland.png" v-if="!flagSrc.includes('netherland')" class="flag" @click="selectFlag">
      <img src="/images/icons/france.png" v-if="!flagSrc.includes('france')" class="flag" @click="selectFlag">
    </div>
  </div>
  <ul hidden>
    <ol><router-link to="/">Accueil</router-link></ol>
    <ol><router-link to="/description">Parcours</router-link></ol>
    <ol><router-link to="/payment">Tarifs</router-link></ol>
    <ol><router-link to="/contact">Contact</router-link></ol>
  </ul>
  <!-- <button>
  <i  class="material-icon">Menu</i>
  </button>  -->
  
</div>
    
</template>

<script>
export default {
  name: 'header-bar',
  data(){
    return {
      showHamburger: false,
      showFlag: false,
      flagSrc: '/images/icons/england.png'
    }
  },
  props: {
    msg: String
  },
  methods: {
    toggleHamburger(){
      this.showHamburger = !this.showHamburger
      this.showFlag = false
    },
    toggleFlag(){
      this.showFlag = !this.showFlag
      this.showHamburger = false
    },
    selectFlag(e){
      //console.log(e.target.attributes.src.value)
      let selectedFlag = e.target.attributes.src.value
      this.flagSrc = selectedFlag
      this.showFlag = false
    }
  }
}
</script>

<style scoped>
  .header{
    height: 90px;
  }
  .header-content{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    height: 100%;
    margin: auto;
  }
  .logo-div>img{
    height: 80px;
  }

  .hamburger-links{
    display: flex;
    flex-direction: column;
    width: 200px;
    margin-right: 5%;
    gap: 2px;
    position: absolute;
    right: 0;
    z-index: 1;
  }

  .hamburger-links>a{
    padding: 10px;
    background-color: #eee;
  }

  .hamburger-links>a:hover{
    background-color: #ccc;
  }

  .hamburger:hover{
    cursor: pointer;
  }

  .flag-container{
    display: flex;
    flex-direction: column;
    width: 200px;
    margin-right: 5%;
    gap: 5px;
    align-items: flex-end;
    position: absolute;
    right: 0;
    z-index: 1;
    top: 60px;
  }

  .flag:hover{
    cursor: pointer;
  }

  .nav-menu{
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 28px;
  }

  .flag{
    width: 32px;
    height: 22px;
  }
</style>
