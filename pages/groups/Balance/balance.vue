<template>
	<view class="container">
		<view class="msg-cart" @click="tobalanceDetail">
			<view class="balance">
				<text class="text-color-white title">账户余额 (元）</text>
				<view class="">
					<text class="text-color-white to-detail">查看余额</text>
					<text class="cuIcon-right margin-left-xs text-color-white"></text>
				</view>
			</view>
			<view class="money text-bold text-color-white">
				200.00
			</view>
			<view class="balance-type-box">
				<view class="balance-type1 text-center text-color-white">
					<text>可提现金额 (元）</text>
					<text class="text-bold">1235</text>
				</view>
				<view class="balance-type2 text-center text-color-white">
					<text>不可提现金额 (元）</text>
					<text class="text-bold">200</text>
				</view>
			</view>
		</view>
		<view class="submit bg-color text-color-white">提交</view>
		<view class="text-color-3 balance-detail text-center" @click="toSurplus">余额明细</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			tobalanceDetail(){
				uni.navigateTo({
					url:'../AccountBalance/account-balance'
				})
			},
			toSurplus(){
				uni.navigateTo({
					url:'../Surplus/surplus'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		width: 100vw;
		height: 100vh;
		.msg-cart{
			width: 90%;
			height: 320rpx;
			margin: 0 auto;
			margin-top: 30rpx;
			padding: 40rpx;
			border-radius: 24rpx;
			background-image: url('https://img02.mockplus.cn/idoc/ps/2020-10-29/b1881de0-19a8-11eb-96f2-7dbb36504253.png');
			background-size: 100% 100%;
			display: flex;
			flex-direction: column;
			.balance{
				display: flex;
				justify-content: space-between;
				.title{
					font-size: 28rpx;
				}
				.to-detail{
					font-size: 24rpx;
				}
			}
			.money{
				font-size: 50rpx;
				line-height: 110rpx;
			}
			.balance-type-box{
				height: 0;
				display: flex;
				flex: 1;
				justify-content: space-between;
				.balance-type1,.balance-type2{
					width: 50%;
					height: 100%;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
				}
			}
		}
		.submit{
			width: 80%;
			height: 88rpx;
			margin: 0 auto;
			margin-top: 100rpx;
			border-radius: 44rpx;
			font-size: 32rpx;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.balance-detail{
			font-size: 28rpx;
			line-height: 80rpx;
		}
	}
</style>
