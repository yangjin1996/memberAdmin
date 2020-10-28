<template>
	<view class="journal-item" id="journal" >
		<scroll-view class="journal-img-group" scroll-x="true" @scroll="scroll" scroll-left="0"  >
			<view v-for="(item,index) in datas" :key="index" :data-id="item.id" class="journal-item-info" @click="onClickItem">
				<view class="journal-title">
					<image lazy-load="true" class="loading journal-avatar" :src="item.avatar!=null?item.avatar:basePhoto"></image>
					<view class="journal-text journal-position">{{item.position!=null?item.position:basejob}}</view>
					<view class="journal-text journal-author">{{item.name}}</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: 'journal',
		data() {
			return {
				old: {
					scrollTop: 0
				},
				basePhoto:"https://www.homeeyes.cn/app/images/boy.jpg"

			}
		},
		props: {
			datas: {},
			basejob: {
				type: String,
				default: ''
			}
		},
		methods: {
			scroll: function(e) {
				//console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			},
			onClickItem(e) {
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

	.journal-avatar {
		width: 100upx;
		height: 100upx;
		margin-top: 20upx;
		border-radius: 50%;
	}

	.journal-title {
		width: 100%;
		display: block;
		text-align: center;
		
	}

	.journal-img-group {
		width: 100%;
		margin: 0;
		background-color: white;
		white-space: nowrap;
		
	}

	.journal-item-info{
		display: inline-block;
		width: 160upx;
		text-align: center;
		background-color: #FFFFFF;
		padding: 10upx;
	}
	.journal-text{
		font-size: 26upx;
		line-height: 30upx;
		font-family: FZLTKHK--GBK1-0;
		font-weight: 400;
		color: rgba(146, 145, 145, 1);
		text-align: center;
		padding: 2upx;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.journal-author{
		font-size: 30upx;
		line-height: 32upx;
	}
</style>
