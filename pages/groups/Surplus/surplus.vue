<template>
	<view class="container bg-color-white">
		<view class="data-list" v-for="(item,index) of 6" :keys="index">
			<view class="text-color-3 title">
				<text>新用户奖金</text>
				<text class="text-bold" :class="{'text-finish': money > 0}">+3.00</text>
			</view>
			<view class="time text-color-9">2020-10-24 12:30</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				money:1
			};
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		width: 100vw;
		height: 100vh;
		
		.data-list{
			height: 132rpx;
			padding: 20rpx 30rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			border-top: 1px solid #eee;
			.title{
				font-size: 34rpx;
				display: flex;
				justify-content: space-between;
			}
			.time{
				font-size: 24rpx;
			}
		}
	}
	.container .data-list:last-child{
		border-bottom: 1px solid #eee;
	}
</style>
