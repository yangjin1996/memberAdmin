<template>

	<view class="cu-card case ">
		<view v-for="(item,index) in datas" :key="index" class="cu-card-item shadow">
			<view >
				<view class='image case-image' @click="onClickItem" :data-index="index">
					<image class="loading case-image" lazy-load="true" :src="item.photo"></image>
					<!-- <view class="cu-tag bg-blue">优选案例</view> -->
				</view>
				<view class="cu-list menu menu-avatar">
					<view class='content flex-sub'>
						<view class='text-grey case-text-title' @click="onClickItem" :data-index="index">{{item.title}}</view>
						<view class='text-gray text-sm flex justify-between case-text-desc'>
							案例简介：{{item.area}}m2 {{item.style}}
							<view class="text-gray text-sm text-foot">
								<view class="journal-foot-like" :data-index="index" @click="onZan">
									<text v-if="item.is_zan==1" class="lg text-red cuIcon-likefill"></text>
									<text v-if="item.is_zan==0" class="lg text-gray cuIcon-like"></text>
									<text class="journal-foot-likenum"> {{item.zan}}</text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'journal',
		data() {
			return {

			}
		},
		props: {
			datas: Array,
			monitor:{
				type:Number,
				default:0
			},
			uid:0
		},
		methods: {
			onClickItem(e) {
				var index = e.currentTarget.dataset.index;
				if(this.monitor==0){
					var src = this.datas[index].url;
					this.controller.openCase(src);
				}else{
					this.$emit('onclickitem', index);
				}
			},
			previewImage: function(e) {
				var current = e.target.dataset.src;
				var imgs = this.datas.image;
				uni.previewImage({
					current: current,
					urls: imgs
				})
			},onZan:function(e){
				let index = e.currentTarget.dataset.index;
				let item=this.datas[index];
				if(item.is_zan==0){
					let params = {
						cases_id: item.id,
						uid: this.uid
					}
					var that = this;
					this.$axios.post(this.umcons.serviceAddress.CASE_ZAN, params, function(res,code) {
						console.log(res)
						if(code==0){
							that.$emit('onzan', index);
						}
					}, function(error) {
						console.log(error)
					});
				}else{
					this.util.showAlert("你已经点赞");
				}
				
			}

		}
	}
</script>
<!-- StarbbUI -->
<style scoped>
	.flex-sub {
		margin-left: 20upx;
	}

	.case-image {
		height: 300upx;
		border-radius: 12upx;
	}

	.text-foot {
		margin-right: 20upx;
	}

	.cu-card {
		margin-top: 2upx;
		padding: 23upx;
		background-color: #FFFFFF;
	}

	.cu-card-item {
		background-color: #FFFFFF;
		display: block;
		padding: 10upx;

	}

	.cu-tag {
		right: 50upx;
	}

	.case-text-title {
		padding-top: 10upx;
		padding-bottom: 10upx;
		font-size: 30upx;
		font-family: FZLTHK--GBK1-0;
		font-weight: 400;
		color: rgba(85, 84, 84, 1);
		line-height: 32upx;

	}

	.case-text-desc {
		padding: 2upx;
		font-size: 24upx;
		font-family: FZLTKHK--GBK1-0;
		font-weight: 400;
		color: rgba(154, 152, 152, 1);
		line-height: 32upx;
	}

	.journal-foot-likenum {
		margin-left: 10upx;
	}
</style>
