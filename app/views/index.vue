<template>
<div class="container">
	<section class="main-view">
		<div class="index_loctaion">
			<div class="location"><i></i><span>龙岩</span></div>
			<div class="location-arrow"></div>
		</div>
		<div id="tuan" class="tuan">
		<!--
			<ul id="slider">
				<li v-for="item in slider" >
					<a v-link="item.link"><img :src="item.imgurl" alt="{{ item.id }}"/></a>
				</li>
			</ul>
		-->
			<div id="categoryIcons">
				<ul>
					<li v-on:click="getList(item.id)" class="categorys-new categorys" v-for="item in categorys" v-if="$index < 4">
						<div class="icon-img"><img :src="item.icon"></div>
					</li>
				</ul>
			</div>
			<div class="clear-both"></div>
			<!--
			<div id="flashNews">
				<div class="news-flash"></div>
				<div id="flashContent" class="news-info">
					<div class="news-item" >
						<div>
							<span>hotlabel</span>content
						</div>
					</div>
				</div>
			</div>
			<ul id="secKill" >
				<li>
					<div class="kill-info">
						<div class="kill-intro">───<span>限时抢购</span>───</div>
						<div class="kill-price">
							<span class="red-price"><span>￥</span>55.00</span>
							/<del><span class="grey-price"><span>￥</span>55.00</span></del>
						</div>
						<div class="kill-time">
							<div class="right"><span>12</span><b>:</b><span>22</span><b>:</b><span>56</span></div>
							<div class="left">距离开抢</div>
						</div>
						<div class="kill-over">
							<div class="kill-progress"><div class="progress-bar" >&nbsp;已售52</div></div>
							<div class="kill-ready kill-bug" >马上抢</div>
							<div class="kill-out kill-bug">已抢光</div>
						</div>
					</div>
					<a><img :src="" alt=""/></a>
				</li>
			</ul>
			-->
			<div class="for-margin-top"></div>
			<!--
			<div class="category-banner" >
				<img :src="categoryBanner" alt="">
			</div>
			-->
			<div class="goods_list tuan-new" v-for="item in list" >
			  <div class="tuan_g" >
				  <i class="sale-out"></i>
				  <a v-link="{ name: 'goods', params: { goodsId: item.id }}">
					  <div class="tuan_g_img" height="">
						  <img :src="'http://image.wljyc.com'+item.pic+'@280h'" class="loadThumb">
						  <span class="goods-tag label-blue" ms="'蓝标'">{{ item.tag }}</span>
						  <!--
						  <span class="goods-tag label-orange" ms="'黄标' && '热卖' ">{{ item.tag }}</span>
						  <span class="goods-tag label-red" ms="'红标' && '直降'">{{ item.tag }}</span>
						  <span class="goods-tag label-orange-hot" ms="'黄标' && '热卖'">{{ item.tag }}</span>
						  <span class="goods-tag label-red-reduce" ms="'红标' &&  '直降'">{{ item.tag }}</span>
						  -->
					  </div>

					  <div class="tuan_goods_info">
						  <p class="tuan_goods_name">{{ item.pname }}</p>
						  <p class="tuan_goods_cx">
							{{ item.keywords }} 
						  </p>
					  </div>

					  <div class="tuan_goods_core">
						  <div class="tuan_goods_btn"><span>{{ item.number }}人团</span><span class="tmp"></span><span>去开团</span></div>
						  <div class="tuan_goods_price">
							  <span class="red"><small>￥</small>{{ item.price }}</span>
							  <span class="divide"> / </span><span class="spec">{{ item.spec }}</span>
						  </div>
						  <!-- <div class="tuan_g_btn">去开团</div> -->
					  </div>
					  <!-- <div class="tuan_g_mprice">市场价：
						  <del>￥{{ item.price }}</del>
					  </div> -->
				  </a>
			  </div>
			</div>
		</div>
	</section>
</div>
<nv-foot></nv-foot>
</template>
<script>
    export default {
        data (){
            return {
				categorys:[],
				slider:[],
			    list:[],
				searchKey:''
			}
        },
        route:{
			data(transition){
				 //如果从详情返回去sessionStorge获取数据
                if(transition.from.name === "goods"){
                    this.list = JSON.parse(sessionStorage.list);
					this.categorys = JSON.parse(sessionStorage.categorys);
					this.slider = JSON.parse(sessionStorage.slider);
                }else{
                    //页面初次加载获取的数据
                    this.getList(277);
                }
			},
			deactivate (transition){
				if(transition.to.name === "goods"){
					sessionStorage.list = JSON.stringify(this.list);
					sessionStorage.categorys = JSON.stringify(this.categorys);
					sessionStorage.slider = JSON.stringify(this.slider);
				}else{
					sessionStorage.removeItem("list");
					sessionStorage.removeItem("categorys");
					sessionStorage.removeItem("slider");
				}
				transition.next();
			}
		},
        methods:{
            getList(searchKey){
				this.$http.get('http://www.wljycnew.com/show/product/list?cid='+searchKey).then((response) => {
					this.list = response.data.product;
					this.slider = response.data.slide;
					this.categorys = response.data.cat;
					this.searchKey = searchKey;
				}, (response) => {
				
				});
            }
        },
        components:{
			"nvFoot":require('./foot.vue')
        }
    }
</script>

