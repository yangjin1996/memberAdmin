<template>
	<view class="container bg-color-white">
		<view class="header">
			<text>提现到</text>
			<view class="header-right" @click="toAcountList">
				<view class="cart-num">
					<text>123456789123456789</text>
					<image class="img margin-left-sm" src="../../../static/card.png" mode=""></image>
				</view>
				<text class="cuIcon-right margin-left"></text>
			</view>
		</view>
		<view class="money-box">
			<view class="">提现金额：</view>
			<view class="money text-bold">￥<input class="input" v-model="amount" type="text" value="" /></view>
			<view class="text-color-9 withdrawable">可提现余额：￥0.00 <text class="text-color-orange margin-left-xs">全部提现</text></view>
			<view class="text-color-9 service-charge">最小提现金额为 ¥10.00,手续费为0%</view>
		</view>
		<view class="user-operate margin-top-xl" :class="{'bg-color-orange':amount > 0}">提现</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				amount:''
			};
		},
		methods:{
			toAcountList(){
				uni.navigateTo({
					url:'../acountList/acountList'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		width: 100%;
		height: 100vh;
		padding: 0 20rpx;
		.header{
			height: 80rpx;
			padding: 0 20rpx;
			border-bottom: 1px solid #eee;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.header-right{
				display: flex;
				justify-content: space-between;
				align-items: center;
				.cart-num{
					display: flex;
					align-items: center;
					.img{
						width: 40rpx;
						height: 30rpx;
					}
				}
			}
		}
		.money-box{
			width: 100%;
			height: 320rpx;
			margin-top: 30rpx;
			padding: 30rpx;
			box-shadow: 0 0 6rpx 6rpx #f5f5f5;
			border-radius: 16rpx;
			.money{
				height: 120rpx;
				border-bottom: 1px solid #f5f5f5;
				display: flex;
				align-items: center;
				font-size: 60rpx;
				.input{
					width: 0;
					flex: 1;
					font-size: 60rpx;
				}
			}
			.withdrawable{
				font-size: 24rpx;
				height: 80rpx;
				line-height: 80rpx;
			}
			.service-charge{
				font-size: 20rpx;
			}
		}
		.user-operate{
			width: 100%;
			height: 80rpx;
			border-radius: 40rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			color: #fff;
			font-size: 32rpx;
			background-color: #ccc;
		}
	}
</style>
