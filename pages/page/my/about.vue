<template>
	<view class="container" :style="[{ height: height==0?'100%':(height+'px')}]">
		
		<view class="page-images margin-top">
			<image class="page-image" src="https://www.homeeyes.cn/app/images/icon_logo.png"></image>
			<view class="page-text">浙家人和，整体装修就选浙家</view>
		</view>
		<view class="page-content">
		<view class="list-title-cell">
			<view class="title-cell">
				<view class="title-cell-title">
					公司地址
				</view>
				<view class="title-cell-desc desc-address">
					温州市鹿城区黎明西路海关大楼裙楼B幢二楼
				</view>
			</view>
			<view class="title-cell" >
				<view class="title-cell-title">
					公司官网
				</view>
				<view class="title-cell-desc" @click="clickWeb" data-web="http://www.chinazhejia.com">
					www.chinazhejia.com
				</view>
			</view>
			<view class="title-cell" >
				<view class="title-cell-title">
					客服电话
				</view>
				<view class="title-cell-desc" @click="clickCallPhone" data-phone="057788879777">
					0577-88879777
				</view>
			</view>
			<!-- <view class="title-cell" >
				<view class="title-cell-title">
					当前版本
				</view>
				<view class="title-cell-desc" @click="loadUpdata" >
					{{versionname}}
				</view>
			</view> -->
		</view>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				height: this.ScreenHeight,
				versionname:'v1.1.0'
			};
		},onLoad() {
			// #ifdef APP-PLUS
			this.versionname=this.yzutil.getVersionCodeName();
			// #endif
		},methods:{
			clickWeb:function(e){
				var param = e.currentTarget.dataset.web;
				if(param){
					var url='../webview/webview?url='+param;
					console.log(url);
					uni.navigateTo({
						url
					});
				}else{
					console.log('缺少值')
				}
				
			},
			clickCallPhone: function(e) {
				var phone = e.currentTarget.dataset.phone;
				if (phone.length>8) {
					var content = "是否拨打客户电话：" + phone;
					uni.showModal({
						title: '提示',
						content: content,
						success: function(res) {
							if (res.confirm) {
								uni.makePhoneCall({
									phoneNumber: phone //仅为示例
								});
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					});
				} else {
					uni.showToast({
						title: '未有联系方式',
						duration: 1000,
						icon: 'none'
					});
					setTimeout(function(){
						uni.hideToast();
					},1000);
				}
			
			
			},loadVersion:function(){
				//#ifdef APP-PLUS
				this.yzutil.updata();
				//#endif
			},loadUpdata:function(){
			// #ifdef APP-PLUS
			var version = this.yzutil.getVersionCode();
			var params = {
				version: version,
				type: 0
			};
			console.log(params);
			var that = this;
			this.$axios.post(
				this.umcons.serviceAddress.UPDATA_VESION,
				params,
				function(data, code) {
					console.log(data);
					if (code == 0) {
						
						uni.showModal({
							title: data.name,
							content: data.content,
							confirmText: "更新",
							cancelText: "拒绝",
							success: function(res) {
								if (res.confirm) {
									that.yzutil.updata();
									//that.yzutil.statyUpdata(data.url,true);
								} else if (res.cancel) {
								}
							}
						});
					}else{
						that.util.showToastModal("已经最新版本啦!",function(){
							
						})
					}
				},
				function(error) {
					console.log(error);
				}
			);
			// #endif
		}
		}
	}
</script>

<style>
	@import url("../../../css/title-cell.css");

	.page-images{
		padding: 3rem;
		background-color: #FFFFFF;
		text-align: center;
	}

	.page-image {
		width: 200upx;
		height: 200upx;
	}

	.list-title-cell {
		position: relative;
		background: #FFFFFF;
		display: block;
		width: 100%;
	}

	.title-cell:after {
		content: '';
		width: 100%;
		height: 1px;
		background-color: #dcdcdc;
		display: block;
		left: 100upx;
		position: absolute;
		bottom: 0;
	}
	.page-text{
		text-align: center;
		font-size: 35upx;
	}
	.title-cell-tag{
		width: 350upx;
	}
	.title-cell-desc{
		width: 80%;
		font-size: 26upx;
		text-align: right;
	}
	.desc-address{
		width: 300upx;
		right: 1rem;
		position: absolute;
	}
	.container{
		background-color: #FFFFFF;
	}
</style>
