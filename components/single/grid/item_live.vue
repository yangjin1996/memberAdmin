<template>
	<scroll-view class="journal-img-group" scroll-x="true" @scroll="scroll" scroll-left="0">
		<view v-for="(item,index) in datas" :key="index" :data-index="index" class="journal-item-info" @click="onClickItem">
			<view class="journal-title">
				<image lazy-load="true" class="loading journal-avatar" :src="item.photo"></image>
				<view class="journal-text journal-author">{{item.title}}</view>
			</view>
		</view>
	</scroll-view>
</template>

<script>
	export default {
		name: 'journal',
		data() {
			return {
				old: {
					scrollTop: 0
				}

			}
		},
		props: {
			datas: {}
		},
		methods: {
			scroll: function(e) {
				//console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			},
			onClickItem(e) {
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
			},
			openUrl: function(e) {
				var src = e.target.dataset.src;
				if (this.util.isExist(src)) {
					var url = '../pulicpage/webview/webview?url=' + src;
					uni.navigateTo({
						url
					});
				} else {
					var id = e.target.dataset.id;
				}


			}

		}
	}
</script>
<!-- StarbbUI -->
<style scoped>
	.journal-item {
		background-color: #FFFFFF;

	}

	.journal-avatar {
		width: 100%;
		height: 160upx;
		border-radius: 12upx;
	}

	.journal-title {
		width: 100%;
		display: block;
		text-align: center;

	}

	.journal-img-group {
		width: 100%;
		margin: 0;
		padding: 0;
		height: 220upx;
		background-color: white;
		white-space: nowrap;

	}

	.journal-item-info {
		display: inline-block;
		width: 160px;
		height: 100%;
		padding: 10upx;
		align-items: center;
		background-color: #FFFFFF;
	}

	.journal-text {

		font-size: 26upx;
		line-height: 30upx;
		font-family: FZLTKHK--GBK1-0;
		font-weight: 400;
		color: rgba(146, 145, 145, 1);
		text-align: center;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;

	}
</style>
