<template>
	<view class="journal-item" id="company">
		<scroll-view class="journal-img-group" scroll-x="true" @scroll="scroll" scroll-left="0">
			<view class="item-boxs-img" v-for="(item,index) in datas" :key="index" @click="onClickItem" :data-id="item.id">
				<image lazy-load="true" class="item-journal-img " :src="item.logo"></image>
				<view class="item-box">
					<view class="item-boxs-text">
						<view class="item-boxs-text-value">
							{{item.cases_num}}
						</view>
						<view class="item-boxs-text-title">
							课程
						</view>
					</view>
					<view class="item-boxs-text">
						<view class="item-boxs-text-value">
							{{item.project_num}}W
						</view>
						<view class="item-boxs-text-title">
							学生
						</view>
					</view>
				</view>
				<view class="item-box-title">
					{{item.name}}老师
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
		width: 250upx;
		height: 300upx;
		border-radius: 8px;
		text-align: center;
		align-items: center;
		margin-top: 25upx;
		margin-bottom: 25upx;
		margin-left: 15upx;
		margin-right: 15upx;
		background: rgba(255, 255, 255, 1);
		-moz-box-shadow:2px 2px 4px 3px rgba(191, 190, 190, 0.2);
		box-shadow: 2px 2px 4px 3px rgba(191, 190, 190, 0.2);
		background-size: 100% 100%;
		
	}

	.item-journal-img {
		width: 120upx;
		height: 120upx;
		border-radius: 50%;
		margin-top: 30upx;
		border: #DCDCDC 4upx solid;
	}

	.item-box {
		display: flex;
		width: 100%;
		margin-top: 10upx;
	}

	.item-boxs-text {
		width: 50%;
		padding: 6upx;
	}

	.item-boxs-text-value {
		text-align: center;
		font-size: 26upx;
		font-family: FZLTKHK--GBK1-0;
		font-weight: 400;
		color: rgba(0, 205, 118, 1);
		line-height: 32upx;
	}

	.item-boxs-text-title {
		font-size: 26upx;
		font-family: FZLTKHK--GBK1-0;
		font-weight: 400;
		color: rgba(217, 215, 215, 1);
		line-height: 32upx;
		text-align: center;
	}

	.item-box-title {
		font-size: 30upx;
		font-family: FZLTHK--GBK1-0;
		font-weight: 400;
		color:rgba(85,84,84,1);
		line-height: 32upx;
		padding: 10upx;
		text-align: center;
		width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>
