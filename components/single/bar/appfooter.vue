<template>
	<view>
		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="cu-bar-item action" @click="onNavChange" data-cur="0" data-url="../home/home">
				<view class="cuIcon-cu-image"><image :src="pagecur == 0 ? '../../static/icon_home.png' : '../../static/icon_home_no.png'"></image></view>
				<view :class="pagecur == 0 ? 'text-green' : 'text-gray'">首页</view>
			</view>
			<view class="cu-bar-item action" @click="onNavChange" data-cur="1" data-url="../messagelist/messagelist">
				<view class="cuIcon-cu-image"><image :src="pagecur == 1 ? '../../static/icon_live.png' : '../../static/icon_live_gray.png'"></image></view>
				<view :class="pagecur == 1 ? 'text-green' : 'text-gray'">消息</view>
			</view>
			<view class="cu-bar-item action" @click="onNavChange" data-cur="2" data-url="../user/user">
				<view class="cuIcon-cu-image"><image :src="pagecur == 2 ? '../../static/icon_user.png' : '../../static/icon_user_no.png'"></image></view>
				<view :class="pagecur == 2 ? 'text-green' : 'text-gray'">我的</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	props: {
		pagecur: {
			type: Number,
			default: 0
		}
	},
	methods: {
		onNavChange: function(e) {
			let cur = e.currentTarget.dataset.cur;
			if (cur != this.pagecur) {
				let url = e.currentTarget.dataset.url;
				uni.reLaunch({
					url: url,
					animationType: 'zoom-fade-out',
					animationDuration: 200
				});
			}
		}
	}
};
</script>

<style scoped>
.cu-bar-item view {
	text-align: center;
}
</style>
