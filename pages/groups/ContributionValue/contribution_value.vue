<template>
	<view>
		<view class="top-container bg-color-a">
			<text class="text-color-white text-bold num">869</text>
			<view class="text-color-white my-num">我的贡献值<text class="cuIcon-info text-color-white icon" @click="descContribute"></text></view>
		</view>
		<view class="main-container bg-color-white">
			<view class="title text-color-3">团队贡献值</view>
			<view class="data-list">
				<view class="data-list-cell">
					<text class="nickname-c text-center">昵称</text>
					<text class="no text-center">账号</text>
					<text class="count text-center">贡献值（个）</text>
				</view>
				<view class="data-list-cell" v-for="(item,index) of 8" :keys="index">
					<text class="nickname-c text-center text-color-6">小进进</text>
					<text class="no text-center text-color-6">18169345423</text>
					<text class="count text-center text-color-6">12</text>
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
			descContribute(){
				uni.navigateTo({
					url:'../descContribute/desc-contribute'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.top-container{
		width: 100%;
		height: 336rpx;
		padding:100rpx 0;
		margin-bottom: 30rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		.num{
			font-size: 68rpx;
		}
		.my-num{
			font-size: 28rpx;
			position: relative;
			.icon{
				position: absolute;
				right: -30rpx;
				top: -12rpx;
			}
		}
	}
	.main-container{
		width: 100%;
		padding: 30rpx 0;
		.title{
			height: 100rpx;
			padding: 0 30rpx;
			font-size: 34rpx;
			line-height: 100rpx;
		}
		.data-list{
			.data-list-cell{
				padding: 0 40rpx;
				height: 60rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.nickname-c{
					width: 20%;
				}
				.no{
					width: 40%;
				}
				.count{
					width: 30%;
				}
			}
		}
	}
</style>
