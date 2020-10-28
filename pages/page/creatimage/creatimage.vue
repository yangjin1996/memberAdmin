<template>
	<view class="container">
		<view class="contents">
			<canvas class="page-content" canvas-id="shareCanvas" style="width:100%;" :style="{ height: height + 'px' }"></canvas>
			
		</view>
		<view class="page-bottom flex text-center">
			<!-- <button class="cu-btn bg-orange" @tap="selectIcon">选择图标</button>
			<button class="cu-btn bg-orange" @tap="creatQrcode">点击生成</button> -->
			<button class="cu-btn block bg-orange" @tap="saveImage">保存图库</button>
		</view>
	</view>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import tools from '@/util/promise.js';
export default {
	computed: {
		...mapState(['hasLogin', 'forcedLogin', 'userinfo'])
	},
	components: {  },
	data() {
		return {
			ifShow: false,
			val: '', // 要生成的二维码值
			size: 320, // 二维码大小
			unit: 'upx', // 单位
			background: '#b4e9e2', // 背景色
			foreground: '#309286', // 前景色
			pdground: '#32dbc6', // 角标色
			icon: '', // 二维码图标
			iconsize: 40, // 二维码图标大小
			lv: 3, // 二维码容错级别 ， 一般不用设置，默认就行
			onval: false, // val值变化时自动重新生成二维码
			loadMake: true, // 组件加载完成后自动生成二维码
			src: '', // 二维码生成后的图片地址或base64
			uid: 0,
			dataid: 0,
			height: this.DevHeight
		};
	},onShareAppMessage: function(res) {
		if (res.from === 'button') {
			// 来自页面内分享按钮
			console.log(res.target);
		}
		let params="token="+this.userinfo.uid+"&id="+this.dataid+"&type="+this.type;
		return this.controller.getSharePage(params);
	},
	onLoad(prop) {
		this.dataid=prop.id;
		this.type=prop.type;
	},
	onShow() {
		
		this.onInit();
		
		
	},
	methods: {
		...mapMutations(['logout', 'login', 'loginsoure']),
		onInit:function(){
			const url ="https://zs.homeeyes.cn/"+this.umcons.serviceAddress.ACCESS_TOKEN;
			let scene='';
			if (this.type == 0) {
				scene = 'id=' + this.dataid + '&token=' + this.userinfo.uid + '&type=0';
				
			} else {
				scene = 'id=' + this.dataid + '&token=' + this.userinfo.uid + '&type=1';
				
			}
			let params={
			  page: 'pages/discount/discount_detail',
			  scene: scene
			}
			uni.request({
			    url: url, //仅为示例，并非真实接口地址。
			    data: params,
			    method: "POST",
			    header: {
			    	"Content-Type": "application/x-www-form-urlencoded"
			    },
			    dataType: 'arraybuffer',
			    success: (res) => {
					var data=res.data;
					console.log(data);
					//var base64 = uni.arrayBufferToBase64(data)
					var img='data:image/png;base64,'+data;
					this.initImage(img);
			    }
			});
		},
		initImage: function(img) {
			let that = this;
			const wxGetImageInfo = tools.promisify(uni.getImageInfo);
			Promise.all([
				wxGetImageInfo({
					src: 'http://www.homeeyes.cn/app/images/startwindow.jpg'
				})
			]).then(res => {
				uni.getSystemInfo({
					success: function(e) {
						console.log(e);
						let width = e.windowWidth;
						let height = e.screenHeight;
						let topheight = 400;
						const ctx = uni.createCanvasContext('shareCanvas');
						// 底图
						ctx.drawImage(res[0].path, 0, 0, width, height);
						// 文字内容
						ctx.setTextAlign('center'); // 文字居中
						ctx.setFillStyle('#000000'); // 文字颜色：黑色
						ctx.setFontSize(22); // 文字字号：22px
						ctx.fillText('都市之佳', width / 2, topheight);
						console.log(img);
						// 小程序码
						const qrImgSize = 140;
						ctx.drawImage(img, (width - qrImgSize) / 2, topheight+15 , qrImgSize, qrImgSize);
						ctx.stroke();
						ctx.draw();
					}
				});
			});
		},
		saveImage: function() {
			const wxCanvasToTempFilePath = tools.promisify(uni.canvasToTempFilePath);
			const wxSaveImageToPhotosAlbum = tools.promisify(uni.saveImageToPhotosAlbum);
			wxCanvasToTempFilePath(
				{
					canvasId: 'shareCanvas'
				},
				this
			)
				.then(res => {
					return wxSaveImageToPhotosAlbum({
						filePath: res.tempFilePath
					});
				})
				.then(res => {
					wx.showToast({
						title: '已保存到相册'
					});
				});
		},
		ifQrcode() {
			this.ifShow = !this.ifShow;
		},
		selectIcon() {
			let that = this;
			uni.chooseImage({
				count: 1, //默认9
				sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				sourceType: ['album'], //从相册选择
				success: function(res) {
					that.icon = res.tempFilePaths[0];
					setTimeout(() => {
						that.creatQrcode();
					}, 100);
					// console.log(res.tempFilePaths);
				}
			});
		}
	}
};
</script>

<style scoped>
.page-bottom button {
	margin-left: 10upx;
	margin-right: 10upx;
}
.page-bottom {
	padding: 20upx;
}
.qrcode-box {
	margin-right: auto;
	margin-left: auto;
}
.qrcode-boxs {
	text-align: center;
	position: absolute;
	bottom: 60upx;
	left: 0;
	right: 0;
	display: flex;
}
.cu-btn{
	width: 100%;
}
</style>
