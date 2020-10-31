<template>
	<view class="container bg-color-white">
		<view class="header">
			<view class="title">筛选</view>
			<image class="back-icon" src="https://img02.mockplus.cn/idoc/ps/2020-10-28/285708a0-192c-11eb-ac86-07ce5f71c012.png" mode="" @click="back"></image>
		</view>
		<view class="dimension">
			<view class="title text-color-3">用户身份<text class="type margin-left-xs text-color-3">单选</text></view>
			<view class="screen-type">
				<view class="tab margin-left margin-bottom-sm text-color-9" @click="changeCondition" data-type="all" :class="{'on':condition === 'all'}">全部</view>
				<view class="tab margin-left margin-bottom-sm text-color-9" @click="changeCondition" data-type="ordinary" :class="{'on':condition === 'ordinary'}">普通用户</view>
				<view class="tab margin-left margin-bottom-sm text-color-9" @click="changeCondition" data-type="anchor" :class="{'on':condition === 'anchor'}">普通主播</view>
				<view class="tab margin-left margin-bottom-sm text-color-9" @click="changeCondition" data-type="entrepreneurAnchor" :class="{'on':condition === 'entrepreneurAnchor'}">创业主播</view>
				<view class="tab margin-left margin-bottom-sm text-color-9" @click="changeCondition" data-type="oneStar" :class="{'on':condition === 'oneStar'}">一星主播</view>
				<view class="tab margin-left margin-bottom-sm text-color-9" @click="changeCondition" data-type="twoStar" :class="{'on':condition === 'twoStar'}">二星主播</view>
				<view class="tab margin-left margin-bottom-sm text-color-9" @click="changeCondition" data-type="threeStar" :class="{'on':condition === 'threeStar'}">三星主播</view>
				<view class="tab margin-left margin-bottom-sm text-color-9" @click="changeCondition" data-type="threeStarV" :class="{'on':condition === 'threeStarV'}">三星主播 (贡献值权益)</view>
			</view>
		</view>
		
		<view class="submit-container">
			<view class="reset" @click="userOperate" data-type="reset" :class="{'on':operate === 'reset'}">重置</view>
			<view class="submit" @click="userOperate" data-type="submit" :class="{'on':operate === 'submit'}">确定</view>
		</view>
		
		<view class="cu-modal drawer-modal justify-end" :class="modalName=='DrawerModalR'?'show':''" @tap="hideModal">
			<view class="cu-dialog basis-lg" @tap.stop="" :style="[{width:'80vw',height:'100vh'}]">
				<view class="cu-list menu text-left">
					<view class="">返回</view>
					<view class="">
						<uni-calendar
							:insert="true"
							:lunar="tags[0].checked"
							:disable-before="tags[3].checked"
							:range="tags[5].checked"
							:start-date="startDate"
							:end-date="endDate"
							:date="timeData.fulldate"
							:selected="selected"
							@change="change"
							@onMonthSelect="onMonthSelect"
						/>
					</view>
					
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniCalendar from '@/components/group/uni-calendar/uni-calendar.vue';
	export default {
		components:{
			uniCalendar
		},
		data() {
			let tags = [
				{
					id: 0,
					name: '农历',
					checked: false,
					attr: 'lunar'
				},
				{
					id: 1,
					name: '开始日期(' + getDate(new Date(), -1) + ')',
					checked: false,
					value: getDate(new Date(), -1),
					attr: 'startDate'
				},
				{
					id: 2,
					name: '结束日期(' + getDate(new Date(), 2) + ')',
					value: getDate(new Date(), 2),
					checked: false,
					attr: 'endDate'
				},
				{
					id: 3,
					name: '禁用今天之前的日期',
					checked: false,
					attr: 'disableBefore'
				},
				{
					id: 4,
					name: '自定义当前日期(' + getDate(new Date(), 1) + ')',
					value: getDate(new Date(), 1),
					checked: false,
					attr: 'date'
				},
				{
					id: 5,
					name: '范围选择',
					checked: false,
					attr: 'range'
				},
				{
					id: 6,
					name: '打点',
					value: [
						{
							date: '2019-10-26',
							info: '打卡'
						},
						{
							date: '2019-10-27',
							info: '签到',
							data: {
								custom: '自定义信息',
								name: '自定义消息头'
							}
						},
						{
							date: '2019-10-28',
							info: '已打卡'
						}
					],
					checked: true,
					attr: 'selected'
				}
			];
			return {
				condition:'all',
				operate:'submit',
				modalName: null,
				tags,
				startDate: '',
				endDate: '',
				selected: [],
				timeData: {
					clockinfo: '',
					date: '',
					fulldate: '',
					lunar: '',
					month: '',
					range: '',
					year: ''
				}
			};
		},
		methods:{
			back(){
				uni.redirectTo({
					url:'../ConsumerList/consumer_list'
				})
			},
			changeCondition(e){
				this.condition = e.currentTarget.dataset.type
			},
			userOperate(e){
				this.operate = e.currentTarget.dataset.type;
				console.log(this.operate)
				if(this.operate = 'reset'){
					this.condition = 'all'
				}
			},
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			change(e) {
				console.log('change 返回:', e);
				this.timeData = e;
				this.infoShow = true;
			},
			onMonthSelect(m) {
				this.slmonth = m;
				this.onInitInfo();
			},
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		width: 100vw;
		height: 100vh;
		.header{
			width:100%;
			height:88rpx;
			background-color: #fff;
			display: flex;
			justify-content: center;
			align-items: center;
			position: fixed;
			right: 0;
			top:0;
			z-index: 999;
			border-bottom: 1px solid #eee;
			.title{
				font-size: 34rpx;
				font-weight: bold;
			}
			.back-icon{
				width: 30rpx;
				height:	30rpx;
				position: absolute;
				left: 30rpx;
			}
		}
		.dimension{
			.title{
				font-size: 30rpx;
				line-height: 150rpx;
				padding-left: 50rpx;
				.type{
					font-size: 24rpx;
				}
			}
			.screen-type{
				margin:0 30rpx;
				padding-bottom: 60rpx;
				display: flex;
				flex-wrap: wrap;
				.tab{
					min-width: 190rpx;
					height: 60rpx;
					padding:0 40rpx;
					font-size: 28rpx;
					border-radius: 30rpx;
					background-color: #f7f7f7;
					display: flex;
					justify-content: center;
					align-items: center;
				}
				.on{
					background-color: #E6F1FF;
					color: #258AFE;
				}
			}
		}
		.times-slot{
			.time{
				font-size: 30rpx;
				line-height: 150rpx;
				padding-left: 50rpx;
			}
			.select-time{
				padding:0 30rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.s-time,.e-time{
					width: 300rpx;
					height: 60rpx;
					font-size: 26rpx;
					border-radius: 30rpx;
					border: 1px solid #ccc;
					display: flex;
					justify-content: space-around;
					align-items: center;
					.img{
						width:26rpx;
						height:26rpx;
					}
				}
			}
		}
		.submit-container{
			width: 100%;
			height: 96rpx;
			padding: 0 30rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			position: fixed;
			bottom: 0;
			left: 0;
			border-top: 1px solid #eee;
			.reset,.submit{
				font-size: 32rpx;
				color: #333;
				width:47%;
				height:70rpx;
				border-radius: 35rpx;
				border: 1px solid #ccc;
				display: flex;
				justify-content: center;
				align-items: center;
			}
			.on{
				color: #fff;
				background-color: #258AFE;
				border: none;
				transition: all 1s;
			}
		}
	}
	
</style>
