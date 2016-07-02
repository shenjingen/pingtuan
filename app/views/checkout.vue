<template>
	<div ms-visible="loading">
        <div class="wx_wrap">
		<!--
            <div class="lou_beginer">
                <ul>
                    <li><h4><b>团长代收:</b><span class="name_lou_1" ms-text="receive_name"></span></h4></li>
                    <li><h4>收货地址:<span class="name_lou_2" ms-text="shipping_address"></span></h4></li>
                </ul>

            </div>
		-->	
            <a class="send_address">
                <div id="sendTo">
                    <div class="address address_defalut">
                    <h3><b class="send_margin">送至</b><!--<br><span class="order_lou_received">团长代收</span>--></h3>
                        <ul id="editAddBtn" adid="4">
                            <li><strong>{{address.name}}</strong>&nbsp;&nbsp;{{address.mobile}}</li>
                            <li>{{address.area}}{{address.address}}</li>
                        </ul>
                    </div>
                </div>
            </a>
            <div class="order">
                <div class="order_bd">
                    <div id="orderList" class="order_glist">
                        <div class="only">
                            <div class="order_goods">
                                <div class="order_goods_img">
                                    <img :src="'http://image.wljyc.com'+goods.pic+'@280h'">
                                </div>
                                <div class="order_goods_info">
                                    <div class="order_goods_name"><span id="tuanLbl"></span>{{goods.pname}}</div>
                                    <div class="order_goods_attr">
                                        <div class="order_goods_attr_item">
                                           <!-- <span class="order_goods_attr_tit">数量：</span>
                                            <div class="order_goods_num">1</div>-->
                                            <div id="goodsPrice" class="order_goods_price2"><i>￥</i>{{goods.price}}<i>/{{goods.spec}}</i></div>
                                        </div>
                                        <p class="order_goods_attr_item"><span id="skuLast"></span><i></i></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="pay_area" style="opacity: 1;">
                <div class="total">快递：<small>￥</small>0.00 总价：<span id="totalPrice" class="total_price"><i>￥</i>{{goods.price}}</span></div>
                <div class="pay2">
                    <div class="pay2_hd">请选择支付方式</div>
                    <div id="payList" class="pay2_list">
                        <div id="goTenPay" class="pay2_item pay2_wx pay2_selected">
                            <span class="pay2_item_state"></span>
                            <span class="pay2_item_ico"></span>
                            <span class="pay2_item_tit">微信支付</span>
                        </div>
                    </div>
                    <form name="theForm" id="theForm">
                        <div>
                            <input type="button" name="submit" value="立即支付" class="pay2_btn" id="btn_order_done"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
		<nv-tuan></nv-tuan>
    </div>
</template>
<script>
	export default {
        data (){
            return {
                address:[], 
                goodsId:'',
				goods:[]
            }
        },
        route:{
            data (transition){
				if(sessionStorage.goods){
					this.goods = JSON.parse(sessionStorage.goods);
				}else{
					this.goodsId=transition.to.params.goodsId;
					this.$http.get('http://www.wljycnew.com/show/product/goods?id='+this.goodsId).then((response) => {
						this.goods = response.data;
					}, (response) => {
					
					});
				}
				if(sessionStorage.address){
					this.address = JSON.parse(sessionStorage.address);
				}else{
					this.$http.get('http://www.wljycnew.com/show/product/address?id=20389').then((response) => {
						this.address = response.data;
						sessionStorage.address = JSON.stringify(this.address);
					}, (response) => {
					
					});
				}
            }
        },
        methods:{
		
        },
        components:{
			"nvTuan":require('./tuan.vue')
        }
    }
</script>


