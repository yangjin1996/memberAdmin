<template>
	<scroll-view>
		<view class="margin-top">
		<classesgrids :datas="brand_list" @onclickitem="openProjectFlow"></classesgrids>
		<cu-more title="没有更多记录了"></cu-more>
		</view>
	</scroll-view>
</template>

<script>
import classesgrids from '@/components/single/list/classes_grids_model5.vue';
import { mapState, mapMutations } from 'vuex';
export default {
	computed: mapState(['userinfo']),
	components: {
		classesgrids
	},
	data() {
		return {
			brand_list: [
				{
					img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3662462938,1636988876&fm=26&gp=0.jpg',
					name: '大自然地板',
					introduce: '这是一段品牌简介这是一段品牌简介',
					count:8
				}
			]
		};
	},onLoad: function() {
		
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
		onInit: function(state) {
			var params = {
				
			};
			var that = this;
			this.$axios.post(
				this.umcons.serviceAddress.BRAND_LIST,
				params,
				function(res, code) {
					if (code == 0) {
						var data = res;
						that.brand_list=res;
						
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
		openProjectFlow: function(index) {
			let id=this.brand_list[index].id;
			uni.navigateTo({
				url: 'brand_detail?' + 'id=' + id
			});
		}
	}
};
</script>

<style>
image {
	width: 140upx;
	height: 140upx;
}
</style>
