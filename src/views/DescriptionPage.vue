<template>
  <div class="descriptionpage-container">
    <h1>Decouvrez Les Secrets De Notre Terroir</h1>
    <div class="description-content">
        <div>
            <div class="image-container">
                <img src="/images/1.gare_charleroi.jpg" alt="" v-show="img1">
                <img src="/images/3.relaissambre.jpg" alt="" v-show="!img1">
                <div class="caption">
                    <h3>Culture</h3>
                </div>
                <div class="carousel-control">
                    <a class="prev" @click="img1 = !img1">&#10094;</a>
                    <a class="next" @click="img1 = !img1">&#10095;</a>
                </div>
            </div>
            <p>Votre exploration commence à la gare de Charleroi Sud. Vous quittez le décor industriel pour rapidement dévorer des paysages verdoyants, sauvages, pittoresques et de grands bois, là où le silence règne en maître. <br><br> Pâturages, champs de culture, bosquets, vallées encaissées, petits vallons, ainsi que de charmants villages seront vos compagnons de route.<br><br> Sur votre parcours, vous traverserez notamment les bocages de la fagne hennuyère, la forêt domaniale de Sivry-Ranc, le parc Naturel du Viroin-Hermeton, ainsi qu’une ancienne ligne de chemin de fer, transformée récemment en itinéraire cycliste en pleine nature.<br><br> Vous longerez la rivière «Molignée», et traverserez la vallée de La Meuse, à la lisière de la France. En passant par le lac de Bambois, endroit enchanteur où il fait bon se ressourcer et observer la faune ornithologique.<br><br> Cerise sur le gâteau, si vous le souhaitez, vous pourrez emprunter le train panoramique qui longe le parcours et faire la course avec les draisines que longe le Ravel.</p>
        </div>
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A obcaecati hic omnis alias, dolorem reprehenderit sit officiis totam? Ipsa assumenda a magnam laudantium veritatis neque ratione modi. Numquam minima quidem quasi natus exercitationem ut officia debitis, delectus deleniti ullam maxime, facilis ex optio aperiam at error impedit doloremque, cum dicta omnis! Et qui vero animi in repellat numquam nemo. Explicabo, atque, soluta, nostrum praesentium perferendis voluptate labore blanditiis voluptatem dolorem voluptatibus alias autem quidem. Quae provident veniam unde ipsam aut.</p>
            <div class="image-container">
                <img src="/images/5.auberge_de_l_Abbaye.jpg" alt="" v-show="img2">
                <img src="/images/1.gare_charleroi.jpg" alt="" v-show="!img2">
                <div class="caption">
                    <h3>Balade</h3>
                </div>
                <div class="carousel-control">
                    <a class="prev" @click="img2 = !img2">&#10094;</a>
                    <a class="next right" @click="img2 = !img2">&#10095;</a>
                </div>
            </div>
        </div>
        <div>
            <div class="image-container">
                <img src="/images/3.relaissambre.jpg" alt="" v-show="img3">
                <img src="/images/5.auberge_de_l_Abbaye.jpg" alt="" v-show="!img3">
                <div class="caption">
                    <h3>Gastronomie</h3>
                </div>
                <div class="carousel-control">
                    <a class="prev" @click="img3 = !img3">&#10094;</a>
                    <a class="next" @click="img3 = !img3">&#10095;</a>
                </div>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur unde perspiciatis, quis nesciunt quas aspernatur esse harum! Quisquam eius tempora reiciendis perferendis molestiae, aliquam ullam illo distinctio incidunt ab voluptatum labore quae asperiores at numquam impedit. Minus cum velit iusto similique pariatur error illo, atque molestias repellendus harum quod quo ab dolorum nisi maxime veritatis nihil odit labore tempore eaque sequi eligendi? Magni quos porro molestiae incidunt. Natus, distinctio aut.</p>
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
            // this is a 2 image carousel, so either first image is displayed or the second, depending on the flag
            img1: true,
            img2: true,
            img3: true
        }
    },
    methods: {
    }
}
</script>

<style scopped>
    .descriptionpage-container{
        width: 90%;
        margin: auto;
        padding-bottom: 50px;
    }
    .descriptionpage-container > h1{
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
        row-gap: 15px;
        padding-bottom: 30px;
    }
    .description-content img{
        width: 380px;
        height: 100%;
    }

    
    .description-content>div{
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 380px 380px;
        position: relative;
        margin: auto;
        margin-bottom: 20px;
    }

    /* Following style only applies to even row of the description page (i.e the row containing second image) */
    .description-content>div:nth-child(even) p{
        margin-left: 0;
    }

    .caption{
        position: absolute;
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
        margin-top: 30px;
    }

    .button:hover{
        cursor: pointer;
    }

    .button>a{
        background-color: blue;
        color: white;
        padding: 10px 50px;
        font-size: 18px;
    }

    /*Styling for carousel buttons */

    .prev, .next {
        cursor: pointer;
        position: absolute;
        top: 50%;
        width: auto;
        padding: 16px;
        margin-top: -22px;
        color: white;
        font-weight: bold;
        font-size: 18px;
        transition: 0.6s ease;
        border-radius: 0 3px 3px 0;
        user-select: none;
    }

    /* Position the "next button" to the right */
    .next:not(.right) {
        left: 338px;
        border-radius: 3px 0 0 3px;
    }

    .right{
        right: 0;
    }

    /* On hover, add a black background color with a little bit see-through */
    .prev:hover, .next:hover {
        background-color: rgba(0,0,0,0.8);
    }

    /*media querries for smaller screens */
    @media only screen and (max-width: 910px){
        .descriptionpage-container{
            width: 90%;
        }
    }

    @media only screen and (max-width: 818px){
        .descriptionpage-container{
            width: 98%;
        }
    }

    @media only screen and (max-width: 785px){
        .description-content{
            grid-template-columns: 100%;
        }
        .description-content>div:nth-child(odd){
            grid-template-columns: 280px auto;
        }
        .description-content>div:nth-child(even){
            grid-template-columns: auto 280px;
        }
        .description-content img{
            width: 280px;
            height: 100%;
        }
        .caption{
            width: 280px;
        }

        .next:not(.right){
            left: 238px;
        }
    }

    @media only screen and (max-width: 614px){
        .description-content p{
            font-size: 14px;
        }
    }

    @media only screen and (max-width: 528px){
        .description-content {
            row-gap: 35px;
        }
    }

</style>