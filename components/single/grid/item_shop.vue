<template>
	<view class="grid col-2 ">
		<view v-for="(item,index) in datas" :key="index" class="grid-item-box" @click="onClickItem" :data-index="index">
			<view class="grid-item">
				<image class="case-image" lazy-load="true" :src="item.image"></image>
				<view class="case-text">
					<view class='text-grey case-text-title'>{{item.name}}</view>
					<view class='text-gray case-text-desc'>
						￥{{item.price}}
					</view>
				</view>
				
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		name: 'journal',
		data() {
			return {

			}
		},
		props: {
			datas: {},
			showbtn: true
		},
		methods: {
			onClickItem(e) {
				//console.log(this.datas);
				var index = e.currentTarget.dataset.index;
				this.$emit('onclickitem', index);
			},
			previewImage: function(e) {
				var current = e.target.dataset.src;
				var imgs = this.datas.image;
				uni.previewImage({
					current: current,
					urls: imgs
				})
			}

		}
	}
</script>
<!-- StarbbUI -->
<style scoped>
	.grid {
		background-color: #FFFFFF;
		padding: 10upx;
	}
	.grid-item-box{
		padding: 10upx;
	}
	.grid-item {
		
		background: rgba(255, 255, 255, 1);
		border: 1px solid rgba(240, 239, 239, 1);
		border-radius: 8px;
	}

	.case-image {
		height: 245upx;
		border-radius: 8px 8px 0px 0px;
	}

	.cu-card {
		margin-top: 2upx;
	}
	.case-text{
		padding: 10upx;
	}
	.case-text-title {
		padding-top: 10upx;
		padding-bottom: 10upx;
		font-size: 30upx;
		color: rgba(85, 84, 84, 1);
		font-family: "黑体";
		font-weight: 400;
		line-height: 32upx;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.case-text-desc {
		padding: 2upx;
		font-size: 26upx;
		font-family: "黑体";
		font-weight: 600;
		color: rgba(254, 87, 87, 1);
		line-height: 30upx;
		
	}
</style>
