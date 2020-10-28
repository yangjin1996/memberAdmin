<template>
	<scroll-view>
		<!-- 导航栏 -->
		<scroll-view scroll-x class="bg-white nav fixed margin-line">
			<view class="flex text-center">
				<view
					class="cu-item flex-sub text-shadow"
					:class="index == TabCur ? 'text-yellow cur' : ''"
					v-for="(item, index) in nav_list"
					:key="index"
					:data-id="index"
					@click="tabSelect"
				>
					{{ item.name }}
				</view>
			</view>
		</scroll-view>
		<view class="content">
			<!-- 订单列表 -->
			<order-list :type="TabCur" :datas="order_list" @onclick="toPage"></order-list>
		</view>
	</scroll-view>
</template>

<script>
import orderList from '@/components/single/list/order-list.vue';
import { mapState, mapMutations } from 'vuex';
export default {
	computed: mapState(['userinfo']),
	components: {
		orderList
	},
	data() {
		return {
			uid: 0,
			TabCur: 0,
			scrollLeft: 0,
			nav_list: [{ name: '已领取', onclick: true }, { name: '已失效', onclick: false }],
			order_list: [
				
			]
		};
	},
	onLoad: function() {
		
	},
	onShow() {
		this.uid =this.userinfo.uid;
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
		...mapMutations(['setOrderList']),
		tabSelect(e) {
			this.TabCur = e.currentTarget.dataset.id;
			this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
			
		},
		onInit: function(state) {
			var params = {
				user_id: this.uid
			};
			var that = this;
			this.$axios.post(
				this.umcons.serviceAddress.MY_COUPON,
				params,
				function(res, code) {
					if (code == 0) {
						var data = res;
						console.log(res);
						that.order_list = res;
						that.setOrderList(res);
					}
					uni.stopPullDownRefresh();
				},
				function(error) {
					uni.stopPullDownRefresh();
					console.log(error);
				},
				state
			);
		},
		toPage(index) {
			let order=this.order_list[index];
			let path='order_detail?index='+index;
			uni.navigateTo({
				url: path
			});
		}
	}
};
</script>

<style scoped>
.content {
	margin-top: 100upx;
}
</style>
