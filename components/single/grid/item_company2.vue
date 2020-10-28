<template>
	<view>
		<view class="item-content" v-for="(item,index) in datas" :key="index" @click="onClickItem" :data-id="item.id">

			<view class="cu-item ">
				<view class="cu-avatar radius lg" v-bind:style="{backgroundImage:'url('+item.logo+')'}">
				</view>
				<view class='content'>
					<view class="content-text content-title">
						{{item.name}}
					</view>
					<view class='content-text text-gray text-sm' v-if="item.cases_num!=null">
						<text class="content-text-sm">案例：{{item.cases_num}}</text><text class="content-text-sm">工地：{{item.project_num}}</text>
					</view>
					<view class='content-text text-gray text-sm' v-if="item.content!=null">
						{{item.content}}
					</view>


				</view>
			</view>

			<image lazy-load="true" class="loading content-image" :src="item.image"></image>
			<view class='content-text-address'>
				<text class='cuIcon-locationfill text-white'></text><text class="text-address">{{item.address!=null?item.address:"暂未获取"}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'cu-list',
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
		width: 250upx;
		height: 320upx;
		border-radius: 8px;
		border: #DCDCDC 1upx solid;
		text-align: center;
		align-items: center;
		margin: 6upx;
		background-size: 100% 100%;
		background-image: url('https://www.homeeyes.cn/app/images/bg_company.png');
	}

	.item-journal-img {
		width: 120upx;
		height: 120upx;
		border-radius: 50%;
		margin-top: 30upx;
		border: #00CD76 4upx solid;
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
		font-size: 26upx;
		font-family: FZLTKHK--GBK1-0;
		font-weight: 400;
		color: rgba(217, 215, 215, 1);
		line-height: 32upx;
		text-align: center;
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
		color: #FFFFFF;
		line-height: 32upx;
		padding: 10upx;
		text-align: center;
		width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;

	}


	.text-address {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		width: 100%;
		margin-left: 10upx;
	}

	.cu-list.menu>.cu-item .content {
		line-height: 1.2em;
	}


	.content-image {
		height: 340upx;
		border-radius: 8upx;
		width: 100%;
		border: solid 1px #EDEDED;
	}

	.item-content {
		text-align: center;
		padding: 25upx;
		display: block;
		position: relative;
		background-color: #FFFFFF;
		margin-bottom: 1upx;
	}

	.cu-item {
		padding-top: 10upx;
		padding-bottom: 28upx;
		background-color: #FFFFFF;
		display: flex;
		align-items: center;
		text-align: left;
		position: relative;
	}

	.content-text-sm {
		margin-right: 20upx;
		font-size: 24upx;
		font-family: FZLTKHK--GBK1-0;
		font-weight: 400;
		color: rgba(154, 152, 152, 1);
		line-height: 32upx;
	}

	.content-title {
		font-size: 36upx;
		font-family: FZLTHK--GBK1-0;
		font-weight: 400;
		color: rgba(85, 84, 84, 1);
		line-height: 32px;
	}

	.content {
		margin-left: 37upx;
	}

	.content-text-address {
		position: absolute;
		bottom: 30upx;
		left: 24upx;
		right: 24upx;
		background: rgba(0, 0, 0, 0.2);
		padding-left: 20upx;
		line-height: 50upx;
		border-radius: 0px 0px 8px 8px;


	}

	.text-address {
		font-size: 26upx;
		font-family: FZLTKHK--GBK1-0;
		font-weight: 400;
		color: rgba(255, 255, 255, 1);
		line-height: 32upx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		width: 100%;
	}
</style>
