<template>
<div class="container">
  <section class="main-view">
	<div id="focus" class="focus goods-focus ect-padding-lr ect-margin-tb" height="">
		<div class="hd">
			<ul>
			</ul>
		</div>
		<div class="bd">
			<ul>
				<li><img :src="'http://image.wljyc.com'+goods.pic+'@280h'" /></li>
			</ul>
		</div>
	</div>
	<div class="goods-info goods-white">
		<div class="goods-name">{{goods.pname}}</div>
		<p class="tuan_goods_cx">
			<span>{{goods.keywords}}</span>
		</p>
		<div class="goods_price">
			<span class="red" ms-class="out-grey:isShow_out"><span class="red-padding">￥</span>{{goods.price}}</span>
			<span class="price-spec"><span>/</span>{{goods.spec}}</span>
			<span class="grey">
				<span class="grey-padding"><small>￥</small></span>{{goods.market_price}}
			</span>
			<span class="market-price">（市场价）</span>

		</div>
		<!-- <div class="goods-spec">规格：{{goods.spec}}</div> -->
		<div class="goods-sold">累计销量：{{goods.sell_amount}}件</div>
		<div class="goods-out-pic"></div>
	</div>

	<div class="rule-intro">*开团并邀请{{goods.number-1}}人参团，人数不足自动退款，详见<span>拼团玩法</span></div>
	<div id="quickgroup"></div>
	<div class="image-text goods-white">
		<div class="text-title">图文详情</div>
		<div class="text-info">
			<ul>
				<li><p><span></span></p></li>
			</ul>
		    <div>{{desc}}</div>
		</div>
		<div class="img-info">
			<ul>
				<li><img :src="goods.image"></li>
			</ul>
		</div>
	</div>
  </section>
  <footer class="footer footer-special">
	<nav>
		<ul class="goods-footer">
			<li class="home"><a v-link=" '/' "><i class="fb goods-home"></i>首页</a></li>
			<li class="one-bug bug-common"><a class="white"><div class="bug-price"><span><small>￥</small></span>{{goods.market_price}}</div><div class="bug-type">单独购</div></a></li>
			<li class="more-bug bug-common"><a v-link="{ name: 'checkout', params: { goodsId: goods.id }}" class="white"><div class="bug-price"><span><small>￥</small></span>{{goods.price}}</div><div class="bug-type">{{goods.number}}人团</div></a></li>
			<li class="go-home"><a  v-link=" '/' ">查看更多拼团</a></li>
		</ul>
	</nav>
  </footer>
</div>
</template>
<script>
	export default {
        data (){
            return {
                goods:{},    
                goodsId:'',
				desc:''
            }
        },
        route:{
			data(transition){
				 //如果从支付页面返回去sessionStorge获取数据
                if(transition.from.name === "checkout"){
                    this.goods = JSON.parse(sessionStorage.goods);
                }else{
                    //页面初次加载获取的数据
					//获取url传的tab参数
					this.goodsId=transition.to.params.goodsId;
					this.$http.get('http://www.wljycnew.com/show/product/goods?id='+this.goodsId).then((response) => {
						this.goods = response.data;
					}, (response) => {
					
					});
                }
			},
			deactivate (transition){
				if(transition.to.name === "checkout"){
					sessionStorage.goods = JSON.stringify(this.goods);
				}else{
					sessionStorage.removeItem("goods");
				}
				transition.next();
			}
        },
        methods:{
		
        },
        components:{

        }
    }
</script>


