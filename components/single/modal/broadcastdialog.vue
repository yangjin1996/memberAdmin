<template>
	<view>
		<view class="uni-common-mt">
			<form @submit="formSubmit">
				<view class="uni-list-cell uni-collapse">
					<view class="uni-list-cell-navigate uni-navigate-bottom" v-bind:class="{ 'uni-active':isshowflows}" @click="trigerCollapse()">
						选择项目:<text class="uni-list-cell-value">{{baseflow>=0?flows[baseflow].name:"请选择项目"}}</text>
					</view>

					<view class="uni-collapse-content" v-bind:class="{'uni-active':isshowflows}">
						<view class="page-pd">

							<view class="uni-h1" v-for="(item,index) in flows" :key="index" :data-key="index" :data-index="item.id" @click="selectflows">{{item.name}}</view>

						</view>

					</view>
				</view>
				<view class="cu-form-group" v-if="updata>=0">
					<textarea id="inputcontent" :value="infos.content" :disabled="updata==-1" show-confirm-bar="true"  class="cu-form-textarea" @focus="bindTextAreaBlur" @confirm="bindTextAreaBlur" @blur="bindTextAreaBlur" placeholder="请输入播报详情" maxlength="-1"
					 placeholder-class='placeholder'></textarea>
				</view>
				<view class="uni-list list-pd">
					<view class="uni-list-cell cell-pd">
						<view class="uni-uploader">
							<view class="uni-uploader-head">
								<view class="uni-uploader-title">如果更改图片即替换，修改时请提前确认图片</view>
								<view class="uni-uploader-info">{{imageList.length}}/9</view>
							</view>
							<view class="uni-uploader-body">
								<view class="uni-uploader__files">
									<block v-for="(image,index) in broadcast.image"  :key="index" v-if="imageList.length==0">
										<view class="uni-uploader__file">
											<image class="uni-uploader__img" :src="image" :data-src="image" @tap="previewImage"></image>
										</view>
									</block>
									<block v-for="(image,index) in imageList" :key="index">
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
				<view class="addbroad_btn">
					<button formType="submit"  type="primary">立即提交</button>
				</view>
				<view class="addbroad_btn">
					<button @click="commitExit" type="primary">取消提交</button>
				</view>
			</form>
		</view>
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
				imageList: [],
				sourceTypeIndex: 2,
				sourceType: ['拍照', '相册', '拍照或相册'],
				sizeTypeIndex: 2,
				sizeType: ['压缩', '原图', '压缩或原图'],
				countIndex: 8,
				count: [1, 2, 3, 4, 5, 6, 7, 8, 9],
				imglist: [],
				modalName: null,
				isshowflows: false,
				selectindex: this.baseflow,
				infos: this.broadcast,
				fid: 0,
				content:""
			}
		},
		props: {
			flows: Array,
			baseflow:-1,
			updata: -1,
			broadcast: {}
		},
        watch: {
            infos(oldVal, newVal) {
               console.log(newVal);
            }
           
        },
		mounted() {
			var that = this;
			this.$nextTick(() => {
				console.log(that.broadcast);
				that.infos = that.broadcast;
				
			});
		},onLoad() {
			
		},
		onUnload() {
			this.imageList = [];
			this.infos = {};
			this.sourceTypeIndex = 2;
			this.sourceType = ['拍照', '相册', '拍照或相册'];
			this.sizeTypeIndex = 2;
			this.sizeType = ['压缩', '原图', '压缩或原图'];
			this.countIndex = 8;
			var msg = "1,2,3";

		},
		methods: {
			formSubmit:function(e){
				var that=this;
				setTimeout(function(){
					that.commitInfo()
				},200)
				
				 //console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
			},
			trigerCollapse: function(e) {
				this.isshowflows = !this.isshowflows;
			},
			selectflows: function(e) {
				console.log(e.currentTarget.dataset);
				var index = e.currentTarget.dataset.index;
				var key = e.currentTarget.dataset.key;
				var flows = this.flows;
				
				if (index > -1) {
					this.infos.fid = index;
					this.baseflow = key;
				} else {
					this.baseflow =0;
					this.infos.fid = flows[0].id;
				}
				this.$emit('selectflow', this.baseflow);
				
				this.isshowflows = false;
			},
			bindTextAreaBlur: function(e) {
				var value=e.detail.value;
				console.log(value);
				this.infos.content= value;
				
			},
			commitExit() {
				this.imageList=[];
				
				this.$emit('imagecall', false);
			},
			commitInfo() {
				
				let params = {
					pro_id: this.infos.pid,
					f_id: this.infos.fid,
					uid: this.infos.uid,
					bid:this.infos.bid,
					content: this.infos.content,
					image: this.imglist,
					type:this.updata
				}
				var that = this;
				console.log(params);
				this.$axios.post(this.umcons.serviceAddress.CREATE_BROADCAST, params, function(res) {
					console.log(res)
					that.$emit('imagecall', true);
					that.imageList=[];
					
				}, function(error) {
					console.log(error)
					that.util.showAlert("加载失败");
				});


			},
			chooseImage: async function() {
				if (this.imageList.length === 9) {
					let isContinue = await this.isFullImg();
					console.log("是否继续?", isContinue);
					if (!isContinue) {
						return;
					}
				}
				uni.chooseImage({
					sourceType: sourceType[this.sourceTypeIndex],
					sizeType: sizeType[this.sizeTypeIndex],
					count: 9,
					success: (res) => {
						let tempFilePaths = res.tempFilePaths;
						if (tempFilePaths.length) {
							this.imageList = this.imageList.concat(tempFilePaths);
							var imglist = new Array();;
							const fileManager = wx.getFileSystemManager();
							for (let i = 0, len = tempFilePaths.length; i < len; i++) {
								var mimage = tempFilePaths[i];
								var base64Image = "data:image/jpg;base64," + fileManager.readFileSync(mimage, 'base64');
								imglist[i] = base64Image;

							}
							this.imglist = imglist;

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
								this.imageList = [];
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
					urls: this.imageList
				})
			}
		}
	}
</script>

<style scoped>
	.uni-h1 {
		font-size: 0.85rem;
		font-weight: 100;
		border-bottom: solid #DCDCDC 1upx;

	}

	.cu-form-textarea {
		text-align: left;
		font-size: 0.85rem;
		padding: 0.2rem;
	}

	.addbroad_btn {
		padding: 0.5rem;
	}

	/* .cell-pd {
		padding: 22upx 30upx;
	}
 */
	.list-pd {
		margin-top: 50upx;
	}

	.uni-common-mt {
		background-color: #FFFFFF;
	}

	.uni-list-cell-value {
		margin-left: 1rem;
		margin-right: 1rem;
	}
</style>
