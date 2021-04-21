<template>
  <div class="content">
        <div class="date-select">
            <h3>PERIODE DE DEPART: </h3>
            <date-picker v-model="dateTime" valueType="format" :range="true" ></date-picker>
        </div>
        <div class="packages-container">
            <div class="package" v-for="pack in packages" :key="pack.id">
                <p class="heading" @click="togglePack(pack)">{{pack.name}}</p>
                <div v-if="clickedPackages.includes(pack)">
                    <p class="description">{{pack.description}}</p>
                    <div class="perks">
                        <span v-for="(perk, index) in pack.perks" :key="index">
                            <i class="fas fa-check"></i>
                            <p>{{perk}}</p>
                        </span>
                    </div>
                    <div class="price">
                        <input type="checkbox" v-model="pack.checked">
                        <p>$ {{pack.price}} <small>/ {{pack.persons}} personnes</small></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="additional-packages">
            <div class="package">
                <p class="heading">Tarifs Enfant</p>
                <div class="package-content">
                    <div class="counter-section">
                        <div class="counter-controls">
                            <p class="btn" @click="decreaseEnfant"><i class="fas fa-minus"></i></p>
                            <p class="counter">{{enfant}}</p>
                            <p class="btn" @click="increaseEnfant"><i class="fas fa-plus"></i></p>
                        </div>
                        <p>Enfant de moins de 6 ans: gratuit</p>
                    </div>
                </div>
            </div>
            <div class="package">
                <p class="heading">Tarifs Famille</p>
                <div class="package-content">
                    <div class="checkbox-container">
                        <input type="checkbox" v-model="family">
                        <p>-15% par personne</p>
                    </div>
                </div>
            </div>
            <div class="package">
                <p class="heading">Chambre Supplementaire</p>
                <div class="package-content">
                    <div class="counter-section">
                        <div class="counter-controls">
                            <p class="btn" @click="decreaseChambre"><i class="fas fa-minus"></i></p>
                            <p class="counter">{{chambre}}</p>
                            <p class="btn" @click="increaseChambre"><i class="fas fa-plus"></i></p>
                        </div>
                        <p>Supplement chambre seul : +50$/nuit</p>
                    </div>
                </div>
            </div>
            <div class="package">
                <p class="heading">Location De Velo</p>
                <div class="package-content">
                    <div class="checkbox-container">
                        <input type="checkbox" v-model="sans">
                        <p>Sans assistance electrique : 25$/3 jours, 50$/semaine</p>
                    </div>
                    <div class="checkbox-container">
                        <input type="checkbox" v-model="avec">
                        <p>Avec assistance electrique : 50$/3 jours, 100$/semaine</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="submit-btn">
            <router-link :to="{name: 'Payment'}">
                <a>Achat</a>
            </router-link>
        </div>
  </div>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
export default {
    name: 'PricePage',
    components: {
        DatePicker
    },
    data(){
        return{
            dateTime: null,
            enfant: 0,
            chambre: 0,
            family: false,
            sans: false,
            avec: false,
            packages: [
                {
                    id: 1,
                    name: 'Chill-out Biking',
                    description: '(7 nuits - dans des hotels 3/4*)',
                    price: 495,
                    persons: 2,
                    checked: false,
                    perks: [
                        'Logement',
                        'Petit-dejeuner',
                        'Transport des begages',
                        'Iteneraire via votre Smartphone',
                        'Carnet de route',
                        'Assistance'
                    ]
                },
                {
                    id: 2,
                    name: 'Hardcore Biking',
                    description: '(2 nuits - dans des hotels 3/4*)',
                    price: 245,
                    persons: 2,
                    checked: false,
                    perks: [
                        'Logement',
                        'Petit-dejeuner',
                        'Transport des begages',
                        'Iteneraire via votre Smartphone',
                        'Carnet de route',
                        'Assistance'
                    ]
                },
            ],
            clickedPackages: []
        }
    },
    methods: {
        togglePack(pack){
            if(!this.clickedPackages.includes(pack)){
                this.clickedPackages.push(pack)
            }
            else{
                let updated = this.clickedPackages.filter(element => element.id !== pack.id)
                this.clickedPackages = updated
            }
        },
        decreaseEnfant(){
            if (this.enfant > 0){
                this.enfant -= 1
            }
        },
        increaseEnfant(){
            this.enfant ++
        },
        decreaseChambre(){
            if (this.chambre > 0){
                this.chambre -= 1
            }
        },
        increaseChambre(){
            this.chambre ++
        }
    }
}
</script>

<style scopped>
    .content{
        width: 90%;
        margin: auto;
        padding-bottom: 50px;
    }
    .date-select{
        display: flex;
        align-items: center;
    }
    .date-select>h3{
        margin-right: 15px;
    }
    .date-select input{
        outline: none;
    }

    .packages-container{
        display: flex;
        justify-content: space-evenly;
        margin-top: 30px;
    }

    .package{
        width: 500px;
    }

    .package>.heading{
        font-size: 24px;
        border-bottom: 1px solid;
        text-transform: uppercase;
        padding-bottom: 7px;
    }

    .package>.heading:hover{
        cursor: pointer;
    }

    .package .description{
        font-size: 12px;
        font-weight: 700;
    }

    .perks>span{
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .fa-check{
        color: #3abc94;
    }

    .price{
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .price small{
        font-size: 9px;
    }

    .additional-packages{
        margin-top: 30px;
    }

    .additional-packages>.package{
        margin-bottom: 40px;
    }

    .package-content{
        margin-top: 10px;
    }

    .counter-section{
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .counter-controls{
        width: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .counter{
        font-size: 18px;
    }
    .counter-section .btn{
        background-color: #ededed;
        height: 12px;
        width: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        font-size: 10px;
    }
    .btn:hover{
        cursor: pointer;
    }

    .checkbox-container{
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .submit-btn{
        text-align: center;
    }
    .submit-btn>a{
        background-color: blue;
        color: white;
        padding: 10px 50px;
        font-size: 18px;
    }
</style>