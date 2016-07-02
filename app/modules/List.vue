<template>
<div class="goods_list tuan-new" v-for="item in items" >
  <div class="tuan_g" >
      <i class="sale-out"></i>
      <a v-link="item.id">
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
