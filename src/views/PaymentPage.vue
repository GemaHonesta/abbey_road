<template>
  <div class="content">
      <div class="payment-info">
          <div class="left">
            <p class="heading">Vos Informations:</p>
            <div class="radio-input">
                <input type="radio" value="card" v-model="paymentMethod">
                <label>
                    <img src="/images/icons/visa.png" alt="visa" class="payment-logo">
                    <img src="/images/icons/mastercard.png" alt="mastercard" class="payment-logo">
                    <img src="/images/icons/bancontact.png" alt="bancontact" class="payment-logo">
                </label>
            </div>
            <div class="radio-input">
                <input type="radio" value="paypal" v-model="paymentMethod">
                <label>
                    <img src="/images/icons/paypal.png" alt="paypal" class="payment-logo">
                </label>
            </div>
            <div class="inputs-container">
                <input v-model="nom" placeholder="Nom">
                <input v-model="prenom" placeholder="Prenom">
                <input v-model="numero" placeholder="Numero de carte bancaire">
                <input v-model="date" placeholder="Date d'expiration (MM/AA)">
                <input v-model="cvv" placeholder="CVV">
            </div>
          </div>
          <div class="right">
              <p class="heading">Recapitulatif du voyage:</p>
              <div class="features">
                  <span v-for="feature in features" :key="feature.id">
                      <i class="fas fa-check"></i>
                      <p>{{feature.name}}</p>
                  </span>
              </div>
              <div class="price-btn">
                  <p>TOTAL: 495$</p>
              </div>
          </div>
      </div>
      <div class="conditions">
          <p class="heading">Conditions:</p>
          <div class="description">
            <p>Paiement bancaire par carte ou par cheque ou par virement ou par e-cheque vacances</p>
            <p>Confidentialite absolue de vos donnees personnelles</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'PaymentPage',
    data(){
        return {
            paymentMethod: null,
            nom: '',
            prenom: '',
            numero: '',
            date: '',
            cvv: '',
            features: [
                {id: 1, name: 'Formule Experience Plaisir'},
                {id: 2, name: 'Depart 15/08/2021, Retour 22/08/2021'},
                {id: 3, name: 'Hebergement'},
                {id: 4, name: 'Petit-dejeuner'},
                {id: 5, name: 'Itineraire Smartphone'},
                {id: 6, name: 'Carnet de route'},
                {id: 7, name: 'Transport des begages'},
                {id: 8, name: 'Assistance'},
                {id: 9, name: '2 voyageurs adultes 495$, 1 enfant: 0$'}
            ]
        }
    }
}
</script>

<style scopped>
    .content{
        padding-bottom: 50px;
        margin-top: 35px;
    }
    .payment-info{
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 1fr 1fr;
    }

    .radio-input{
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .radio-input label{
        display: flex;
        width: 170px;
        justify-content: space-between;
    }

    .payment-logo{
        width: auto;
        height: 50px;
    }

    .inputs-container{
        display: flex;
        flex-direction: column;
    }

    .inputs-container>input{
        width: 70%;
        height: 42px;
        margin: 15px 0;
        background: #f8f4f4;
        outline: none;
        border: 3px solid #ece9e9;
        padding-left: 5px;
    }

    .inputs-container>input:focus{
        outline: none;
    }

    /* .right{
        background-color: grey;
    } */
    .right>.heading, .left>.heading{
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 20px;
    }
    .features>span{
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 18px;
        margin-bottom: 10px;
    }
    .fa-check{
        color: #3abc94;
    }
    .price-btn{
        text-align: center;
        padding: 10px 0;
        background-color: #c4c4c4;
        font-size: 16px;
        font-weight: 600;
        margin-top: 10px;
    }
    .price-btn:hover{
        cursor: pointer;
    }
    .conditions{
        margin-top: 30px;
        background-color: #c4c4c4;
        padding: 5px 0 30px 7px;
        position: absolute;
        bottom: 0;
        width: 90%;
    }
    .conditions>.heading{
        font-size: 18px;
        text-transform: uppercase;
        margin-bottom: 10px;
    }
    .conditions>.description{
        font-size: 14px;
    }
</style>