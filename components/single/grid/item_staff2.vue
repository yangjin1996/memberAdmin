<template>
	<view class="journal-item" id="company">
		<scroll-view class="journal-img-group" scroll-x="true" @scroll="scroll" scroll-left="0">
			<view class="item-boxs-img" v-for="(item,index) in datas" :key="index" @click="onClickItem" :data-id="item.id">
				<view class="item-boxs-item">
					<image lazy-load="true" class="item-journal-img " :src="item.avatar"></image>
					<view class="item-box-text">
						<view class="item-box-title">
							{{item.name}}
						</view>
						<view class="item-box-desc">
							{{item.job}}
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: 'company',
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
				//console.log(this.datas);
				var id = e.currentTarget.dataset.id;
				this.$emit('onclickitem', id);
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


	.journal-img-group {
		width: 100%;
		margin: 0;
		background-color: white;
		white-space: nowrap;
		padding: 10upx;
	}

	.item-boxs-img {
		display: inline-block;
		border-radius: 8px;
		border: #DCDCDC 1upx solid;
		text-align: center;
		align-items: center;
		margin: 6upx;
		width: 240upx;
		height: 120upx;
		background: rgba(255, 255, 255, 1);
		border: 1upx solid rgba(240, 239, 239, 1);
		border-radius: 8upx;

	}
	.item-boxs-item{
		display: flex;
		padding: 15upx;
	}
	.item-journal-img {
		width: 85upx;
		height: 85upx;
		border-radius: 50%;
		line-height: 100upx;
		align-items: center;
		border: #DFDFDF 1upx solid;
	}

	.item-box-text {
		line-height: 100upx;
		align-items: center;
	}

	.item-box {
		display: flex;
		width: 100%;
		margin-top: 10upx;
	}




	.item-box-title {
		padding: 10upx;
		text-align: left;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 32upx;
		font-family: "黑体";
		font-weight: 400;
		color: rgba(85, 84, 84, 1);
		line-height: 32upx;
	}

	.item-box-desc {
		text-align: left;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 24upx;
		font-family: "黑体";
		font-weight: 400;
		color: rgba(154, 152, 152, 1);
		line-height: 32upx;
	}
</style>
