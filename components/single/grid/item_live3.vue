<template>
	<scroll-view class="journal-img-group" scroll-x="true" @scroll="scroll" scroll-left="0">
		<view v-for="(item,index) in datas" :key="index" :data-index="index" class="journal-item-info" @click="onClickItem">
			<view class="journal-item-box">
				<image lazy-load="true" class="loading journal-avatar" :src="item.status==1?'https://www.homeeyes.cn/app/images/icon_online.png':'https://www.homeeyes.cn/app/images/icon_noline.png'"></image>
				<view class="journal-title">
					<view class="journal-text journal-name">{{item.name}}</view>
					<view class="journal-text journal-state">{{item.status==1?"在线":"离线"}}</view>
				</view>
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
		width: 88upx;
		height: 88upx;
		margin-right: 16upx;
		border-radius: 50%;
		margin-left: 25upx;
	}

	.journal-title {
		display: block;
		text-align: left;
	}

	.journal-img-group {
		width: 100%;
		margin: 0;
		padding: 0;
		height: 200upx;
		background-color: white;
		white-space: nowrap;

	}

	.journal-item-box {
		min-width: 300upx;
		height: 140upx;
		background: rgba(249, 249, 249, 1);
		border-radius: 8upx;
		align-items: center;
		display: flex;
		text-align: center;
	}

	.journal-item-info {
		display: inline-block;
		background-color: #FFFFFF;
		padding-left: 10upx;
		padding-right: 10upx;
		padding-top: 30upx;
		padding-bottom: 30upx;
	}

	.journal-text {

		font-size: 26upx;
		line-height: 30upx;
		font-family: FZLTKHK--GBK1-0;
		font-weight: 400;
		color: rgba(146, 145, 145, 1);
		text-align: left;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;

	}

	.journal-name {
		font-size: 30upx;
		font-family: '黑体';
		font-weight: 400;
		color: rgba(85, 84, 84, 1);
	}

	.journal-state {
		font-size: 26upx;
		font-family: FZLTKHK--GBK1-0;
		font-weight: 400;
		color: rgba(0, 205, 118, 1);
	}
</style>
