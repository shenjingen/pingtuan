<template>
  <section class="main-view">
	<div id="focus" class="focus goods-focus ect-padding-lr ect-margin-tb" height="">
		<div class="hd">
			<ul>
			</ul>
		</div>
		<div class="bd">
			<ul>
				<li ms-repeat="gallery"><img :src="image" /></li>
			</ul>
		</div>
	</div>
	<div class="goods-info goods-white">
		<div class="goods-name">{{title}}</div>
		<p class="tuan_goods_cx">
			<span ms-if="goods.key_words.country.img_url"><img ms-src="goods.key_words.country.img_url" class="loadThumb"></span>
			<span>{{goods.key_words.country.name}}</span>
			<span ms-repeat-word="goods.key_words.normal_keywords"><span ms-if="goods.key_words.country.name || !$first">·</span>{{word}}</span>
		</p>
		<div class="goods_price">
			<span class="red" ms-class="out-grey:isShow_out"><span class="red-padding">￥</span>{{tuan_more_price}}</span>
			<span class="price-spec"><span>/</span>{{spec_desc}}</span>
			<span class="grey">
				<span class="grey-padding"><small>￥</small></span>{{price}}
			</span>
			<span class="market-price">（市场价）</span>

		</div>
		<!-- <div class="goods-spec">规格：{{spec}}</div> -->
		<div class="goods-sold">累计销量：{{number}}件</div>
		<div class="goods-out-pic" ms-if="isShow_out"></div>
	</div>

	<div class="rule-intro">*开团并邀请{{number}}人参团，人数不足自动退款，详见<span ms-click="forTuanRule">拼团玩法</span></div>
	<div id="quickgroup"></div>
	<div class="image-text goods-white">
		<div class="text-title">图文详情</div>
		<div class="text-info" ms-if="image_desc.length == 0">
			<ul>
				<li ms-repeat="new_goods_desc"><p><span>{{$index + 1}}.</span>{{el}}</p></li>
			</ul>
			<!-- <div ms-repeat-desc="goods_desc">{{desc}}</div> -->
		</div>
		<div class="img-info" ms-if="image_desc.length != 0">
			<ul>
				<li ms-repeat-img="image_desc"><img ms-src="img"></li>
			</ul>
		</div>
	</div>
  </section>
</template>

<script>

export default {
  props: {
    items: {
      type: Array,
      required: true,
      default: []
    },
  },
}

</script>

