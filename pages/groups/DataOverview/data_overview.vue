<template>
	<view class="container">
		<scroll-view class="scroll-view-H" :style="scrollHeight" scroll-y="true" refresher-enabled="false"
		 :refresher-triggered="triggered" :refresher-threshold="100" refresher-background="whitesmoke" 
		 @refresherrefresh="onRefresh" @refresherrestore="onRestore">
		<view class="user-data bg-color-white" v-for="(item,index) of 2" keys="index">
			<view class="title text-color-3">用户数据</view>
			<view class="main-container">
				<view class="line1"></view>
				<view class="line2"></view>
				<view class="data-cell">
					<view class="data-cell-title">新增用户</view>
					<view class="data-detail">
						<view class="data">
							<view class="num text-bold text-color" :class="{'text-color-orange':index === 1}">632</view>
							<view class="date text-color-9">今日</view>
						</view>
						<view class="data">
							<view class="num text-bold text-color" :class="{'text-color-orange':index === 1}">582</view>
							<view class="date text-color-9">昨日</view>
						</view>
					</view>
				</view>
				<view class="data-cell">
					<view class="data-cell-title">普通用户</view>
					<view class="data-detail">
						<view class="data">
							<view class="num text-bold text-color" :class="{'text-color-orange':index === 1}">632</view>
							<view class="date text-color-9">今日</view>
						</view>
						<view class="data">
							<view class="num text-bold text-color" :class="{'text-color-orange':index === 1}">582</view>
							<view class="date text-color-9">昨日</view>
						</view>
					</view>
				</view>
				<view class="data-cell">
					<view class="data-cell-title text-color-3">付费用户</view>
					<view class="data-detail">
						<view class="data">
							<view class="num text-bold text-color" :class="{'text-color-orange':index === 1}">632</view>
							<view class="date text-color-9">今日</view>
						</view>
						<view class="data">
							<view class="num text-bold text-color" :class="{'text-color-orange':index === 1}">582</view>
							<view class="date text-color-9">昨日</view>
						</view>
					</view>
				</view>
				<view class="data-cell">
					<view class="data-cell-title">累计用户</view>
					<view class="data-detail">
						<view class="data">
							<view class="num text-bold text-color" :class="{'text-color-orange':index === 1}">632</view>
							<view class="date text-color-9">今日</view>
						</view>
						<view class="data">
							<view class="num text-bold text-color" :class="{'text-color-orange':index === 1}">582</view>
							<view class="date text-color-9">昨日</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="data-scale">
			<view class="headers bg-color=-white">
				<view class="text text-color-3">提成（元）</view>
				<image class="screen-icon" src="https://img02.mockplus.cn/idoc/ps/2020-10-29/ce2ce8c0-19a5-11eb-96f2-7dbb36504253.png" mode="" @click="toScreen"></image>
			</view>
			<u-echarts chartType="ring" :opts="opts"></u-echarts>
		</view>
		</scroll-view>
	</view>
</template>

<script>
	import uEcharts from '../../../components/u-charts/component.vue';
	import uniCalendar from '@/components/group/uni-calendar/uni-calendar.vue';
	export default {
		components:{
			uEcharts,
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
				tags,
				scrollHeight:0,
				triggered: false,
				opts: {
						categories: [1,2,3,4,5],
						series: [{
							name: "一班",
							data: 50
						}, {
							name: "二班",
							data: 30
						}, {
							name: "三班",
							data: 20
						}, {
							name: "四班",
							data: 18
						}, {
							name: "五班",
							data: 8
						}]
					},
				startDate: '',
				endDate: '',
				selected: [],
				modalName: null,
				timeData: {
					clockinfo: '',
					date: '',
					fulldate: '',
					lunar: '',
					month: '',
					range: '',
					year: ''
				},
				modalName: null,
				CustomBar: this.CustomBar,
				showCalendar:false,
				dataAs:{
					'小三':20,
					'小奥':30,
				},
				basicAs:{
					'小三1':20,
					'小奥2':30,
				},
				titleAs:{
					'小三3':20,
					'小奥4':30,
				},
				legendAs:{
					'小三5':20,
					'小奥6':30,
				},
				datas: [
					{
						badge: 0,
						name: '数据概览',
						oldData:12345,
						newData:456789,
						url:'../../groups/DataOverview/data_overview'
					},
					{
						badge: 0,
						name: '用户列表',
						oldData:12345,
						newData:456789,
						url:'../../groups/ConsumerList/consumer_list'
					},
					{
						badge: 0,
						name: '订单列表',
						oldData:12345,
						newData:456789,
					},
					{
						badge: 0,
						name: '11111',
						oldData:12345,
						newData:456789,
						url:'../../groups/ConsumerList/consumer_list'
					},
					{
						badge: 0,
						name: '22222',
						oldData:12345,
						newData:456789,
					},
				],
				cols: 3,
				gridBorder: false
			};
		},
		onShow(){
			this.scrollHeight = 'height:' + (uni.getSystemInfoSync().windowHeight) + 'px';
			this._freshing = false;
		},
		onLoad(option){
			if(Object.keys(option).length > 0){
				console.log('初始化数据')
			}
		},
		computed: {
			style() {
				var style = '';
				return style;
			}
		},
		methods: {
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			showCalendars(){
				this.showCalendar = true
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
			onClick(e) {
				let index=e.currentTarget.dataset.index;
				console.log('index',index)
			},
			onRight() {
				// this.$emit('onright', true);
				console.log('index1')
			},
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			toScreen(){
				uni.navigateTo({
					url:'../Screen/screen'
				})
			},
			onRefresh() {
				// if (this._freshing) return;
				// this._freshing = true;
				this.triggered = true;
				setTimeout(() => {
					this.triggered = false;
					// this._freshing = false;
				}, 300)
			},
			onRestore() {
				console.log('onRestore')
				this.triggered = 'restore'; // 需要重置
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cu-item{
		padding-left: 30rpx !important;
	}
	.data-scale{
		width:100%;
		height:600rpx;
		background-color: #fff;
		margin-top: 40rpx;
		.headers{
			width:100%;
			height:102rpx;
			padding:0 30rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom: 1px solid #eee;
			.text{
				font-size: 34rpx;
			}
			.screen-icon{
				width:32rpx;
				height:34rpx
			}
		}
	}
	
	.user-data{
		width:100%;
		height: 500rpx;
		padding:0 28rpx;
		margin-bottom: 30rpx;
		padding-bottom: 30rpx;
		border-top: 1px solid #f7f7f7;
		display: flex;
		flex-direction: column;
		.title{
			height:90rpx;
			font-size: 34rpx;
			display: flex;
			align-items: center;
		}
		.main-container{
			width: 100%;
			height: 0;
			border-radius: 16rpx;
			display: flex;
			flex-wrap: wrap;
			flex: 1;
			border: 1px solid #f7f7f7;
			box-shadow: 0 0 4rpx 4rpx #fafafa;
			position: relative;
			.line1{
				width:90%;
				height:2px;
				background-color: #f7f7f7;
				position: absolute;
				left:5%;
				top:50%;
			}
			.line2{
				width:2px;
				height:90%;
				background-color: #f7f7f7;
				position: absolute;
				left:50%;
				top:5%;
			}
			.data-cell{
				width: 50%;
				height:50%;
				padding:20rpx 38rpx 10rpx 38rpx;
				display: flex;
				flex-direction: column;
				.data-cell-title{
					line-height: 56rpx;
					font-size: 28rpx;
				}
				.data-detail{
					width:100%;
					height: 0;
					padding:0 34rpx;
					// margin-bottom: 10rpx;
					display: flex;
					flex: 1;
					justify-content: space-between;
					.data{
						display: flex;
						flex-direction: column;
						justify-content: space-around;
						.num{
							font-size: 30rpx;
						}
						.date{
							font-size: 22rpx;
						}
					}
				}
			}
		}
	}
</style>
