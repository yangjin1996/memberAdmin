<template>
	<view class="container">
		
		<view class="header">
			<view class="title">用户列表</view>
			<view class="user-info">
				<view class="img-icon" @click="search">
					<image class="img" src="https://img02.mockplus.cn/idoc/ps/2020-10-28/aed0dfd0-1929-11eb-ac86-07ce5f71c012.png" mode=""></image>
				</view>
				<view class="img-icon img-icons" @click="showModal" data-target="DrawerModalR">
					<image class="img" src="https://img02.mockplus.cn/idoc/ps/2020-10-28/aed12df0-1929-11eb-ac86-07ce5f71c012.png" mode=""></image>
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
				<view class="user-info text-color-3">用户昵称：</view>
				<view class="user-info-msg text-color-3">哈哈哈</view>
			</view>
			<view class="user-msg-cell">
				<view class="user-info text-color-3">用户账号：</view>
				<view class="user-info-msg text-color-3">12345678952</view>
			</view>
			<view class="user-msg-cell">
				<view class="user-info text-color-3">用户身份：</view>
				<view class="user-info-msg text-color-3">
					<text class="cuIcon-favorfill text-color margin-left-xs"></text>
					<text class="cuIcon-favorfill text-color margin-left-xs"></text>
					<text class="cuIcon-favorfill text-color margin-left-xs"></text>
				</view>
			</view>
			<view class="user-msg-cell">
				<view class="user-info text-color-3">主播关系邀请人：</view>
				<view class="user-info-msg text-color-3">张三</view>
			</view>
			<view class="user-msg-cell">
				<view class="user-info text-color-3">用户关系邀请人：</view>
				<view class="user-info-msg text-color-3">李四</view>
			</view>
			<view class="user-msg-cell">
				<view class="user-info text-color-3">邀请人用户数：</view>
				<view class="user-info-msg text-color-3">123</view>
			</view>
			<view class="user-msg-cell">
				<view class="user-info text-color-3">身份升级任务进度：</view>
				<view class="user-info-msg" :class="{'text-finish':true}">已完成</view>
			</view>
			<view class="user-msg-cell">
				<view class="user-info text-color-3">总贡献提成：</view>
				<view class="user-info-msg text-color-3">4526</view>
			</view>
			<view class="user-msg-cell">
				<view class="user-info text-color-3">本月贡献提成：</view>
				<view class="user-info-msg text-color-3">123</view>
			</view>
			<view class="uer-info-detail text-center text-color-9" @click="toDetail">
				查看详细信息<text class="cuIcon-right margin-left-xs"></text>
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
					// url:'../../groups/UserMsg/user_msg',
					url:'../../groups/unFinishMsg/un-finish-msg',
				});
			},
			search(){
				uni.navigateTo({
					url:'../../groups/searchUser/search-user',
				});
			},
			showModal(e) {
				// this.modalName = e.currentTarget.dataset.target
				uni.navigateTo({
					// url:'../../groups/UserMsg/user_msg',
					url:'../../groups/userScreen/user-screen',
				});
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
		width: 94%;
		margin: 0 auto;
		margin-top:30rpx;
		font-weight: bold;
		border-radius: 16rpx;
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
				font-size: 28rpx;
				position: absolute;
				right:20rpx;
				display: flex;
				align-items: center;
				.img-icon{
					width:32rpx;
					height:32rpx;
					overflow: hidden;
					.img{
						width:100%;
						height:100%;
					}
				}
				.img-icons{
					margin-left: 30rpx;
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
				font-size: 24rpx;
			}
		}
		
	}
</style>
