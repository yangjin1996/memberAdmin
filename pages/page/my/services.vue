<template>
	<view class="container margin-top" :style="[{ height: height==0?'100%':(height+'px')}]">
		<form class="from-box margin-top"  @submit="commitInfo">
			<view class="from-cell-title">在线咨询</view>
			<view class="from-cell-desc">真诚为您解答各种装饰问题</view>
			<view class="cu-form-group">
				<input @input="onInputName" :value="name" placeholder="请输入您的姓名" class='radius' name='name'></input>
			</view>
		
			<view class="cu-form-group">
				<input @input="onInputPhone" :value="phone" placeholder="请输入您的电话" class='radius' name='phone'></input>
			</view>
			<view class="cu-form-group">
				<textarea id="inputcontent" :value="content" show-confirm-bar="true" class="cu-form-textarea" @focus="bindTextAreaBlur"
				 @confirm="bindTextAreaBlur" @blur="bindTextAreaBlur" placeholder="请输入处理问题描述" maxlength="-1" placeholder-class='placeholder'></textarea>
			</view>
			<view class="uni-padding-wrap">
				<button class="btn-commit" type="primary" formType="submit">立即提交</button>
				<view class="from-toast">———— 拨打客服热线 ————</view>
				<button class="btn-commit btn-commit-service" size="mini" type="default" @click="clickCallPhone" data-phone="057788879777">一键呼叫客服</button>
				<!-- <view class="from-toast">试用规则：缴纳500元押金，即可免费施工一套设备1个月，设备包含智能摄像头+整套软件系统，试用期满意后可开通长期会员，试用后不满意押金全额返回，如设备遗失或严重损坏押金则不予退还。</view> -->
			</view>
		</form>
	</view>
</template>

<script>
export default {
	data() {
		return {
			height: this.ScreenHeight,
			content: '',
			name: '',
			phone: '',
			cid: 0,
			uid: 0,
			tel: 0
		};
	},
	onLoad(prop) {
		this.tel = prop.tel;
		this.uid = this.util.getUid();
		this.cid = this.util.getCid();
		
	},onShow() {
		
	},
	methods: {
		//输入姓名
		onInputName: function(event) {
			this.name = event.target.value;
		},
		onInputPhone: function(event) {
			this.phone = event.target.value;
		},
		bindTextAreaBlur: function(e) {
			var value = e.detail.value;
			console.log(value);
			this.content = value;
		},
		commitInfo() {
			let params = {
				user_id: this.uid,
				name: this.name,
				phone: this.phone,
				content: this.content
			};
			var that = this;
			console.log(params);
			this.$axios.post(
				this.umcons.serviceAddress.CREATE_CONSULTATION,
				params,
				function(res, code) {
					console.log(res);
					if (code == 0) {
						that.util.showAlert('提交成功',function(){
							uni.navigateBack({
								delta:1
							})
						});
					}
				},
				function(error) {
					console.log(error);
					that.util.showAlert('加载失败');
				}
			);
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
		}
	}
};
</script>

<style scoped>
.from-cell-title {
	font-size: 40upx;
	font-family: '黑体';
	font-weight: 400;
	color: rgba(70, 70, 70, 1);
	line-height: 44upx;
	text-align: center;
	margin-top: 60upx;
}
.from-cell-desc {
	font-size: 28upx;
	font-family: '黑体';
	font-weight: 400;
	margin-top: 30upx;
	color: rgba(120, 120, 120, 1);
	line-height: 32upx;
	margin-bottom: 60upx;
	text-align: center;
}
.btn-commit{
	margin-bottom: 20upx;
}
.from-box{
	background-color: #FFFFFF;
	padding-left: 40upx;
	padding-right: 40upx;
}
.container{
	background-color: #FFFFFF;
}
.uni-padding-wrap{
	text-align: center;
	background-color: #FFFFFF;
}
.from-toast{
	font-size: 28upx;
	font-family: '黑体';
	font-weight: 400;
	padding: 30upx;
	margin-top: 60upx;
	text-align: center;
	color: rgba(120, 120, 120, 1);
}
.btn-commit-service{
	
	border-color: #04BE02;
	color: #04BE02;
	font-size: 28upx;
	font-family: '黑体';
	font-weight: 400;
}
.cu-form-group{
	background-color: #EDEDED;
	border-radius: 20upx;
	margin-left: 40upx;
	margin-right: 40upx;
	margin-bottom: 20upx;
}
</style>
