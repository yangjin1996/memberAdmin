<template>
	<view class="container bg-color-white" :style="{'height':screenHeight + 'px'}">
		<view class="header">
			<view class="title">筛选</view>
			<image class="back-icon" src="https://img02.mockplus.cn/idoc/ps/2020-10-28/285708a0-192c-11eb-ac86-07ce5f71c012.png" mode="" @click="back"></image>
		</view>
		<view class="dimension">
			<view class="title text-color-3">用户身份<text class="type margin-left-xs text-color-3">单选</text></view>
			<view class="screen-type">
				<view 
					class="tab margin-left margin-bottom-sm text-color-9" 
					v-for="(item,index) of userId" 
					:keys="index" 
					@click="changeCondition" 
					:data-type="item.conditionValue" 
					:class="{'on':item.conditionValue === condition}">
					{{item.text}}
				</view>
			</view>
		</view>
		
		<view class="submit-container">
			<view class="reset" @click="userOperate" data-type="reset">重置</view>
			<view class="submit on" @click="userOperate" data-type="submit">确定</view>
		</view>
		
		<view class="cu-load load-modal" v-show="loadModal">
			<image src="/static/logo.png" mode="aspectFit"></image>
			<view class="gray-text">加载中...</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				screenHeight:0,
				condition:'all',
				operate:'submit',
				criteria:'',
				loadModal: false,
				userId:[
					{
						conditionValue:'all',
						text:'全部'
					},
					{
						conditionValue:'ordinary',
						text:'普通用户'
					},
					{
						conditionValue:'anchor',
						text:'普通主播'
					},
					{
						conditionValue:'entrepreneurAnchor',
						text:'创业主播'
					},
					{
						conditionValue:'oneStar',
						text:'一星主播'
					},
					{
						conditionValue:'twoStar',
						text:'二星主播'
					},
					{
						conditionValue:'threeStar',
						text:'三星主播'
					},
					{
						conditionValue:'threeStarV',
						text:'三星主播 (贡献值权益)'
					},
				]
			};
		},
		onShow(){
			uni.getSystemInfo({
				success:(res) => {
					this.screenHeight = res.windowHeight
				}
			})
		},
		methods:{
			back(){
				uni.redirectTo({
					url:`../ConsumerList/consumer_list`
				})
			},
			changeCondition(e){
				this.condition = e.currentTarget.dataset.type
			},
			userOperate(e){
				this.operate = e.currentTarget.dataset.type;
				if(this.operate === 'reset'){
					this.condition = 'all'
				}else{
					this.loadModal = true;
					setTimeout(() => {
						this.loadModal = false;
						let url = this.condition === 'all' ? `../ConsumerList/consumer_list` : `../ConsumerList/consumer_list?type=${this.condition}`
						uni.redirectTo({
							url
						})
					}, 2000)
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		width: 100vw;
		height: 100vh;
		.header{
			width:100%;
			height:88rpx;
			background-color: #fff;
			display: flex;
			justify-content: center;
			align-items: center;
			position: fixed;
			right: 0;
			top:0;
			z-index: 999;
			border-bottom: 1px solid #eee;
			.title{
				font-size: 34rpx;
				font-weight: bold;
			}
			.back-icon{
				width: 30rpx;
				height:	30rpx;
				position: absolute;
				left: 30rpx;
			}
		}
		.dimension{
			.title{
				font-size: 30rpx;
				line-height: 120rpx;
				padding-left: 50rpx;
				.type{
					font-size: 24rpx;
				}
			}
			.screen-type{
				margin:0 30rpx;
				padding-bottom: 60rpx;
				display: flex;
				flex-wrap: wrap;
				.tab{
					min-width: 190rpx;
					height: 60rpx;
					padding:0 40rpx;
					font-size: 28rpx;
					border-radius: 30rpx;
					background-color: #f7f7f7;
					display: flex;
					justify-content: center;
					align-items: center;
				}
				.on{
					background-color: #E6F1FF;
					color: #258AFE;
				}
			}
		}
		.times-slot{
			.time{
				font-size: 30rpx;
				line-height: 150rpx;
				padding-left: 50rpx;
			}
			.select-time{
				padding:0 30rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.s-time,.e-time{
					width: 300rpx;
					height: 60rpx;
					font-size: 26rpx;
					border-radius: 30rpx;
					border: 1px solid #ccc;
					display: flex;
					justify-content: space-around;
					align-items: center;
					.img{
						width:26rpx;
						height:26rpx;
					}
				}
			}
		}
		.submit-container{
			width: 100%;
			height: 96rpx;
			padding: 0 30rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			position: fixed;
			bottom: 0;
			left: 0;
			border-top: 1px solid #eee;
			.reset,.submit{
				font-size: 32rpx;
				color: #333;
				width:47%;
				height:70rpx;
				border-radius: 35rpx;
				border: 1px solid #ccc;
				display: flex;
				justify-content: center;
				align-items: center;
			}
			.on{
				color: #fff;
				background-color: #258AFE;
				border: none;
				transition: all 1s;
			}
		}
	}
	
</style>
