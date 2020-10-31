<template>
	<view class="container bg-color-white">
		<view class="line"></view>
		<view class="desc">
			<view class="desc-cell text-color-3">
				1. 三星以上满足条件的用户可获得1个贡献值
			</view>
			<view class="desc-cell text-color-3">
				2. 直接下属的贡献值相加减去最大的一个数字，再加上用户原有的1贡献值，得出用户总的贡献值
			</view>
			<view class="desc-cell text-color-3">
				3. 团队当月所有成交订单会拿出部分利润作为贡献值奖金，根据团队每月贡献值数会将奖金均分，获得多的贡献值越多，得到的奖金份数越多
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		width: 100vw;
		height: 100vh;
		.line{
			width: 100%;
			height: 1px;
			background-color: #eee;
		}
		.desc{
			.desc-cell{
				padding: 0 30rpx;
				margin-top: 20rpx;
				line-height: 40rpx;
				font-size: 28rpx;
			}
		}
	}
</style>
