<template>
	<div class="main-logo">
		<img :src="logodata[logoindex].imgSrc" >
		<span class="logoList-arrow" @click="ulshow()"></span>
		<transition name="logofade">
			<ul v-show="logoflag" class="ul">
				<li v-for="(item,index) in logodata" @click="everyli(index)" :class="{logohover:index==logoNow}" @mouseover="hoverindex(index)">
					<img :src="item.imgSrc">
				</li>
			</ul>
		</transition>	
	</div>
</template>
<script type="text/javascript">
		export default{
			data:function(){
				return{
					logoindex:0,
					logoflag:false,
					logoNow:-1,
					logodata: [{
                		imgSrc: require('../assets/360_logo.png')
		            },{
		                imgSrc:require('../assets/baidu_logo.png')
		            },{
		                imgSrc:require('../assets/sougou_logo.png')
		            }]
				}
			},
			methods:{
				ulshow:function(){
					this.logoflag=!this.logoflag
				},
				everyli:function(index){
					this.logoindex=index
					this.logoflag=false
					this.$emit('getIndex',this.logoindex)
				},
				hoverindex:function(index){
					this.logoNow=index
				}
			}
		}
	
</script>
<style type="text/css">
	ul{list-style: none;padding: 0;margin: 0}
	.ul{
		width: 480px;
		z-index: 999;
	}
	.main-logo {
	    width: 600px;
	    height: 140px;
	    position: relative;
	    margin: auto;
	}

	.main-logo img {
	    display: block;
	    margin: 0 auto;
	    user-select: none;
	    cursor: pointer;
	}

	.logoList-arrow {
	    position: absolute;
	    width: 0;
	    height: 0;
	    border: 8px solid;
	    border-color: #000 transparent transparent transparent;
	    right: 100px;
	    top: 66px;
	    cursor: pointer
}
   .logofade-enter-active, .logofade-leave-active{
            transition: 1s all ease;
        }

	.logofade-enter-active{
		opacity: 1;

	}
	.logofade-leave-active{
		opacity: 0;
		transform: translateY(20px);
	}
	.logofade-enter ,.logofade-leave{
		opacity: 0;
		transform: translateY(20px);
	}
	.logohover{
		background-color: #eee !important;cursor: pointer
	}
</style>