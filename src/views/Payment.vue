<template>
  <div class="leading-loose">
    <form class="max-w-xl m-4 p-10 bg-white rounded shadow-xl">
      <p class="text-gray-800 font-medium">Vos Coordonnées:</p>
      <div class="">
        <label class="block text-sm text-gray-037777777777" for="cus_name">Nom</label>
        <input class="w-full px-6 py-1 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" required="" placeholder="Votre nom" aria-label="Name">
      </div>
      <div class="">
        <label class="block text-sm text-gray-037777777777" for="cus_name">Prénom</label>
        <input class="w-full px-6 py-1 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" required="" placeholder="Votre prénom" aria-label="Name">
      </div>
      <div class="mt-2">
        <label class="block text-sm text-gray-600" for="cus_email">Email</label>
        <input class="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Email" aria-label="Email">
      </div>
      <div class="mt-2">
        <label class=" block text-sm text-gray-600" for="cus_email">Addresse</label>
        <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Adresse" aria-label="Email">
      </div>
      <div class="mt-2">
        <label class="hidden text-sm block text-gray-600" for="cus_email">Ville</label>
        <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Ville" aria-label="Email">
      </div>
      <div class="inline-block mt-2 w-1/2 pr-1">
        <label class="hidden block text-sm text-gray-600" for="cus_email">Pays</label>
        <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Pays" aria-label="Email">
      </div>
      <div class="inline-block mt-2 -mx-1 pl-1 w-1/2">
        <label class="hidden block text-sm text-gray-600" for="cus_email">Code Postal</label>
        <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email"  name="cus_email" type="text" required="" placeholder="Code Postal" aria-label="Email">
      </div>
      <p class="mt-4 text-gray-800 font-medium">Procéder au payement:</p>
      <div class="">
        <label class="block text-sm text-gray-600" for="cus_name">Numéro de carte</label>
        <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" required="" placeholder="Card Number MM/YY CVC" aria-label="Name">
      </div>
      <div class="mt-4">
        <button class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="submit">Confirmation</button>
      </div>
    </form>
  </div>
</template>


