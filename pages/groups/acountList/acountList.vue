<template>
	<view class="container text-color-white">
		<view class="card-cell" v-for="(item,index) of 3" :keys="index">
			<view class="user-operate">
				<view class="left">
					<image class="img" src="https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1689053532,4230915864&fm=26&gp=0.jpg"></image>
					<text class="margin-left-sm">工商银行</text>
				</view>
				<view class="right">
					<text class="cuIcon-edit" @click.stop="editAcount"></text>
					<text class="cuIcon-delete margin-left" @click.stop="deleteAcount" :data-index="index"></text>
				</view>
			</view>
			<view class="card-no text-center">{{'12134567899655555' | formatBank}}</view>
			<view class="margin-top branch-name">支行名称：珠晖支行</view>
			<view class="acount-name">开户名称：小进进</view>
		</view>
		<view class="add-acount bg-color-b text-color-white" @click="toAcountEdit">
			新增账户
		</view>
	</view>
</template>

<script>
export default {
	data(){
		return {
			index:0
		}
	},
	methods:{
		toAcountEdit(){
			uni.navigateTo({
				url:'../acountEdit/acountEdit'
			})
		},
		editAcount(){
			uni.setStorage({
				key:'acountInfo',
				data:{
					name:'1',
					phone:'2',
					bank_name:'3',
					branch_name:'4',
					number:'5'
				},
				success:() => {
					uni.navigateTo({
						url:'../acountEdit/acountEdit'
					})
				}
			})
		},
		deleteAcount(e){
			this.$util.showModal({
				content: '确定要删除该账户吗？',
				success: (res) => {
					if (res.confirm) {
						console.log('删除')
					}
				}
			});
			console.log(e.currentTarget.dataset.index)
			
		}
	},
	filters: {
		formatBank(bank_num) {
			var reg = /^(\d{4})(\d*)(\d{4})$/;
			var str = bank_num.replace(reg, function(a, b, c, d) {
			return b + c.replace(/\d/g, "*") + d;
			});
			// console.log('str',str);
			return str
		}
	},
};
</script>

<style lang="scss" scoped>
	.container{
		.card-cell{
			margin: 20rpx 30rpx;
			padding: 20rpx;
			border-radius: 8rpx;
			background-color: red;
			.user-operate{
				height: 80rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.left{
					display: flex;
					align-items: center;
					.img{
						width: 40rpx;
						height: 30rpx;
					}
				}
			}
			.card-no{
				font-size: 40rpx;
			}
			.branch-name,.acount-name{
				font-size: 24rpx;
				line-height: 40rpx;
			}
		}
		.add-acount{
			width: 90%;
			height: 80rpx;
			margin-top: 80rpx;
			border-radius: 40rpx;
			margin: 0 auto;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
</style>
