<template>
	<view class="container">
		<view class="order-cell bg-color-white" v-for="(item,index) of 2" :keys="index">
			<view class="buyer-info">
				<view class="text-color-3 info">
					张三<text class="phone-number text-color-9 margin-left-sm">18169345423</text>
				</view>
				<view class="text-color-9 order-time">
					订单支付时间：2020-10-17 20:28:17
				</view>
			</view>
			<view class="order-list margin-bottom-sm">
				<view class="order-list-cell margin-bottom-sm" v-for="(item,index) of 2" :keys="index">
					<image class="img" src="../../../static/card.png" mode=""></image>
					<view class="order-info margin-left-sm">
						<view class="title text-color-3">
							特浓速溶咖啡粉特浓速溶咖啡粉特浓速溶咖啡粉特浓速溶咖啡粉...
						</view>
						<view class="text-right text-color-9 goods-num">X1</view>
					</view>
				</view>
				<view class="order-act text-color-3">
					<text>实付金额</text>
					<text>200元</text>
				</view>
				<view class="new-user text-color-3">
					<text>新用户奖金</text>
					<text class="text-finish">20元</text>
				</view>
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
	.order-cell{
		width: 90%;
		margin: 0 auto;
		margin-top: 30rpx;
		border-radius: 16rpx;
		.buyer-info{
			width: 100%;
			height: 128rpx;
			padding: 10rpx 32rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			border-bottom: 1px solid #eee;
			.info{
				font-size: 28rpx;
				.phone-number{
					font-size: 24rpx;
				}
			}
			.order-time{
				font-size: 24rpx;
			}
		}
		.order-list{
			padding: 30rpx 0 20rpx 0;
			.order-list-cell{
				width: 100%;
				padding: 0 30rpx;
				display: flex;
				justify-content: space-between;
				.img{
					width: 150rpx;
					height: 150rpx;
					border-radius: 12rpx;
				}
				.order-info{
					width: 0;
					height: 150rpx;
					padding: 10rpx 0;
					display: flex;
					flex: 1;
					flex-direction: column;
					justify-content: space-between;
					.title{
						font-size: 26rpx;
						overflow:hidden; 
						text-overflow:ellipsis;
						display:-webkit-box; 
						-webkit-box-orient:vertical;
						-webkit-line-clamp:2; 
					}
					.goods-num{
						font-size: 24rpx;
					}
				}
			}
			.order-act,.new-user{
				font-size: 26rpx;
				line-height: 60rpx;
				padding: 0 30rpx;
				display: flex;
				justify-content: space-between;
			}
		}
	}
</style>
