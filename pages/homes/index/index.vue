<template>
	<view class="container">
		<view class="header">
			<view class="title">会员管理系统</view>
			<view class="user-info" @click="logout">
				<view class="menber-avatar">
					<image class="avatar" src="../../../static/card.png" mode=""></image>
				</view>
				<view class="nickname">小进进</view>
			</view>
		</view>
		<view class="contents"><cu-grid :datas="cuIconList" :cols="3" :customStyle="customStyle" @onclick="navigate"></cu-grid></view>
	</view>
</template>

<script>
	import Util from '../../../common/util.js';
	// import CommonHeaders from '../../../components/custom_components/common_headers.vue'
	import cuGrid from '../../../components/single/grid/cu-grid.vue';
	import cuBar from '../../../components/single/bar/cu-bar.vue';
	
	export default {
		components: {
			// CommonHeaders,
			cuGrid,
			cuBar
		},
		data() {
			return {
				customStyle:{
					'width':'150rpx',
					'height':'150rpx',
					'border-radius':'50%',
					'background-color':'red'
				},
				cuIconList: [
					{
						badge: 0,
						name: '数据概览',
						url:'../../groups/DataOverview/data_overview'
					},
					{
						badge: 0,
						name: '用户列表',
						url:'../../groups/ConsumerList/consumer_list'
					},
					{
						badge: 0,
						name: '订单列表',
						url:'../../groups/UserList/OrderList/order_list'
					},
					{
						badge: 0,
						name: '贡献值',
						url:'../../groups/ContributionValue/contribution_value'
					},
					{
						badge: 0,
						name: '余额提现',
						url:'../../groups/Balance/balance'
					}
				],
			};
		},
		methods:{
			navigate(e){
				e = parseInt(e);
				uni.navigateTo({
					url:this.cuIconList[e].url
				});
			},
			logout(e){
				Util.showModal({
					content: '确定要退出登录吗？',
					success: (res) => {
						if (res.confirm) {
							uni.redirectTo({
								url:'../../groups/Login/login'
							})
						}
					}
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.header{
		width:100%;
		height:100rpx;
		background-color: #f5f5f5;
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		left: 0;
		top:0;
		z-index: 999;
		.title{
			font-size: 34rpx;
		}
		.user-info{
			position: absolute;
			right:20rpx;
			display: flex;
			align-items: center;
			.menber-avatar{
				width:76rpx;
				height:76rpx;
				border-radius: 50%;
				overflow: hidden;
				.avatar{
					width:100%;
					height:100%;
				}
			}
			.nickname{
				margin-left: 20rpx;
			}
		}
	}
	.custom-style{
		color: red;
	}
	
</style>
