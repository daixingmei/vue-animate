<template>
   <div class="carousel-wrap" id="carousel" 
   v-bind:style="{height:fullHeight+'px'}">
      <transition-group tag="ul" class='slide-ul' name="list">
       <li v-for="(list,index) in slideList" :key="index" v-show="index==currentIndex" @mouseenter="stop" @mouseleave="go">
        <a :href="list.clickUrl" rel="external nofollow">
         <img :src="list.image" :alt="list.desc">
        </a>
       </li>
      </transition-group>
      <div class="carousel-items">
       <span v-for="(item,index) in slideList.length" :class="{'active':index==currentIndex}" @mouseover="change(index)"></span>
      </div>
  </div>
</template>
<script>
    // import Axios from 'axios'
    export default {
         data() {
            return{
                slideList: [
                {
                  clickUrl: "#",
                  desc: "nhwc",
                  image: require("../assets/images/banner.png")
                },
                {
                  clickUrl: "#",
                  desc: "hxrj",
                  image: require("../assets/images/banner1.jpg")
                },
                {
                  clickUrl: "#",
                  desc: "rsdh",
                  image: require("../assets/images/banner2.jpg")
                }
              ],
              currentIndex: 0,
              timer: '',
              fullHeight: document.documentElement.clientHeight
            }
         },
         methods: {
              go() {
               this.timer = setInterval(() => {
                this.autoPlay()
               },4000)
              },
              stop() {
               clearInterval(this.timer)
               this.timer = null
              },
              change(index) {
               this.currentIndex = index

              },
              autoPlay() {
               this.currentIndex++
               if (this.currentIndex > this.slideList.length - 1) {
                this.currentIndex = 0
               }
              },

         },  
         mounted() {
          const that = this
          window.onresize = () => {
            return (() => {
              window.fullHeight = document.documentElement.clientHeight
              that.fullHeight = window.fullHeight
            })()
          }
        },
         watch: {
          fullHeight (val) {
            if(!this.timer) {
              this.fullHeight = val
              this.timer = true
              let that = this
              setTimeout(function (){
                that.timer = false
              },400)
            }
          }
        }
}


</script>
<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .carousel-wrap {
     position: relative;
     /*height: 453px;*/
     width: 100%;
     overflow: hidden;
     background-color: #fff;
    }
     
    .slide-ul {
     width: 100%;
     height: 100%;
        }
    .slide-ul li {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      /*transition: all .5s;*/
    }
    .slide-ul li img {
       width: 100%;
       height: 100%;
    }
    .carousel-items {
     position: absolute;
     z-index: 10;
     bottom:150px;
     width: 100%;
     margin: 0 auto;
     text-align: center;
     font-size: 0;
   }
    .carousel-items span {
      display: inline-block;
      height: 6px;
      width: 30px;
      margin: 0 3px;
      background-color: #fff;
      cursor: pointer;
    }
    .active {
      background-color: #333!important;
    }
    
</style>