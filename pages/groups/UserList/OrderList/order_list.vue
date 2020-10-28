<template>
	<view class="container">
		<view class="order-data">
			<view class="order-data-cell">
				<text>订单金额</text>
				<text>今日：1234</text>
				<text>昨日：36549</text>
			</view>
			<view class="center-line"></view>
			<view class="order-data-cell">
				<text>订单金额</text>
				<text>今日：1234</text>
				<text>昨日：36549</text>
			</view>
		</view>
		<view class="">
			<view class="order-screen">
				<view class="order-text text-bold">订单</view>
				<view class="screen-icon">
					<image class="icon-img" src="../../../../static/icon_add_img.png" mode=""></image>
					<image class="icon-img icon-imgs" @click="showModal" data-target="DrawerModalR" src="../../../../static/icon_add_img.png" mode=""></image>
				</view>
			</view>
			
			<view class="cu-modal drawer-modal justify-end" :class="modalName=='DrawerModalR'?'show':''"  @tap="hideModal">
				<view class="cu-dialog basis-lg" @tap.stop="" :style="[{width:'80vw',height:'100vh'}]">
					<view class="cu-list menu text-left">
						<view class="cu-item arrow" v-for="(item,index) in 2" :key="index">
							<view class="content">
								<view>Item {{index +1}}</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			
			
			<switchTab @switchTab="switchTab"></switchTab>
			<view class="order-detail-container">
				<view class="order-detail-list">
					<view class="user-msg-cell">
						<view class="user-info">用户昵称：</view>
						<view class="user-info-msg">哈哈哈</view>
					</view>
					<view class="user-msg-cell">
						<view class="user-info">用户账号：</view>
						<view class="user-info-msg">12345678952</view>
					</view>
					<view class="user-msg-cell">
						<view class="user-info">用户身份：</view>
						<view class="user-info-msg">3星</view>
					</view>
					<view class="user-msg-cell">
						<view class="user-info">邀请人：</view>
						<view class="user-info-msg">张三</view>
					</view>
					<view class="user-msg-cell">
						<view class="user-info">邀请用户数：</view>
						<view class="user-info-msg">10000</view>
					</view>
					<view class="user-msg-cell">
						<view class="user-info">身份升级任务进度：</view>
						<view class="user-info-msg">已完成</view>
					</view>
					<view class="user-msg-cell">
						<view class="user-info">总贡献分润：</view>
						<view class="user-info-msg">4526</view>
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
			};
		},
		methods:{
			switchTab(e){
				console.log(e)
			},
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		.order-data{
			background-color: #fff;
			padding: 0 50rpx;
			margin-top: 40rpx;
			height:300rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.order-data-cell{
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
			}
			.center-line{
				width:4rpx;
				height:40%;
				background-color: #ddd;
			}
		}
		.order-screen{
			height: 100rpx;
			padding:40rpx;
			margin-top: 40rpx;
			background-color: #fff;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.screen-icon{
				.icon-img{
					width:60rpx;
					height:60rpx;
				}
				.icon-imgs{
					margin-left:20rpx;
				}
			}
		}
		.order-detail-container{
			padding:40rpx 20rpx 80rpx 20rpx;
			background-color: #fff;
			display: flex;
			justify-content: center;
			align-items: center;
			.order-detail-list{
				background-color: #f5f5f5;
				width:95%;
				padding:40rpx 20rpx;
				border-radius: 20rpx;
				.user-msg-cell{
					display: flex;
					.user-info,.user-info-msg{
						line-height: 50rpx;
					}
				}
			}
		}
	}
</style>
