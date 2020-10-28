<template>
	<view>
		<view class="margin-top page-cells">
			<!-- <itemcell title="订单号:" :value="orderinfo.order_id"></itemcell> -->
			<itemcell title="商品名称:" :value="orderinfo.name"></itemcell>
			<itemcell title="订单金额:" :value="orderinfo.money"></itemcell>
			<itemcell title="订单数量:" :value="orderinfo.buy_num"></itemcell>
			<itemcell title="抵用金额:" :value="orderinfo.price"></itemcell>
			<itemcell title="下单时间:" :value="orderinfo.addtime"></itemcell>
		</view>
		<view class=" page-cell-btn"><button type="primary" @click="onPayNewOrder">立即付款</button></view>
	</view>
</template>

<script>
	import { mapState, mapMutations } from 'vuex';
import itemcell from '@/components/single/grid/itemcell.vue';
export default {
	computed: {
		...mapState(['inviter', 'userinfo'])
	},
	components: {
		itemcell
	},
	data() {
		return {
			orderid: 0,
			orderinfo: {
				coupon_id:0,
				name: '',
				emoney: '',
				price: '',
				buy_num: 1,
				addtime: '',
				grade_uid:0,
				user_id:0
			},
			cid: 0,
			uid: 0
		};
	},
	onLoad(prop) {
		this.orderinfo.coupon_id = prop.id;
		this.orderinfo.name = prop.name;
		this.orderinfo.money = prop.emoney;
		this.orderinfo.price = prop.price;
		this.orderinfo.addtime =this.util.getTodayDate();
		this.orderinfo.grade_uid=this.inviter;
		this.orderinfo.user_id = this.userinfo.uid;
		//this.initPro();
	},
	methods: {
		initPro: function() {
			let params = {
				order_id: this.orderid
			};
			console.log(params);
			var that = this;
			this.$axios.post(
				this.umcons.serviceAddress.COUPON_PAY,
				params,
				function(res) {
					console.log(res);
					var data = res;
					that.orderinfo = data;
				},
				function(error) {
					console.log(error);
				}
			);
		},
		onPayNewOrder: function() {
			let params = this.orderinfo;
			var that = this;
			uni.request({
				url: 'https://zs.homeeyes.cn/' + that.umcons.serviceAddress.COUPON_PAY,
				data: params,
				method: 'POST',
				header: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				dataType: 'json',
				success: function(res) {
					//获取请求值
					var data = res.data;
					console.log(res);
					uni.requestPayment({
						provider: 'wxpay',
						timeStamp: data.timeStamp,
						nonceStr: data.nonceStr,
						package: data.package,
						signType: data.signType,
						paySign: data.paySign,
						success: function(res) {
							console.log('success:' + JSON.stringify(res));
							that.util.showModal('订单支付成功', function() {
								uni.navigateBack({
									delta: 1
								});
							});
						},
						fail: function(err) {
							console.log('fail:' + JSON.stringify(err));
							that.util.showAlert('订单支付失败');
						}
					});
				},
				fail: function(err) {}
			});
		}
		
	}
};
</script>

<style scoped>
.page-cell-btn {
	padding: 30upx;
	margin-top: 100upx;
}
</style>
