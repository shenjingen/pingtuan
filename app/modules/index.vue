<template>
<div class="container">
	<section class="main-view">
		<div class="index_loctaion">
			<div class="location"><i></i><span>龙岩</span></div>
			<div class="location-arrow"></div>
		</div>
		<div id="tuan" class="tuan">
			 <ul id='slider'>
				<li v-for="item in slider" >
					<div class="groupcode input-page" >
						<img src="">
						<div class="input-area tfboys">
							<input type="text" ms-duplex="group_code" />
							<button >确定</button>
						</div>
					</div>
					<a v-link="item.link"><img :src="item.image" alt="{{ item.title }}"/></a>
				</li>
			</ul>
			<div class="clear-both"></div>
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
					<a><img src="" alt=""/></a>
				</li>
			</ul>

			<div class="for-margin-top"></div>
			<div class="category-banner" >
				<img src="categoryBanner" alt="">
			</div>
			
			<div class="goods_list tuan-new" v-for="item in items" >
			  <div class="tuan_g" >
				  <i class="sale-out"></i>
				  <a v-link="{ name: 'goods', params: { userId: 123 }}">
					  <div class="tuan_g_img" height="">
						  <img :src="item.image" class="loadThumb">
						  <span class="goods-tag label-blue" ms="'蓝标'">{{ item.tag }}</span>
						  <!--
						  <span class="goods-tag label-orange" ms="'黄标' && '热卖' ">{{ item.tag }}</span>
						  <span class="goods-tag label-red" ms="'红标' && '直降'">{{ item.tag }}</span>
						  <span class="goods-tag label-orange-hot" ms="'黄标' && '热卖'">{{ item.tag }}</span>
						  <span class="goods-tag label-red-reduce" ms="'红标' &&  '直降'">{{ item.tag }}</span>
						  -->
					  </div>

					  <div class="tuan_goods_info">
						  <p class="tuan_goods_name">{{ item.title }}</p>
						  <p class="tuan_goods_cx">
							{{ item.text }} 
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
				slider:[],
			    items: []
			}
        },
        route:{
			data(){
				this.slider = [{
						title:'aaa',
						link:'www.qq.com',
						image:'http://imagecdn.yqphh.com/3/2016/06/xwpwbl7763tbnlz7.jpg'
					},{
						title:'aaa',
						link:'www.qq.com',
						image:'http://imagecdn.yqphh.com/3/2016/06/nhlmtz69uc01qtc3.jpg'
					},{
						title:'aaa',
						link:'www.qq.com',
						image:'http://imagecdn.yqphh.com/3/2016/06/mqxrgdmqabpqdp8e.jpg'
					}],
				this.items = [{
					id: 'goods',
					title: '【直降3元】白糖罂荔枝3斤29.9元【6.21开始发货】',
					text: '爽脆清甜',
					image:'http://imagecdn.yqphh.com/3/2016/05/j3yhk7yybnegs68r.jpg',
					price: 12.90,
					number: 6,
					tag:'热卖',
					spec:'5斤'
				}, {
					id: 2,
					title: '【直降3元】进口南非橙6个19.9元【被阳光亲吻过的橙子】',
					text: '爽脆清甜',
					image:'http://imagecdn.yqphh.com/3/2016/06/pd3ew7d24vg1u3dk.jpg',
					price: 15.90,
					number: 3,
					tag:'直降',
					spec:'1斤'
				}, {
					id: 3,
					title: '【再降5元】新鲜蓝莓4盒34.9元【满满花青素，最配爱美的你】',
					text: '爽脆清甜',
					image:'http://imagecdn.yqphh.com/3/2016/06/7u0mluytb16wytw9.jpg',
					price: 29.90,
					number: 8,
					tag:'热卖',
					spec:'1箱'
				}]
			}
		},
        methods:{
           
        },
        components:{
			"nvFoot":require('./foot.vue')
        }
    }
</script>

