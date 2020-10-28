<template>
	<scroll-view>
		<view class="bg-white padding margin-top-sm margin-left-lg margin-right-lg text-black" style="border-radius: 30upx;">
			<view class="margin-left-xs">大自然地板</view>
			<view class="h-line"></view>
			<view class="margin-left-xs text-sm">
				<view>{{ order.name }}</view>
				<view>使用期限：{{ order.e_time }}之前</view>
				<view>抵用金额：￥{{ order.price }}</view>
				<view v-if="order.emoney != null">付款金额：￥{{ order.emoney }}</view>
				<!-- <view>订单号：D54DB312414</view> -->
			</view>
			<view class="text-center margin-top-sm">订单凭证</view>
			<view class="flex align-center justify-center order-number h_center">
				<view class="text-xxl text-bold">{{ order.code }}</view>
			</view>
			<view class="margin-top-sm">
				<view>使用说明：</view>
				<view class="margin-left text-grey text-sm">
					<view class="margin-top-xs">1.请在使用期限前使用，过期无效。</view>
					<view class="margin-top-xs">2.每次使用限用一张，无法叠加使用。</view>
					<view class="margin-top-xs">3.优惠劵只限到店使用，如有其他情况，详情请咨询商家。</view>
				</view>
			</view>
		</view>
		<view v-if="lists.length > 0">
			<cu-cell title="推荐商品" isTop="true"></cu-cell>
			<!-- 推荐商品 -->
			<shoplist :tags="label" :datas="lists" :type="0" @onclick="onClickShop"></shoplist>
		</view>
	</scroll-view>
</template>

<script>
import shoplist from '@/components/single/list/shoplist.vue';
import { mapState, mapMutations } from 'vuex';
export default {
	computed: mapState(['orderlist', 'shops', 'userinfo','label']),
	components: {
		shoplist
	},
	data() {
		return {
			uid: 0,
			order: {},
			lists: []
		};
	},
	onLoad: function(prop) {
		if (this.util.isExist(prop.index)) {
			this.order = this.orderlist[prop.index];
		}
	},
	onShow() {
		this.uid = this.userinfo.uid;
		this.lists = this.shops;
		console.log(this.lists);
		this.onInit(0);
	},
	onPullDownRefresh: function() {
		var that = this;
		setTimeout(function() {
			that.onInit(1);
			uni.stopPullDownRefresh();
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
			// var params = {
			// 	uid: this.uid
			// };
			// var that = this;
			// this.$axios.post(
			// 	this.umcons.serviceAddress.HOME_V2,
			// 	params,
			// 	function(res, code) {
			// 		if (code == 0) {
			// 			var data = res;
			// 		}
			// 		uni.stopPullDownRefresh();
			// 	},
			// 	function(error) {
			// 		uni.stopPullDownRefresh();
			// 		console.log(error);
			// 	},state
			// );
		},
		toGoods(img) {
			var u_img = encodeURIComponent(img);
			uni.navigateTo({
				url: '../index/goods_detail?' + 'img=' + u_img
			});
		},
		onClickShop: function(id) {
			console.log(id);
			uni.navigateTo({
				url: '../index/goods_detail?id=' + id
			});
		}
	}
};
</script>

<style>
.h-line {
	width: 100%;
	height: 1px;
	background-color: #656565;
	margin: 24upx auto;
}
.order-number {
	width: 400upx;
	height: 169upx;
	border: 1px solid #000000;
	border-radius: 14upx;
}
.h_center {
	margin: 20upx auto;
}
</style>
