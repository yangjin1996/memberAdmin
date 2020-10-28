<template>
	<view class="container">
		<view class="center" >
			<view class="cu-list menu-avatar margin-top">
				<view class="cu-item">
					<view  class="cu-avatar round lg" :style="{backgroundImage:'url('+avatarUrl+');'}"></view>
					<view class="content">
						<view class="text-grey">用户头像</view>
						<view class="text-gray text-sm flex">
							<view class="text-cut" @click="chooseImage">
								点击更换
							</view>
						</view>
					</view>
					<view class="action">
						<view class="cuIcon-right text-gray"></view>
					</view>
				</view>
			</view>
			<view class="cu-form-group margin-line">
				<view class="title cu-form-title">用户昵称</view>
				<input class="cu-form-value" @input="onInputName" :placeholder="users.name" name="input"></input>
			</view>
			<view class="cu-form-group ">
				<view class="title cu-form-title">手机号</view>
				<input class="cu-form-value"  @input="onInputPhone" type="number" :placeholder="users.phone" name="input"></input>
			</view>
			<view class="cu-form-group ">
				<view class="title cu-form-title">用户地址</view>
				<input class="cu-form-value" @input="onInputAddress" :placeholder="users.address" name="input"></input>
			</view>
			<radio-group class="block margin-line" @change="RadioChange">
				<view class="cu-form-group">
					<view class="title">用户性别</view>
					<view>
						 <label class="radio margin-lr-xs">
							 <radio class="margin-lr-xs" :class="users.sex=='1'?'checked':''" :checked="users.sex=='1'?true:false" value="1"></radio>
								男
						</label>
						 <label class="radio margin-lr-xs">
						<radio class="margin-lr-xs" :class="users.sex=='2'?'checked':''" :checked="users.sex=='2'?true:false" value="2"></radio>
						女
						</label>
					</view>
				</view>
			</radio-group>
			<view class="cu-form-btns">
				<button class="cu-form-btn" type="default" @click="onupdata">修改信息</button>
				<button class="cu-form-btn" type="warn" @click="onExit">退出登录</button>

			</view>
		</view>
		
		
	</view>
</template>

<script>
import {
		mapState,
		mapMutations
	} from 'vuex'

	export default {
		computed: {
			...mapState(['hasLogin', 'forcedLogin','userinfo'])
		},
		components: {

		},
		data() {
			return {
				uid: 0,
				cid: 0,
				users:{},
				current: 0,
				avatarUrl:'https://www.homeeyes.cn/app/images/icon_logo.png'
			};
		},
		onLoad() {
			
		},
		onShow() {
			this.uid = this.userinfo.uid;
			this.users=this.userinfo;
			if(this.util.isExist(this.userinfo.avatar)){
				this.avatarUrl=this.userinfo.avatar;
			}
			this.onInit();
		},
		methods: {
			...mapMutations(['logout','login','loginsoure']),
			chooseImage:function() {
				uni.navigateTo({
					url:'./cropimage'
				})
				
			},selectImage:function(images){
				let file = images[0];
				uni.uploadFile({
					url: "https://www.homeeyes.cn/api/AllUploadImages",
					filePath: file,
					name: 'image',
					formData: {
						type: 5
					},
					success: (uploadFileRes) => {
						var data = JSON.parse(uploadFileRes.data);
						if (data.error == 0) {
							var image = data.data;
							that.commitInfo(image);
						}
					},
					fail: (error) => {
						console.log(error)
					}
				});
			},commitInfo:function(image){
				let params = {
					uid: this.uid,
					avatar: image
				}
				console.log(params);
				let that=this;
				this.$axios.post(this.umcons.serviceAddress.UPLOAD_AVATAR, params, function(res, code) {
					if (code == 0) {
						var data = res;
						try {
							that.users.headurl=res;
							uni.setStorageSync('headurl', res);
						} catch (e) {
							console.log(res);
						}
						//this.util.saveInfo(data);
						that.util.showAlert("上传成功");
					} else {
						that.util.showAlert("上传失败");
					}
				}, function(error) {
					console.log(error);
				});
			},
			onInputName: function(event) {
				this.users.name = event.target.value
			},
			onInputAddress: function(event) {
				this.users.address = event.target.value
			},onInputPhone: function(event) {
				this.users.phone = event.target.value
			},
			onupdata: function() {
				var that = this;
				let params = {
					user_id: this.uid,
					name: this.users.name,
					sex: this.users.sex,
					phone:this.users.phone,
					avatar:this.users.avatar,
					city: this.users.address
				}
				console.log(params);
				this.$axios.post(this.umcons.serviceAddress.EDIT_USERINFO, params, function(res, code) {
					if (code == 0) {
						var data = res;
						that.util.saveInfo(data);
						that.users = data;
						that.login(data);
						that.util.showAlert("修改成功",function(){
							uni.navigateBack({
								delta:1
							})
						});
					} else {
						that.util.showAlert("修改失败",function(){
							
						});
					}
				}, function(error) {
					console.log(error);
				});
			},
			onInit: function() {
				var that = this;
				let params = {
					user_id: this.uid
				}
				console.log(params);
				this.$axios.post(this.umcons.serviceAddress.GET_USER, params, function(res, code) {
					if (code == 0) {
						var data = res;
						console.log(res);
						that.users = res;
						that.users.address=res.province+res.city;
						that.login(res);
					} 
					uni.stopPullDownRefresh();
				}, function(error) {
					console.log(error);
					uni.stopPullDownRefresh();
				});
			},
			onExit: function() {
				this.logout();
				this.loginsoure(false);
				uni.reLaunch({
					url:'../index/index'
				})
			},RadioChange(e) {
				this.users.sex = e.detail.value
			}
			
		}
	}
</script>

<style scoped>
	.cu-form-btn {
		border: none;
		margin-top: 20upx;
	}
	.cu-form-btns{
		margin-top: 200upx;
		position: relative;
	}
	.margin-line{
		margin-top: 2upx;
	}
</style>
