<template>
	<view class="">
		<view class="container">
			<view class="cu-form-group">
				<view class="title">姓名</view>
				<input placeholder="请输入真实姓名" name="input" v-model="acountInfo.name"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">手机号码</view>
				<input placeholder="请输入手机号" name="input" v-model="acountInfo.phone"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">账号类型</view>
				<input value="银行卡" name="input" :disabled="true"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">银行名称</view>
				<picker v-if="payList.length>0" style="width: 80%;" @change="bindPickerChange" :value="index" :range="payList" range-key="name" >
					<text class="desc uni-input">{{ payList[index].name }}</text>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class="title">支行名称</view>
				<input placeholder="请输入支行名称" name="input" v-model="acountInfo.branch_name"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">提现账号</view>
				<input placeholder="请输入提现账号" name="input" v-model="acountInfo.number"></input>
			</view>
		</view>
		<view class="save bg-color-b text-color-white" @click="save">保存</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index:0,
				payList:[
					{
						name:'中国银行'
					},
					{
						name:'招商银行'
					},
					{
						name:'建设银行'
					},
					{
						name:'农业银行'
					},
					{
						name:'华夏银行'
					},
				],
				acountInfo:{
					name:'',
					phone:'',
					bank_name:'',
					branch_name:'',
					number:''
				}
			};
		},
		onShow(){
			uni.getStorage({
				key:'acountInfo',
				success: res => {
					this.acountInfo = res.data
				}
			})
		},
		onHide(){
			console.log('离开页面')
			uni.removeStorage({
				key:'acountInfo',
				success:() => {}
			})
		},
		methods:{
			bindPickerChange(e){
				this.index=e.target.value;
				this.acountInfo.bank_name = this.payList[this.index].name;
			},
			save(){
				if(this.verCard(this.acountInfo)){
					uni.redirectTo({
						url:'../acountList/acountList'
					})
				}
			},
			verCard(acountInfo){
				if(acountInfo.name === ''){
					this.$util.showToast({
						title:'请输入姓名'
					})
					return false
				}
				if(acountInfo.phone === ''){
					this.$util.showToast({
						title:'请输入电话号码'
					})
					return false
				}
				if(acountInfo.branch_name === ''){
					this.$util.showToast({
						title:'请输入支行名称'
					})
					return false
				}
				if(acountInfo.number === ''){
					this.$util.showToast({
						title:'请输入提现账号'
					})
					return false
				}
				return true
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		margin-top: 30rpx;
		.title{
			width: 150rpx;
		}
	}
	.save{
		width: 90%;
		height: 80rpx;
		margin: 0 auto;
		margin-top: 60rpx;
		border-radius: 40rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
