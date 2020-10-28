<template>
	<view class="uni-list list-pd">
		<view class="uni-list-cell cell-pd">
			<view class="uni-uploader">
				<view class="uni-uploader-head" v-if="imageList.length != countIndex + 1">
					<view class="uni-uploader-title">点击可预览选好的图片</view>
					<view class="uni-uploader-info">{{ imageList.length }}/{{ countIndex + 1 }}</view>
				</view>
				<view class="uni-uploader-body">
					<view class="uni-uploader__files">
						<block v-for="(image, index) in imageList" :key="index">
							<view class="uni-uploader__file">
								<image class="uni-uploader__img" :src="image" :data-src="image" @tap="previewImage"></image>
								<image src="../../static/icon_del.png" class="upload_warp_img_view_del" @click="fileDel" :data-index="index"></image>
							</view>
						</block>
						<view class="uni-uploader__input-box" v-if="imageList.length != countIndex + 1">
							<image src="https://www.homeeyes.cn/app/images/icon_add_img.png" class="uni-uploader__input" @tap="chooseImage"></image>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
var sourceType = [['camera'], ['album'], ['camera', 'album']];
var sizeType = [['compressed'], ['original'], ['compressed', 'original']];
export default {
	name: 'uni-uploader',
	data() {
		return {
			imageList: [],
			title: 'choose/previewImage',
			sourceTypeIndex: 2,
			sourceType: ['拍照', '相册', '拍照或相册'],
			sizeTypeIndex: 1,
			sizeType: ['压缩', '原图', '压缩或原图'],
			count: [1, 2, 3, 4, 5, 6, 7, 8, 9]
		};
	},
	props: {
		countIndex: {
			type: Number,
			default: 8
		},
		imgSrc: {
			type: String,
			default: ''
		}
	},
	onLoad() {},
	mounted() {
		var that = this;
		// this.$nextTick(() => {
		// 	that.imagelist[0] = that.baseimg;
		// });
	},
	onUnload() {
		(this.imagelist = []),
			(this.sourceTypeIndex = 2),
			(this.sourceType = ['拍照', '相册', '拍照或相册']),
			(this.sizeTypeIndex = 1),
			(this.sizeType = ['压缩', '原图', '压缩或原图']),
			(this.countIndex = 8);
	},
	methods: {
		fileClick() {
			var upload = document.getElementById('upload_file');
			if (upload != undefined) {
				upload.click();
			}
		},
		updataImage: function(id) {},
		chooseImage: async function() {
			if (this.imageList.length === 9) {
				let isContinue = await this.isFullImg();
				console.log('是否继续?', isContinue);
				if (!isContinue) {
					return;
				}
			}
			let that=this;
			uni.chooseImage({
				sourceType: sourceType[this.sourceTypeIndex],
				sizeType: sizeType[this.sizeTypeIndex],
				count: this.imageList.length + this.count[this.countIndex] > 9 ? 9 - this.imageList.length : this.count[this.countIndex],
				success: res => {
					var tempFilesSize = res.tempFiles[0].size;
					if (tempFilesSize <= 2000000) {
						var tempFilePaths = res.tempFilePaths[0];
						that.imageList = that.imageList.concat(res.tempFilePaths);
						that.$emit('imagecall', that.imageList);
					} else {
						wx.showToast({
							title: '上传图片不能大于2M!',
							icon: 'none'
						});
					}

					
				}
			});
		},
		isFullImg: function() {
			return new Promise(res => {
				uni.showModal({
					content: '已经有9张图片了,是否清空现有图片？',
					success: e => {
						if (e.confirm) {
							this.imageList = [];
							res(true);
						} else {
							res(false);
						}
					},
					fail: () => {
						res(false);
					}
				});
			});
		},
		previewImage: function(e) {
			var current = e.target.dataset.src;
			uni.previewImage({
				current: current,
				urls: this.imageList
			});
		},
		fileDel: function(e) {
			var index = e.target.dataset.index;
			//总大小
			this.imageList.splice(index, 1);
		}
	}
};
</script>

<style scoped>
.uni-uploader__file {
	position: relative;
}

.upload_warp_img_view_del {
	width: 50upx;
	height: 50upx;
	position: absolute;
	top: 5upx;
	right: 5upx;
}
.uni-uploader-head {
	padding-top: 10upx;
	padding-left: 30upx;
	padding-right: 30upx;
}
</style>
