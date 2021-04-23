<template>
  <div>
      <nav>
          <img src="/images/logo/abbey_road-02.svg" alt="">
      </nav>
      <div class="home-content">
          <div class="top-section">
              <div>
                  <!-- Text on the button changes when mouse enters/leaves the button. this toggling is done by toggleFirstBtn -->
                  <button @mouseenter="toggleFirstBtn" @mouseleave="toggleFirstBtn">
                      <router-link :to="{name: 'DescriptionPage'}">
                          <a v-if="firstBtn">Experience Plaisir</a>
                          <a v-else>Chill-out Bikking</a>
                      </router-link>
                  </button>
              </div>
          </div>
          <div class="bottom-section">
              <div>
                  <button @mouseenter="toggleSecondBtn" @mouseleave="toggleSecondBtn">
                        <router-link :to="{name: 'DescriptionPage'}">
                            <a v-if="secondBtn">Experience Sport</a>
                            <a v-else>Hardcore Bikking</a>
                        </router-link>
                  </button>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'HomePage',
    data(){
        return {
            firstBtn: true,
            secondBtn: true,
        }
    },
    methods:{
        toggleFirstBtn(){
            this.firstBtn = !this.firstBtn
        },
        toggleSecondBtn(){
            this.secondBtn = !this.secondBtn
        }
    }
}
</script>

<style scopped>
    nav{
        width: 90%;
    }
    nav>img{
        width: auto;
        height: 72px;
        position: absolute;
        top: 10px;
        left: 10px;
        background-color: rgba(255, 255, 255, 0.25);
        padding: 10px;
    }
    .top-section{
        background-image: url('/images/images2/bike5.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        height: 75vh;
    }
    .bottom-section{
        background-image: url('/images/images2/hardcord.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        height: 75vh;
    }
    .home-content>div>div{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(0, 0, 0, 0.5);
    }
    .home-content button{
        background-color: #F5DF14;
        padding: 12px 18px;
        width: max-content;
        font-size: 16px;
    }

    .home-content button:hover{
        background-color: #ADF514;
    }
</style>