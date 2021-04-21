<template>
  <div class="price-content">
      <div class="date-select">
        <h3>PERIODE DE DEPART: </h3>
        <date-picker v-model="time1" valueType="format" :range="true" ></date-picker>
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
            time1: null
        }
    }
}
</script>

<style>
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
</style>