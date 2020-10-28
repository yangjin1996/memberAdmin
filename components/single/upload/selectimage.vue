<template>
	<view>
		
			<form>
				<view class="uni-list list-pd">
					<view class="uni-list-cell cell-pd">
						<view class="uni-uploader">
							<view class="uni-uploader-head">
								<view class="uni-uploader-title">点击可预览选好的图片</view>
								<view class="uni-uploader-info">{{imagelist.length}}/1</view>
							</view>
							<view class="uni-uploader-body">
								<view class="uni-uploader__files">
									<block v-for="(image,index) in imagelist" :key="index">
										<view class="uni-uploader__file">
											<image class="uni-uploader__img" :src="image" :data-src="image" @tap="previewImage"></image>
										</view>
									</block>
									<view class="uni-uploader__input-box">
										<view class="uni-uploader__input" @tap="chooseImage"></view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</form>
		
	</view>
</template>
<script>
	var sourceType = [
		['camera'],
		['album'],
		['camera', 'album']
	]
	var sizeType = [
		['compressed'],
		['original'],
		['compressed', 'original']
	]
	export default {
		data() {
			return {
				title: 'choose/previewImage',
				sourceTypeIndex: 2,
				sourceType: ['拍照', '相册', '拍照或相册'],
				sizeTypeIndex: 2,
				sizeType: ['压缩', '原图', '压缩或原图'],
				countIndex: 8,
				count: [1, 2, 3, 4, 5, 6, 7, 8, 9]
			}
		},props: {
			imagelist:[]
		},onLoad() {
			this.imagelist[0]=this.baseimg;
		},
		mounted() {
			var that=this;
			this.$nextTick(() => {
				that.imagelist[0]=that.baseimg;
			});
		},
		onUnload() {
			this.imagelist = [],
				this.sourceTypeIndex = 2,
				this.sourceType = ['拍照', '相册', '拍照或相册'],
				this.sizeTypeIndex = 2,
				this.sizeType = ['压缩', '原图', '压缩或原图'],
				this.countIndex = 8;
		},
		methods: {
			chooseImage: async function() {
				if (this.imagelist.length === 9) {
					let isContinue = await this.isFullImg();
					console.log("是否继续?", isContinue);
					if (!isContinue) {
						return;
					}
				}
				uni.chooseImage({
					sourceType: sourceType[this.sourceTypeIndex],
					sizeType: sizeType[this.sizeTypeIndex],
					count: 1,
					success: (res) => {
						let tempFilePaths=res.tempFilePaths;
						if(tempFilePaths.length){
							var imglist=new Array();
							const fileManager= wx.getFileSystemManager();
							let base64Image="data:image/jpg;base64,"+fileManager.readFileSync(tempFilePaths[0],'base64');
							let index= imglist.indexOf(base64Image);
							if(index!=-1){
								imglist.splice(index, 1);
							}else{
								imglist[imglist.length]=base64Image;
							}
							this.imagelist=imglist;
							this.$emit('images',imglist);
						}
						
					}
				})
			},
			isFullImg: function() {
				return new Promise((res) => {
					uni.showModal({
						content: "已经有9张图片了,是否清空现有图片？",
						success: (e) => {
							if (e.confirm) {
								this.imagelist = [];
								res(true);
							} else {
								res(false)
							}
						},
						fail: () => {
							res(false)
						}
					})
				})
			},
			previewImage: function(e) {
				var current = e.target.dataset.src
				uni.previewImage({
					current: current,
					urls: this.imagelist
				})
			}
		}
	}
</script>

<style scoped>
	@import url("../css/uni.css");

	.cell-pd {
		padding: 22upx 30upx;
	}

	.list-pd {
		margin-top: 10upx;
	}
</style>
