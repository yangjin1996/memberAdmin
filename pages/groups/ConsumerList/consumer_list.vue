<template>
	<view class="container">
		
		<view class="header">
			<view class="title">用户列表</view>
			<view class="user-info">
				<view class="img-icon" @click="search">
					<image class="img" src="../../../static/card_front.png" mode=""></image>
				</view>
				<view class="img-icon img-icons" @click="showModal" data-target="DrawerModalR">
					<image class="img" src="../../../static/card_front.png" mode=""></image>
				</view>
			</view>
		</view>
		
		<view class="cu-modal drawer-modal justify-end" :class="modalName=='DrawerModalR'?'show':''"  @tap="hideModal">
			<view class="cu-dialog basis-lg" @tap.stop="" style="width:80vw;height:100vh">
				<view class="cu-list menu text-left">
					<view class="cu-item arrow" v-for="(item,index) in 2" :key="index">
						<view class="content">
							<view>Item {{index +1}}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="user-container">
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
			<view class="user-msg-cell">
				<view class="user-info">本月贡献分润：</view>
				<view class="user-info-msg">123</view>
			</view>
			<view class="uer-info-detail text-right text-grey" @click="toDetail">
				查看详细信息
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				modalName: null
			};
		},
		methods:{
			toDetail(){
				uni.navigateTo({
					url:'../../groups/UserMsg/user_msg'
				});
			},
			search(){
				console.log('search')
			},
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			bindDateChange: function(e) {
				this.date = e.target.value
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
	
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		margin-top:30rpx;
		font-weight: bold;
		background-color: #fff;
		.header{
			width:92%;
			height:80rpx;
			background-color: #fff;
			display: flex;
			justify-content: center;
			align-items: center;
			position: fixed;
			right: 0;
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
				.img-icon{
					width:60rpx;
					height:60rpx;
					border-radius: 50%;
					overflow: hidden;
					.img{
						width:100%;
						height:100%;
					}
				}
				.img-icons{
					margin-left: 20rpx;
				}
			}
		}
		.user-container{
			padding:30rpx 20rpx;
			.user-msg-cell{
				display: flex;
				align-items: center;
				line-height: 42rpx;
				.user-info{
					line-height: 60rpx;
					width:300rpx;
				}
			}
			.uer-info-detail{
				margin-top:60rpx;
				margin-bottom:20rpx;
			}
		}
		
	}
</style>
