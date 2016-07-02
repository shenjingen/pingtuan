'use strict'
export default function(router){
    router.map({
        '/':{				//首页
            name:'home',
            component:require('./views/index.vue')
        },
		'/goods/:goodsId':{				//产品详情
            name:'goods',
            component:require('./views/goods.vue')
        },
		'/checkout/:goodsId':{				//订单支付
            name:'checkout',
            component:require('./views/checkout.vue')
        }
    })
}