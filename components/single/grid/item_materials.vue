<template>
	<view class="journal-item" id="company">
		<scroll-view class="journal-img-group" scroll-x="true" @scroll="scroll" scroll-left="0">
			<view class="item-boxs-img" v-for="(item,index) in datas" :key="index" @click="onClickItem" :data-id="item.id">
				<view class="item-boxs">
					<view class="item-box item-box-left">
						<image lazy-load="true" class="loading item-journal-img " :src="item.logo"></image>
					</view>
					<view class="item-box item-box-right">
						<view class="item-box-text">
							<view class="item-box-title">
								{{item.name}}
							</view>
							<view class="item-box-desc">
								{{item.content!=null?item.content:"暂无简介"}}
							</view>
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
		width: 420upx;
		height: 260upx;
		margin-top: 25upx;
		margin-bottom: 25upx;
		margin-left: 15upx;
		margin-right: 15upx;
		text-align: center;
		align-items: center;
		
		background: rgba(255, 255, 255, 1);
		-moz-box-shadow:2px 2px 4px 3px rgba(191, 190, 190, 0.2);
		box-shadow: 2px 2px 4px 3px rgba(191, 190, 190, 0.2);
		border-radius: 8px;
	}

	.item-boxs {
		width: 100%;
		display: flex;
		height: 100%;
	}

	.item-journal-img {
		width: 120upx;
		height: 120upx;
		border-radius: 50%;
		margin-left: auto;
		margin-right: auto;
		border: #DCDCDC 4upx solid;
	}

	.item-box {
		width: 50%;
		text-align: center;
		align-items: center;
		display: flex;
	}

	.item-box-left {
		background-size: 100% 100%;
		border-radius: 8px;
		/* background-image: url("https://www.homeeyes.cn/app/images/bg_company.png"); */
	}

	.item-box-title {
		font-size: 30upx;
		font-family: '黑体';
		font-weight: 400;
		color: rgba(85, 84, 84, 1);
		line-height: 32upx;
		padding: 10upx;
		text-align: left;
		width: 220upx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;

	}

	.item-box-desc {
		font-size: 30upx;
		font-family: FZLTHK--GBK1-0;
		font-weight: 400;
		color: rgba(85, 84, 84, 1);
		line-height: 32upx;
		padding: 10upx;
		text-align: left;
		width: 220upx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;

	}
</style>
