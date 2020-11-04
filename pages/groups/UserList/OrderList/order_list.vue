<template>
	<view class="container">
		<view class="order-data">
			<view class="order-data-cell bg-color-a">
				<view class="text-left order-price text-color-white">订单金额</view>
				<view class="data-detail">
					<view class="order-price-left">
						<text class="num text-color-white text-bold">1234</text>
						<text class="text text-color-white">今日</text>
					</view>
					<view class="order-price-right">
						<text class="num text-color-white text-bold">258</text>
						<text class="text text-color-white">昨日</text>
					</view>
				</view>
				
			</view>
			<view class="order-data-cell bg-color-b">
				<view class="text-left order-price text-color-white">订单金额</view>
				<view class="data-detail">
					<view class="order-price-left">
						<text class="num text-color-white text-bold">1234</text>
						<text class="text text-color-white">今日</text>
					</view>
					<view class="order-price-right">
						<text class="num text-color-white text-bold">258</text>
						<text class="text text-color-white">昨日</text>
					</view>
				</view>
			</view>
		</view>
		<view class="">
			<view class="order-screen">
				<view class="order-text text-bold">订单</view>
				<view class="screen-icon">
					<image class="icon-img" @click="toOrderSearch" src="https://img02.mockplus.cn/idoc/ps/2020-10-28/36b14f10-192b-11eb-ac86-07ce5f71c012.png" mode=""></image>
					<image class="icon-img icon-imgs" @click="toOrderScreen" src="https://img02.mockplus.cn/idoc/ps/2020-10-28/36b17621-192b-11eb-ac86-07ce5f71c012.png" mode=""></image>
				</view>
			</view>
			<switchTab @switchTab="switchTab"></switchTab>
			<view class="order-detail-container">
				<view class="order-detail-list margin-bottom" v-for="(item,index) of 2" :keys="index">
					<view class="user-msg-cell" v-for="(item,index) of userMsgList" :keys="index">
						<view class="user-info text-color-3">{{item.definition}}</view>
						<view class="user-info-msg text-color-3" v-if="!!item.isStar">
							<text class="cuIcon-favorfill text-color margin-left-xs" v-for="(item,index) of item.isStar" :keys="index"></text>
						</view>
						<view class="user-info-msg" :class="{'text-finish':item.finish}" v-else>{{item.value}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import switchTab from '../../../../components/custom_components/switch_tab.vue';
	export default {
		components: {
			switchTab
		},
		data() {
			return {
				modalName: null,
				userMsgList:[
					{
						definition:'商品名称：',
						value:'哈哈哈'
					},
					{
						definition:'商品数量：',
						value:'258'
					},
					{
						definition:'用户昵称：',
						value:'小进进'
					},
					{
						definition:'用户账号：',
						value:'25585556558855'
					},
					{
						definition:'订单创建时间：',
						value:'2020-01-06'
					},
					{
						definition:'订单支付时间：',
						value:'2020-02-22'
					},
					{
						definition:'订单状态：',
						value:'已完成'
					},
					{
						definition:'提成获取人：',
						value:'小进进'
					},
					{
						definition:'当前身份：',
						value:'小进进',
						isStar:4
					},
					{
						definition:'提成类型及金额：',
						value:'55555',
						subMenu:[
							'111111',
							'222222',
							'333333'
						]
					},
				]
			};
		},
		methods:{
			switchTab(e){
				console.log(e)
			},
			toOrderScreen(){
				uni.redirectTo({
					url:'../../orderScreen/order-screen'
				})
			},
			toOrderSearch(){
				uni.navigateTo({
					url:'../../searchUser/search-user?type=order'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		.order-data{
			background-color: #fff;
			padding: 0 10rpx;
			height:246rpx;
			display: flex;
			justify-content: space-around;
			align-items: center;
			border-top: 1px solid #eee;
			.order-data-cell{
				width: 46%;
				height: 80%;
				padding: 20rpx 40rpx;
				border-radius: 16rpx;
				background-color: red;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				.order-price{
					width: 100%;
					font-size: 28rpx;
				}
				.data-detail{
					width: 100%;
					height: 0;
					padding-top: 20rpx;
					display: flex;
					flex: 1;
					justify-content: space-between;
					align-items: center;
					.order-price-left,.order-price-right{
						height: 100%;
						display: flex;
						flex-direction: column;
						justify-content: space-around;
						.num{
							font-size: 36rpx;
							font-weight: bold;
						}
						.text{
							font-size: 24rpx;
						}
					}
				}
			}
		}
		.order-screen{
			height: 100rpx;
			padding:40rpx;
			margin-top: 30rpx;
			background-color: #fff;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.order-text{
				font-size: 34rpx;
			}
			.screen-icon{
				.icon-img{
					width:32rpx;
					height:32rpx;
				}
				.icon-imgs{
					margin-left:20rpx;
				}
			}
		}
		.order-detail-container{
			padding:40rpx 20rpx;
			background-color: #fff;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			.order-detail-list{
				width:95%;
				padding:30rpx 20rpx;
				border-radius: 20rpx;
				box-shadow: 0 0 4rpx 4rpx #f5f5f5;
				.user-msg-cell{
					height: 60rpx;
					display: flex;
					.user-info,.user-info-msg{
						line-height: 50rpx;
					}
					.user-info{
						width: 40%;
					}
				}
			}
		}
	}
</style>
