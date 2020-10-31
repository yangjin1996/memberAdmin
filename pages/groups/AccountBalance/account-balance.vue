<template>
	<view>
		<view class="container">
			<view class="detail-cell bg-color-white" v-for="(item ,index) of 3" :keys="index">
				<view class="title text-color-3 margin-bottom-sm">新用户奖金</view>
				<view class="detail">
					<view class="to-detail">
						<text class="">已结算：</text>
						<text class="">2000元</text>
					</view>
					<view class="text-color-9 more" @click="toSettlementDetails">
						<text>查看明细</text>
						<text class="cuIcon-right margin-left-xs"></text>
					</view>
				</view>
				
				<view class="detail">
					<view class="to-detail">
						<text class="">待结算：</text>
						<text class="text-color">2000元</text>
					</view>
					<view class="text-color-9 more" @click="toSettlementDetails">
						<text>查看明细</text>
						<text class="cuIcon-right margin-left-xs"></text>
					</view>
				</view>
				
				<view class="detail">
					<view class="to-detail">
						<text class="">未付款：</text>
						<text class="text-finish">2000元</text>
					</view>
					<view class="text-color-9 more" @click="toSettlementDetails">
						<text>查看明细</text>
						<text class="cuIcon-right margin-left-xs"></text>
					</view>
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
		},
		methods:{
			toSettlementDetails(){
				uni.navigateTo({
					url:'../Settlement/settlement'
				})
			}
		}
	}
</script>

<style lang="scss">
	.container{
		width: 100%;
		margin-top: 30rpx;
		.detail-cell{
			width: 90%;
			margin: 0 auto;
			margin-bottom: 30rpx;
			padding: 30rpx 32rpx;
			border-radius: 16rpx;
			.title{
				font-size: 34rpx;
			}
			.detail{
				height: 60rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.to-detail{
					font-size: 28rpx;
				}
				.more{
					font-size: 24rpx;
				}
			}
		}
	}
</style>
