<template>
  <div class="contact-content">
    <!-- FORM STARTS -->
    <form class="w-full max-w-lg">
      <h1>Ecrivez-Nous</h1> 
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label for="grid-first-name">
            Prénom
          </label>
          <input id="grid-first-name" type="text" placeholder="Prénom">
          <p class="text-red-500 text-xs italic">Veuillez Remplir Ces Champs</p>
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label for="grid-last-name">
            Nom
          </label>
          <input id="grid-last-name" type="text" placeholder="Nom">
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label for="grid-password">
            E-mail
          </label>
          <input id="email" type="email">
        </div>
          <!-- <p class="text-gray-600 text-xs italic">Some tips - as long as needed</p> -->
        </div>
      
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label for="grid-password">
            Message
          </label>
          <textarea class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message">
        </textarea>
          <!-- <p class="text-gray-600 text-xs italic">Re-size can be disabled by set by resize-none / resize-y / resize-x / resize</p> -->
        </div>
      </div>
      <div class="md:flex md:items-center">
        <div class="md:w-1/3">
          <button class="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
            Envoyer
          </button>
        </div>
        <div class="md:w-2/3"></div>
      </div>
    </form>
    <!-- FORM ENDS -->

  <!-- </div> -->
  </div>
</template>

<script>

export default {
  name: 'Contact'
  }
</script>

<style scoped>
  .contact-content>form{
    margin: 30px auto 0 auto;
  }

  form>h1{
    font-size: 22px;
    font-weight: 700;
    font-style: italic;
    margin-top: 35px;
    margin-bottom: 15px;
  }

  @media only screen and (max-width: 547px){
    form{
      width: 90%;
    }
  }
</style>
