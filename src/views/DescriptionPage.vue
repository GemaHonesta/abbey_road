<template>
  <div class="content">
    <h1>Decouvrez Les Secrets De Notre Terroir</h1>
    <div class="description-content">
        <div>
            <div class="image-container">
                <img src="/images/1.gare_charleroi.jpg" alt="" v-show="first">
                <img src="/images/3.relaissambre.jpg" alt="" v-show="!first">
                <div class="caption">
                    <h3>Culture</h3>
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aspernatur nisi tempora expedita pariatur voluptates ratione officia, saepe a deleniti eaque facere sint esse aliquid ducimus fugit dignissimos ad delectus optio? Quod et, ducimus neque, suscipit ratione dolorum reiciendis quo iste impedit odio nisi. Dolorem quam nihil alias non unde, ut veniam placeat delectus? Ut laudantium minus doloribus repellat provident beatae aspernatur saepe illo in, eius eveniet impedit vel culpa est assumenda deserunt blanditiis ex voluptatem maxime repellendus non porro nesciunt? Omnis aspernatur laborum quidem fugit ipsa quaerat aperiam placeat, facere, enim delectus vel quis iusto nihil deserunt? Qui, iste.</p>
        </div>
        <div>
            <div class="image-container">
                <img src="/images/5.auberge_de_l_Abbaye.jpg" alt="" v-show="first">
                <img src="/images/1.gare_charleroi.jpg" alt="" v-show="!first">
                <div class="caption">
                    <h3>Blade</h3>
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, odit soluta. Odit ullam vero in vel eaque beatae amet, nisi harum placeat delectus sed perferendis eius, et impedit dolore laboriosam hic quasi? Quia perspiciatis molestiae dicta, quibusdam blanditiis, nulla veritatis eveniet sit sint nesciunt in culpa laudantium odit vel aperiam illum eos beatae, at atque quaerat obcaecati rerum veniam? Velit blanditiis itaque porro hic odit rem error quam, iure libero cum at eos fugiat doloremque?</p>
        </div>
        <div>
            <div class="image-container">
                <img src="/images/3.relaissambre.jpg" alt="" v-show="first">
                <img src="/images/5.auberge_de_l_Abbaye.jpg" alt="" v-show="!first">
                <div class="caption">
                    <h3>Gastronomie</h3>
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea a pariatur tempore aspernatur dolore blanditiis perspiciatis deleniti suscipit non dicta, repudiandae iure explicabo ratione earum repellat commodi, atque eos illo deserunt eveniet laboriosam? Labore cum sit, a corrupti tempore cumque incidunt laborum quam quae tenetur rem. Facere eveniet in commodi cum perspiciatis officia saepe a doloribus perferendis enim, nesciunt, ab inventore magnam ut, asperiores beatae ipsam sed illum adipisci quas sequi obcaecati repudiandae tempora rerum! Quia debitis id ut maiores odio doloribus accusantium in error molestiae cumque, repellendus ex eius iure illum vero autem assumenda atque maxime distinctio! Consequatur hic blanditiis, distinctio explicabo, magni quo, ipsa quis veniam nisi illum inventore exercitationem sint porro. Eaque eum nisi magnam illo vel!</p>
        </div>
    </div>
    <div class="button">
        <router-link :to="{name: 'Payment'}">
            <a>OUI, JE VEUX !</a>
        </router-link>
    </div>
  </div>
</template>

<script>
export default {
    name: 'DescriptionPage',
    data(){
        return {
            first: true
        }
    },
    mounted(){
        //starting the carousels
        setInterval(()=> this.first = !this.first ,4000)
    }
}
</script>

<style scopped>
    .content{
        width: 90%;
        margin: auto;
        padding-bottom: 50px;
    }
    .content > h1{
        text-align: center;
        font-size: 22px;
        font-weight: 700;
        font-style: italic;
        margin-top: 35px;
        margin-bottom: 15px;
    }
    .description-content{
        display: grid;
        grid-template-columns: 1fr;
        grid-auto-rows: 1fr 1fr 1fr;
        row-gap: 8px;
        padding-bottom: 30px;
    }
    .description-content img{
        width: 380px;
    }

    .description-content>div{
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 380px 2fr;
        position: relative;
    }

    .caption{
        position: absolute;
        bottom: 0px;
        font-weight: 700;
        color: #dedede;
        background-color: rgba(0, 0, 0, 0.5);
        width: 380px;
        padding: 7px 0;
        text-align: center;
        text-transform: uppercase;
    }

    .description-content p{
        margin-left: 30px;
        margin-top: 10px;
        font-weight: 600;
    }

    .button{
        text-align: center;
    }

    .button:hover{
        cursor: pointer;
    }

    .button a{
        background-color: blue;
        color: white;
        padding: 10px 50px;
        font-size: 18px;
    }

</style>