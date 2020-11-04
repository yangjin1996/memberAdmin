<template>
	<view class="container">
		<view class="user-info">
			<view class="user-msg">
				<image class="user-avatar" src="../../../static/card.png" mode=""></image>
				<view class="user-nickname">
					<view class="nickname text-color-white">小进进</view>
					<view class="leval bg-color-white">
						<image class="leval-icon" src="https://img02.mockplus.cn/idoc/ps/2020-10-29/18a885f0-19b3-11eb-96f2-7dbb36504253.png" mode=""></image>
						<view class="leval-text text-color">三星主播</view>
					</view>
				</view>
			</view>
			<view class="logout-btn text-color" @click="logout">退出登录</view>
			<view class="today-data">
				<view class="left-box">
					<view class="title text-center text-color-3">GMV</view>
					<view class="data-detail">
						<view class="data-detail-row">
							<text class="text-color-6 text">今日</text>
							<text class="number text-color-orange text-bold">360</text>
						</view>
						<view class="data-detail-row">
							<text class="text-color-6 text">累计</text>
							<text class="number text-color text-bold">859</text>
						</view>
					</view>
				</view>
				<view class="middle-line">
					
				</view>
				<view class="right-box">
					<view class="title text-center text-color-3">提成</view>
					<view class="data-detail">
						<view class="data-detail-row">
							<text class="text-color-6 text">今日</text>
							<text class="number text-color-orange text-bold">360</text>
						</view>
						<view class="data-detail-row">
							<text class="text-color-6 text">累计</text>
							<text class="number text-color text-bold">859</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="contents"><cu-grid :datas="cuIconList" :cols="3" @onclick="navigate"></cu-grid></view>
	</view>
</template>

<script>
	import cuGrid from '../../../components/single/grid/cu-grid.vue';
	import cuBar from '../../../components/single/bar/cu-bar.vue';
	
	export default {
		components: {
			cuGrid,
			cuBar
		},
		data() {
			return {
				cuIconList: [
					{
						badge: 0,
						name: '数据概览',
						url:'../../groups/DataOverview/data_overview',
						bgUrl:'https://img02.mockplus.cn/idoc/ps/2020-10-29/8d720480-19ca-11eb-96f2-7dbb36504253.png'
					},
					{
						badge: 0,
						name: '用户列表',
						url:'../../groups/ConsumerList/consumer_list',
						bgUrl:'https://img02.mockplus.cn/idoc/ps/2020-10-29/8d71dd70-19ca-11eb-96f2-7dbb36504253.png'
					},
					{
						badge: 0,
						name: '订单列表',
						url:'../../groups/UserList/OrderList/order_list',
						bgUrl:'https://img02.mockplus.cn/idoc/ps/2020-10-29/8d007e00-19ca-11eb-96f2-7dbb36504253.png'
					},
					{
						badge: 0,
						name: '贡献值',
						url:'../../groups/ContributionValue/contribution_value',
						bgUrl:'https://img02.mockplus.cn/idoc/ps/2020-10-29/8d002fe0-19ca-11eb-96f2-7dbb36504253.png'
					},
					{
						badge: 0,
						name: '余额提现',
						url:'../../groups/Balance/balance',
						bgUrl:'https://img02.mockplus.cn/idoc/ps/2020-10-29/8d0056f0-19ca-11eb-96f2-7dbb36504253.png'
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
				this.$util.showModal({
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
	.container{
		.user-info{
			width:100%;
			height: 330rpx;
			margin-bottom: 120rpx;
			background-image: url('https://img02.mockplus.cn/idoc/ps/2020-10-29/73e34780-19b2-11eb-96f2-7dbb36504253.png');
			background-size: 100% 100%;
			position: relative;
			.user-msg{
				padding:40rpx 30rpx;
				display: flex;
				.user-avatar{
					width: 120rpx;
					height: 120rpx;
					border-radius: 50%;
					border: 1px solid #fff;
				}
				.user-nickname{
					padding:10rpx;
					margin-left: 20rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					.nickname{
						font-size: 34rpx;
					}
					.leval{
						width: 150rpx;
						height: 36rpx;
						padding:8rpx;
						border-radius: 18rpx;
						display: flex;
						justify-content: space-around;
						align-items: center;
						.leval-icon{
							width: 24rpx;
							height: 22rpx;
						}
						.leval-text{
							font-size: 22rpx;
						}
					}
				}
			}
			.logout-btn{
				width: 154rpx;
				height: 44rpx;
				border-radius: 22rpx 0 0 22rpx;
				background-color: #E6F1FF;
				display: flex;
				justify-content: center;
				align-items: center;
				position: absolute;
				right: 0;
				top: 48rpx;
			}
			.today-data{
				width:90%;
				height: 216rpx;
				padding: 40rpx 40rpx 30rpx 40rpx;
				border-radius: 16rpx;
				background-color: #fff;
				background-image: url('https://img02.mockplus.cn/idoc/ps/2020-10-29/73e25d20-19b2-11eb-96f2-7dbb36504253.png');
				background-size: 100% 100%;
				position: absolute;
				left: 5%;
				display: flex;
				justify-content: space-between;
				
				.left-box,.right-box{
					width: 45%;
					height: 100%;
					display: flex;
					flex-direction: column;
					.title{
						font-size: 30rpx;
					}
					.data-detail{
						width: 100%;
						height: 0;
						padding: 20rpx 20rpx 0 20rpx;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						flex: 1;
						.data-detail-row{
							display: flex;
							justify-content: space-between;
							.text{
								font-size: 24rpx;
							}
							.number{
								font-size: 34rpx;
							}
						}
					}
				}
				.middle-line{
					width: 1px;
					height: 100%;
					opacity: 0.1;
					background: linear-gradient(to bottom, #059DFF, #006DFF);
				}
			}
		}
	}
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
