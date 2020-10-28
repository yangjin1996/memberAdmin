<template>
	<view class="content">
		
		<view class="margin-top page-cell-box">
			<cu-cell title="抵用劵"><block slot="right">请选择商品抵用劵</block></cu-cell>
			<view class="contents margin-line">
				<card-media :emoney="true" :datas="coupon" @onclick="toChild"></card-media></view>
			<view class="page-cell">
				<view>抵用劵注意事项</view>
				<view>抵用劵需要到店支付，购买后请到线下实体店完成兑换。</view>
				<button type="primary" @click="toPaypage">确认选择</button>
			</view>
			
		</view>
	</view>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import cardMedia from '@/components/single/card/card_media.vue';
export default {
	computed: {
		...mapState(['hasLogin', 'forcedLogin', 'userinfo'])
	},
	components: {
		cardMedia
	},
	data() {
		return {
			current: 0,
			coupon: [
				{
					title: '厨卫优惠券',
					price: '￥200',
					img: 'https://image.weilanwl.com/color2.0/plugin/sylb2244.jpg',
					url: './discount_detail'
				}
			],
			pid: 0,
			uid: 0,
			discount: 0,
			copepay: 0,
			modalName: null,
			month: 1
		};
	},
	onLoad(prop) {
		this.pid=prop.pid
		//this.onInit();
	},onShow() {
		this.uid=this.userinfo.uid;
		this.onInit(0);
	},
	onPullDownRefresh: function() {
		var that = this;
		setTimeout(function() {
			that.onInit(1);
		}, 200);
	},onShareAppMessage: function(res) {
		if (res.from === 'button') {
			// 来自页面内分享按钮
			console.log(res.target);
		}
		let params="token="+this.userinfo.uid;
		return this.controller.getSharePage(params);
	},
	methods: {
		onInit: function(state) {
			var that = this;
			let params = {
				user_id: this.uid,
				type:1
			};
			console.log(params);
			this.$axios.post(
				this.umcons.serviceAddress.ALL_COUPON,
				params,
				function(res, code) {
					if (code == 0) {
						var data = res;
						console.log(data);
						that.coupon=res;
					}
					uni.stopPullDownRefresh();
				},
				function(error) {
					console.log(error);
					uni.stopPullDownRefresh();
				},state
			);
		},
		toPaypage: function(orderid) {
			let pays= this.coupon[this.selectIndex];
			console.log(pays)
			var url = '../wxpay/wxpay?emoney=' + pays.emoney+'&name=' + pays.name+'&price=' + pays.price+'&id=' + pays.id;
			uni.navigateTo({
				url
			});
		},
		toChild(index) {
			this.selectIndex=index;
		}
	}
};
</script>

<style>
.page-cell-box {
	margin-top: 5px;
	background-color: white;
}

.page-cell {
	text-align: left;
	padding-left: 20upx;
	padding-right: 20upx;
	padding-bottom: 30upx;
	font-size: 32upx;
	font-family: FZLTHK--GBK1-0;
	font-weight: 400;
	color: rgba(112, 111, 111, 1);
}
.page-cell button{
	margin-top: 20upx;
	margin-bottom: 20upx;
}

.margin-line{
	margin-top: 2upx;
}
</style>
