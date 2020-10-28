<template>
	<view id="flow">
		<view class="steps-item" v-for="(item,index) in datas" :key="index">
			<view class="steps_press">
				<view class="steps_index" v-bind:style="{backgroundColor:state[item.state].color}">
					{{index}}
				</view>
				<view class="steps_line" v-bind:class="{'steps_line2':item.broadcast.length>0}" v-bind:style="{backgroundColor:colors[item.state].color}">

				</view>
			</view>
			<view class="steps-content">
				<view class="steps-content-text">
					<view class="steps-desc-text steps-text1">
						<text class="steps_left steps_left-title" v-bind:style="{color:colors[item.state].color}">{{item.name}}</text>
						<view class="steps_right">
							<text class="steps-btn" v-bind:style="{backgroundColor:colors[item.state].color}" @click="onAmendSchedule"
							 :data-index="index">{{item.state==0?"点击开始":(item.state==1?"确认完成":"已经完成")}}</text>
						</view>
					</view>
					<view class="steps-desc-text steps-text2">
						<text class="steps_left steps-start-time">开始时间</text>
						<view class="steps_right steps_right-time" @click="onStartTime" :data-index="index">{{item.starttime}}</view>
					</view>
					<view class="steps-desc-text steps-text3" v-bind:style="{borderColor:colors[item.state].color}">
						<text class="steps_left steps-end-time" v-bind:style="{backgroundColor:colors[item.state].color}">结束时间</text>
						<view class="steps_right steps_right-time" @click="onEndTime" :data-index="index">{{item.endtime}}</view>
					</view>
				</view>
				<view class="broadcast-img-group" v-if="item.broadcast.length>0">
					<view class="item-boxs-img" v-for="(item2,index2) in item.broadcast" :key="index2" v-if="index2<3">
						<image v-if="item2.length>10" class="item-broadcast-img" :data-src="item2" :data-index="index" @tap="previewImage"
						 :src="item2"></image>
					</view>
					<view class="steps-bottom">
						<view class="steps-line"></view>
						<view class="steps-more" @click="onSeeker" :data-index="index">查看详情 V </view>
					</view>
				</view>

			</view>

		</view>
	</view>
</template>

<script>
	export default {
		name: 'avatar',
		components: {

		},
		data() {
			return {
				colors: [{
					color: '#DEDEDE'
				}, {
					color: '#00CD76'
				}, {
					color: '#F4C249'
				}],
				height: 260
			}
		},
		created() {

		},
		props: {
			datas: Array
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
			formateState: function(state) {
				if (state == 0) {
					return "点击开始"
				} else if (state == 1) {
					return "确认完成"
				} else {
					return "已经完成"
				}

			},
			previewImage: function(e) {
				var current = e.target.dataset.src;
				var index = e.target.dataset.index;
				var imgs = this.datas[index].broadcast;
				uni.previewImage({
					current: current,
					urls: imgs
				})
			},
			onSeeker: function(e) {
				var index = e.target.dataset.index;
				this.$emit('onseeker', index);
			}

		}
	}
</script>

<style scoped>
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


	.steps_line {
		width: 4upx;
		height: 200upx;
		margin-left: 40upx;
		margin-top: 4upx;
		background-color: #00cd76;
	}

	.steps_line2 {
		width: 4upx;
		height: 400upx;
	}

	.steps-content {
		width: 100%;
		padding: 20upx;
		border-bottom: solid 2upx #DCDCDC;
	}

	.steps-content-text {
		width: 100%;
		height: 240upx;
	}

	.steps-desc-text {
		text-align: left;
		display: flex;
		width: 100%;

	}

	.steps_press {
		width: 100upx;
		text-align: center;
		padding: 10upx;
	}

	.steps-item {
		display: flex;
		background-color: #FFFFFF;
		width: 100%;
		align-items: center;

	}

	.steps-text2 {
		border: solid 2upx #F4F3F3;
		border-radius: 12upx;
		color: white
	}

	.steps-text3 {
		border: solid 2upx #F4C249;
		border-radius: 12upx;
	}

	.prepareColor {
		background-color: #00CD76;
	}

	.finishColor {
		background-color: #F4C249;
	}

	.loseColor {
		background-color: #999999;
	}

	.prepareTextColor {
		color: #00CD76;
	}

	.finishTextColor {
		color: #F4C249;
	}

	.loseTextColor {
		color: #999999;
	}

	.steps_right {
		width: 100%;
		text-align: center;
		font-size: 24upx;
		font-family: FZLTKHK--GBK1-0;
		font-weight: 400;
		color: rgba(202, 200, 200, 1);
		align-items: center;
	}

	.steps_left {
		width: 300upx;
		font-size: 30upx;
		font-family: FZLTKHK--GBK1-0;
		font-weight: 400;
		padding: 8upx;
		text-align: center;

	}

	.steps-start-time {
		border: 2upx solid rgba(244, 243, 243, 1);
		border-radius: 12upx;
		color: rgba(202, 200, 200, 1);
	}

	.steps-end-time {
		border-radius: 12upx;
		color: rgba(255, 255, 255, 1);
	}

	.steps_left-title {
		width: 300upx;
		font-size: 32upx;
		font-family: FZLTHK--GBK1-0;
		font-weight: 400;
		text-align: center;
		color: rgba(183, 183, 183, 1);
	}

	.steps-text1 {
		padding: 10upx;
	}

	.steps-btn {
		border-radius: 12upx;
		padding-left: 12upx;
		padding-right: 12upx;
		padding-top: 4upx;
		padding-bottom: 4upx;
		color: white;
		border: none;
		text-align: center;
		margin: 0;
		font-size: 30upx;
		position: absolute;
		right: 30upx;
	}

	.steps_right-time {
		font-size: 32upx;
		font-family: FZLTKHK--GBK1-0;
		font-weight: 400;
		color: rgba(112, 111, 111, 1);
	}

	.broadcast-img-group {
		width: 100%;
		padding: 10upx;
		text-align: left;
		display: block;
	}

	.item-boxs-img {
		width: 33%;
		float: left;
		height: 160upx;
		padding: 4upx;
	}

	.item-broadcast-img {
		width: 100%;
		height: 100%;
		border-radius: 2upx;
	}

	.steps-bottom {
		width: 100%;
		margin-top: 6upx;
		padding: 6upx;
		display: flex;
		line-height: 24upx;
		align-items: center;

	}

	.steps-more {
		color: #DCDCDC;
		font-size: 24upx;
		margin-left: 5%;
	}

	.steps-line {
		background-color: #DCDCDC;
		width: 70%;
		height: 1px;
	}
</style>
