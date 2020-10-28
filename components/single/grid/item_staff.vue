<template>
	<view class="journal-item" id="company">
		<scroll-view v-if="datas.length>0" class="journal-img-group" scroll-x="true" @scroll="scroll" scroll-left="0">
			<view class="item-boxs-img" v-for="(item,index) in datas" :key="index" @click="onClickItem" :data-id="item.id">
				<image class="item-journal-img " lazy-load="true" :src="item.avatar"></image>
				<view class="item-box-title">
					{{item.name}}
				</view>
				<view class="item-box-desc">
					{{item.job!=undefined?item.job:"未知"}}
				</view>
				<view class="item-box-btn" @click="callPhone" :data-phone="item.phone">
					联系<text class="text-white cuIcon-phone item-icon"></text>
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
			},callPhone: function(e) {
				let phone = e.currentTarget.dataset.phone;
				this.util.clickCallPhone(phone);
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
		border-top: solid 1px #DCDCDC;
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
		width: 220upx;
		height: 300upx;
		background: rgba(255, 255, 255, 1);
		border: 1upx solid rgba(240, 239, 239, 1);
		border-radius: 8upx;

	}

	.item-journal-img {
		width: 100upx;
		height: 100upx;
		border-radius: 50%;
		margin-top: 30upx;
		border: #DFDFDF 1upx solid;
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



	.item-box-title {

		padding: 10upx;
		text-align: center;
		width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 28upx;
		font-family: "黑体";
		font-weight: 400;
		color: rgba(85, 84, 84, 1);
		line-height: 32upx;
	}

	.item-box-desc {

		text-align: center;
		width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 24upx;
		font-family: "黑体";
		font-weight: 400;
		color: rgba(154, 152, 152, 1);
		line-height: 32upx;
	}

	.item-box-btn {
		width: 116upx;
		line-height: 40upx;
		background: rgba(0, 205, 118, 1);
		border-radius: 4upx;
		font-size: 24upx;
		font-family: FZLTKHK--GBK1-0;
		font-weight: 400;
		color: rgba(255, 255, 255, 1);
		align-items: center;
		margin-left: auto;
		margin-right: auto;
		text-align: center;
		margin-top: 10upx;
	}

	.item-icon {
		margin-left: 5upx;
	}
</style>
