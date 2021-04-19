<template>
     <div>
       <ul>
        <ol><router-link to="/">Accueil</router-link></ol>
        <ol><router-link to="/description">Parcours</router-link></ol>
        <ol><router-link to="/payment">Tarifs</router-link></ol>
        <ol><router-link to="/contact">Contact</router-link></ol>
      </ul>
    <!-- <button>
     <i  class="material-icon">Menu</i>
     </button> -->
    </div>
</template>

<script>
export default {
  name: 'header-bar',
  props: {
    msg: String
  }
}
</script>
