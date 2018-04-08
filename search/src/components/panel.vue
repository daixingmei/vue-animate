<template>
	<div>
		<log-select  @getIndex="getIndex">
			
		</log-select>
		<div class="search-input">
			<input type="text"  @keyup="get($event)" v-model="keyword" @keyup.down="selectdown()" @keyup.up="selectup()" id="input" value="">
			<span class="search-reset" @click="cleardata()">&times;</span>
			<button class="search-btn" @click="search()">搜</button>
			<div class="search-select">
				<transition-group tag="ul" enter-active-class="rotateIn" leave-active-class=" zoomOutRight"  name="fade" class="search-select-list">
					<li v-for="(val,index) in data"  :class="{selecthover:index==nowindex}" @mouseover="selecthover(index)" :key="index" class="animated">{{val}}</li>
				</transition-group>
			</div>
		</div>
	</div>
</template>
<script>
	import logoSelect from './logoSelect.vue'
	export default{
		components:{
			'log-select':logoSelect
		},
		data:function(){
			return {
				data:[],
				keyword:'',
				nowindex:-1,
				searchIndex:0,
				logodata: [{
		                name: '360搜索',
		                searchSrc: 'https://www.so.com/s?ie=utf-8&shb=1&src=360sou_newhome&q='
		            }, {
		                name: '百度搜索',
		                searchSrc: 'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd='
		            }, {
		                name: '搜狗搜索',
		                searchSrc: 'https://www.sogou.com/web?query='
	            }]
			}

		},
		watch:{
		    keyword(val, oldVal){//普通的watch监听
		       this.keyword=val
		       
		    },
		},
		methods:{
			get:function(e){
				if(e.keyCode==38||e.keyCode==40){
					return;
				}
				this.$http.jsonp('https://sug.so.360.cn/suggest?word=' + this.keyword + '&encodein=utf-8&encodeout=utf-8').then(function(res) {
                	this.data = res.data.s;
                
           		});
			},
			cleardata:function(){
				this.keyword=''
				this.$http.jsonp('https://sug.so.360.cn/suggest?word=' + this.keyword + '&encodein=utf-8&encodeout=utf-8').then(function(res){
					this.data=[]
				})
			},
			search:function(){
				window.open(this.logodata[this.searchIndex].searchSrc+this.keyword)
			},
			selectdown:function(){
					this.nowindex++
				if(this.nowindex==this.data.length-1){
					this.nowindex=0
				}
				this.keyword=this.data[this.nowindex]

			},
			selectup:function(){
				this.nowindex--
				if(this.nowindex==-1){
					this.nowindex=this.data.length-1
				}
				this.keyword=this.data[this.nowindex]
			},
			selecthover:function(index){
				this.nowindex=index
			},
			// 接收来自子组件的数据
			getIndex:function(index){
				this.searchIndex = index;
			},

		}
	}
</script>
<style type="text/css">
	ul{
		background: #fff;
	}
	.search-input {
	    height: 45px;
	    width: 600px;
	    margin: 0 auto;
	    margin-top: 10px;
	    position: relative;
	}
	.search-reset {
    width: 21px;
    height: 21px;
    position: absolute;
    display: block;
    line-height: 21px;
    text-align: center;
    cursor: pointer;
    font-size: 20px;
    right: 110px;
    top: 12px
}
	.search-input input {
	    border: 1px solid #e4e4e4;
	    box-sizing: border-box;
	    width: 500px;
	    height: 45px;
	    font-size: 18px;
	    float: left;
	    padding-left: 10px;
	    padding-right: 10px;
	    overflow: hidden;
	}

	.search-btn {
	    height: 45px;
	    width: 100px;
	    border: 1px solid mediumseagreen;
	    background-color: mediumseagreen;
	    color: white;
	    font-size: 16px;
	    font-weight: bold;
	    float: left;
	}

	.search-btn {
	    cursor: pointer
	}

	.search-select {
	    position: absolute;
	    top: 45px;
	    width: 500px;
	    box-sizing: border-box;
	    z-index: 999;
	}

	.selecthover{
		    background-color: #eee !important;
    		cursor: pointer
	}
/*        .fade-enter-active, .fade-leave-active{
            transition: 1s all ease;
        }

        .fade-enter-active{
            opacity:1;
 
        }
    .fade-leave-active{
      position: absolute;
      opacity: 0
    }

    .fade-enter,.fade-leave{
        opacity:0;

    }*/
</style>