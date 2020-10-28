<template>
	<view class="grid col-2">
		<view v-for="(item,index) in datas" :key="index" class="grid-item" @click="onClickItem" :data-index="index">
			<image class="loading case-image" lazy-load="true" :src="item.photo"></image>
			<view class='text-grey case-text-title'>{{item.title}}</view>
			<view class='text-gray case-text-desc'>
				距离结束还有<text class="text-size-32 text-end-day">{{item.desc}}</text>天
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
			datas: {}
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
	}

	.grid-item {
		padding: 10upx;
		background-color: #FFFFFF;
	}

	.case-image {
		height: 200upx;
		border-radius: 8upx;
	}

	.cu-card {
		margin-top: 2upx;
	}

	.case-text-title {
		padding-top: 10upx;
		padding-bottom: 10upx;
		font-size: 30upx;
		font-family: FZLTHK--GBK1-0;
		font-weight: 400;
		color: rgba(85, 84, 84, 1);
		line-height: 32upx;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.case-text-desc {
		padding: 2upx;
		font-size: 24upx;
		font-family: FZLTKHK--GBK1-0;
		font-weight: 400;
		color: rgba(154, 152, 152, 1);
		line-height: 32upx;
	}
	.text-end-day{
		color: #FF0000;
	}
</style>
