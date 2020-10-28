<template>
	<view id="flow">
		<view class="flow-content">
			<view class="steps-item" v-for="(item,index) in datas" :key="index">
				<view class="title-cell" @click="onAmendSchedule" :data-index="index">
					<view class="title-cell-title">
						{{item.name}}
					</view>
					<view class="title-cell-tag" :style="{color:item.state==1?'#00CD76':(item.state==2?'#FE5D3C':'#787878')}">
						{{stateStr[item.state]}}
					</view>
				</view>
				<view class="steps-content-text" v-if="item.state!=0">
					<!-- <view class="steps-desc-text " v-if="item.author!=null">
						<text class="steps_left ">施工人员</text>
						<view class="steps_right ">{{item.author!=null?item.author:"暂无人员"}}</view>
					</view> -->
					<view class="steps-desc-text" @click="onStartTime" :data-index="index">
						<text class="steps_left">开工时间</text>
						<view class="steps_right">{{item.starttime!=null?item.starttime:"暂未开始"}}</view>
					</view>
					<view class="steps-desc-text" @click="onEndTime" :data-index="index">
						<text class="steps_left">完工时间</text>
						<view class="steps_right">{{item.endtime!=null?item.endtime:"暂未开始"}}</view>
					</view>
					<view class="steps-desc-text">
						<text class="steps_left">验收时间</text>
						<view class="steps_right">{{item.checktime!=null?item.checktime:"暂未开始"}}</view>
					</view>
				</view>
				<view class="steps-content" v-if="selectIndex==index">
					<view class="journal-item" v-for="(broadcast,bindex) in item.broadcast" v-if="broadcast!=null" :key="bindex">
						<view class="journal-item-info">
							<view class="journal-title">
								<image lazy-load="true" class="loading journal-avatar" :src="broadcast.avatar==null?basePhoto:broadcast.avatar"></image>
								<view class="journal-title-desc">
									<view class="journal-author">{{broadcast.name==null?"智家视":broadcast.name}}</view>
									<view class="journal-time">{{broadcast.addtime}}</view>
								</view>
							</view>
						</view>
						<view class="item-journal-content" v-if="broadcast.content!=null">
							{{broadcast.content}}
						</view>
						<view class="journal-img-group" v-if="broadcast.image.length>0">
							<view class="item-boxs-img" v-for="(images,index2) in broadcast.image" :key="index2">
								<image lazy-load="true" v-if="images.length>10" class="loading item-journal-img " :data-src="images" :data-id="index"
								 :data-index="bindex" @tap="previewImage" :src="images"></image>
							</view>
						</view>
						<view class="journal-foot">
							<view class="journal-foot-date">
								<text v-if="uid==broadcast.uid" :data-bindex="bindex" :data-index="index" @click="onDel">删除</text>
							</view>
							<view class="journal-foot-like" :data-bindex="bindex" :data-index="index" @click="onZan">
								<text v-if="broadcast.is_zan==1" class="lg text-red cuIcon-likefill"></text>
								<text v-if="broadcast.is_zan==0" class="lg text-gray cuIcon-like"></text>
								<text class="journal-foot-likenum"> {{broadcast.zan}}</text>
							</view>
						</view>
					</view>

				</view>
				<view class="steps-more" v-if="item.broadcast.length>0" @click="onSwitch" :data-index="index">{{selectIndex==index?"关闭播报":"展开播报"}}
					<text v-if="selectIndex==index" class="text-gray cuIcon-fold"></text>
					<text v-if="selectIndex!=index" class="text-gray cuIcon-unfold"></text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import boy from '../../static/logo.png';
	export default {
		name: 'avatar',
		components: {

		},
		data() {
			return {
				selectIndex: -1,
				basePhoto: "https://www.homeeyes.cn/app/images/icon_logo.png",
				stateStr:["未开工","施工中","待验收","已完成"]

			}
		},
		onLoad() {

		},
		props: {
			datas: Array,
			uid: {
				type: Number,
				default: 0
			}
		},
		methods: {
			onAmendSchedule: function(e) {
				var index = e.currentTarget.dataset.index;
				this.$emit('onschedule', index);
			},
			onStartTime: function(e) {
				var index = e.currentTarget.dataset.index;
				this.$emit('timestart', index);
			},
			onEndTime: function(e) {
				var index = e.currentTarget.dataset.index;
				this.$emit('timeend', index);
			},
			previewImage: function(e) {
				var current = e.target.dataset.src;
				var index = e.target.dataset.index;
				var id = e.target.dataset.id;
				var imgs = this.datas[id].broadcast[index].image;
				uni.previewImage({
					current: current,
					urls: imgs
				})
			},
			onSeeker: function(e) {
				var index = e.target.dataset.index;
				this.$emit('onseeker', index);
			},
			onDel(e) {
				let index = e.currentTarget.dataset.index;
				let bindex = e.currentTarget.dataset.bindex;
				let item = this.datas[index].broadcast[bindex];
				let params = {
					bid: item.id,
					uid: this.uid
				}
				var that = this;
				this.util.showModalMsg("你确定要删除？", "删除", "取消", function() {
					that.$axios.post(that.umcons.serviceAddress.DEL_BROADCAST, params, function(res, code) {
						console.log(res)
						if (code == 0) {
							that.$emit('ondel', bindex);
						}
					}, function(error) {
						console.log(error)
					});
				}, function() {

				});

			},
			onSwitch: function(e) {
				var index = e.currentTarget.dataset.index;
				if (this.selectIndex == index) {
					this.selectIndex = -1;
				} else {
					this.selectIndex = index;
				}

			},
			onZan: function(e) {
				let index = e.currentTarget.dataset.index;
				let bindex = e.currentTarget.dataset.bindex;
				let item = this.datas[index].broadcast[bindex];
				var state = 1;
				if (item.is_zan == 1) {
					state = 0;
				}
				let params = {
					bro_id: item.id,
					uid: this.uid,
					type: 0,
					state: state
				}
				var that = this;
				this.$axios.post(this.umcons.serviceAddress.TOUCH_ZAN, params, function(res, code) {
					console.log(res)
					if (code == 0) {
						that.$emit('onzan', index);
					}
				}, function(error) {
					console.log(error)
				});


			}
		}
	}
</script>

<style scoped>
	.flow-content {
		background-color: #FFFFFF;
		padding-left: 25upx;
		padding-right: 25upx;
		padding-bottom: 25upx;
		padding-top: 25upx;
		text-align: center;
	}

	.title-cell {
		display: flex;
		position: relative;
		padding-left: 40upx;
		padding-top: 20upx;
		padding-bottom: 20upx;
		background: rgba(246, 245, 245, 1);
		border-radius: 8upx;
		margin-top: 16upx;
	}

	.title-cell-title {

		font-size: 30upx;
		font-family: FZLTHK--GBK1-0;
		font-weight: 400;
		color: rgba(85, 84, 84, 1);
	}

	.bg-start-text {
		font-size: 28upx;
		font-family: FZLTHK--GBK1-0;
		font-weight: 400;
		color: rgba(0, 205, 118, 1);
	}

	.title-cell-tag {
		position: absolute;
		right: 40upx;
		font-size: 28upx;
		font-family: FZLTHK--GBK1-0;
		font-weight: 400;
		color: rgba(120, 120, 120, 1);
	}

	.steps-more {
		padding: 20upx;
		text-align: center;
		font-size: 30upx;
		font-family: FZLTKHK--GBK1-0;
		font-weight: 400;
		color: rgba(120, 120, 120, 1);
		background-color: #FFFFFF;
		border-top: #DFDFDF 1upx solid;
		border-bottom: #DFDFDF 1upx solid;
	}

	.steps_index {
		width: 80upx;
		height: 80upx;
		border-radius: 50%;
		background-color: #00cd76;
		line-height: 80upx;
		align-items: center;
		text-align: center;
		color: white;
		font-size: 30upx
	}


	.steps-content {
		width: 100%;
		background-color: #DFDFDF;
		padding-top: 1upx;
	}

	.steps-content-text {
		width: 100%;
	}

	.steps-desc-text {
		text-align: left;
		display: flex;
		width: 100%;
		padding-left: 29upx;
		padding-top: 10upx;
		padding-bottom: 10upx;
	}

	.steps-item {
		display: block;
		background-color: #FFFFFF;
		width: 100%;
		align-items: center;

	}

	.steps_right {
		width: 100%;
		text-align: right;
		padding-right: 29upx;
		align-items: center;
		font-size: 26upx;
		font-family: FZLTHK--GBK1-0;
		font-weight: 400;
		color: rgba(120, 120, 120, 1);
	}

	.steps_left {
		width: 300upx;
		font-family: FZLTKHK--GBK1-0;
		font-weight: 400;
		padding-top: 8upx;
		padding-bottom: 8upx;
		text-align: left;
		color: rgba(154, 152, 152, 1);
		font-size: 26upx;
		font-family: FZLTKHK--GBK1-0;
		font-weight: 400;
		color: rgba(154, 152, 152, 1);
	}


	.journal-item {
		background-color: #FFFFFF;
		padding-left: 30upx;
		padding-top: 10upx;
		padding-bottom: 10upx;
		margin-top: 1upx;
	}

	.journal-item-info {
		width: 100%;
		padding: 10upx;

	}

	.journal-avatar {
		width: 70upx;
		height: 70upx;
		border-radius: 50%;
	}

	.journal-title {
		width: 100%;
		display: flex;
		padding-left: 10upx;
		padding-right: 10upx;
		padding-top: 4upx;
		padding-bottom: 4upx;
		margin-bottom: 4upx;
		position: relative;
	}



	.journal-title-desc {
		margin-left: 10upx;
		font-size: 26upx;
		line-height: 26upx;
		font-family: FZLTKHK--GBK1-0;
		font-weight: 400;
		color: rgba(146, 145, 145, 1);
		display: block;
	}

	.journal-title-desc view {
		margin: 0;
		line-height: 32upx;
	}

	.journal-time {
		font-size: 22upx;
	}

	.journal-btn {
		color: rgba(244, 194, 73, 1);
		font-size: 28upx;
		padding-top: 6upx;
		padding-bottom: 6upx;
		padding-left: 20upx;
		padding-right: 20upx;
		border: solid 2upx rgba(244, 194, 73, 1);
		border-radius: 10px;
		margin-right: 6upx;
	}


	.item-journal-content {
		margin-left: 30upx;
		line-height: 34upx;
		font-size: 30upx;
		font-family: FZLTHK--GBK1-0;
		font-weight: 400;
		color: rgba(131, 131, 131, 1);
	}

	.journal-img-group {
		width: 100%;
		padding-left: 10upx;
		padding-right: 10upx;
		text-align: left;
		display: block;
		margin-top: 10upx;
	}

	.item-boxs-img {
		width: 200upx;
		float: left;
		height: 200upx;
		padding: 4upx;
		margin-left: 6upx;
	}

	.item-journal-img {
		width: 100%;
		height: 100%;
		border-radius: 8upx;
	}

	.journal-foot {
		display: flex;
		width: 100%;
		padding: 5upx;
		min-height: 30upx;
		line-height: 24upx;
	}

	.journal-foot-like {
		right: 30upx;
		position: absolute;
		font-size: 26upx;
		font-family: FZLTKHK--GBK1-0;
		font-weight: 400;
		color: rgba(183, 183, 183, 1);
	}

	.journal-foot-date {
		margin-left: 30upx;
		font-size: 24upx;
		font-family: FZLTKHK--GBK1-0;
		font-weight: 400;
		color: rgba(204, 203, 203, 1);
	}

	.journal-foot-likenum {
		margin-left: 10upx;
	}
	.cuIcon-likefill,.cuIcon-comment,.cuIcon-like {
		font-size: 30upx;
	}
</style>
