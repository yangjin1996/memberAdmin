<template>
	<view class="container">
		<view class="contents">
			<card-media :datas="coupon" @onclick="toChild"></card-media>
		</view>
		<cu-more title="已没有更多内容咯"></cu-more>
	</view>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import cardMedia from '@/components/single/card/card_media.vue';
export default {
	computed: {
		...mapState(['hasLogin', 'forcedLogin', 'userinfo'])
	},
	components: {cardMedia},
	data() {
		return {
			uid: 0,
			cid: 0,
			coupon: [
				{
					title: '厨卫优惠券',
					price: '￥200',
					img: 'https://image.weilanwl.com/color2.0/plugin/sylb2244.jpg',
					url: './discount_detail'
				}
			]
		};
	},
	onLoad() {
		this.uid=this.userinfo.uid;
	},
	onShow() {
		this.onInit(0);
	},
	onPullDownRefresh: function() {
		var that = this;
		setTimeout(function() {
			that.onInit(1);
		}, 200);
	},
	onShareAppMessage: function(res) {
		if (res.from === 'button') {
			// 来自页面内分享按钮
			console.log(res.target);
		}
		let params="token="+this.userinfo.uid;
		return this.controller.getSharePage(params);
	},
	methods: {
		...mapMutations(['logout', 'login', 'loginsoure']),
		onInit: function(state) {
			var that = this;
			let params = {
				uid: this.uid,
				type:2
			};
			console.log(params);
			this.$axios.post(
				this.umcons.serviceAddress.ALL_COUPON,
				params,
				function(res, code) {
					if (code == 0) {
						var data = res;
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
		toChild(index) {
			//this.selectIndex=index;
			console.log(index);
		 let id=this.coupon[index].id;
		 let path = 'discount_detail?id=' + id;
		 uni.navigateTo({
		 	url: path
		 });
		}
	}
};
</script>

<style scoped></style>
