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
			<order-list :datas="order_list" @onclick="toPage"></order-list>
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
			nav_list: [{ name: '已预定', onclick: true }, { name: '已完成', onclick: false }],
			order_list: [
				{
					id: 2,
					user_id: 1,
					coupon_id: 2,
					type: 3,
					created_at: '2019-10-18 16:12:49',
					name: '清雅墙纸',
					price: '500',
					is_up: 1,
					brand_id: 0,
					e_time: '2019-10-22 00:00:00',
					updated_at: '2019-10-18 16:12:49'
				}
			]
		};
	},
	onLoad: function() {
		
	},
	onShow() {
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
				this.umcons.serviceAddress.MY_ORDER,
				params,
				function(res, code) {
					if (code == 0) {
						var data = res;
						console.log(res);
						that.order_list = res;
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
		toPage() {
			uni.navigateTo({
				url: 'order_detail'
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
