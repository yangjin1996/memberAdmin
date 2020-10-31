<template>
	<view class="container bg-color-white">
		<view class="header">
			<view class="title">筛选</view>
			<image class="back-icon" src="https://img02.mockplus.cn/idoc/ps/2020-10-28/285708a0-192c-11eb-ac86-07ce5f71c012.png" mode="" @click="back"></image>
		</view>
		<view class="select-time-box">
			<view class="time-s" @click="showModal" data-target="DrawerModalR" data-type="1">
				<text class="text-color-3 title">订单创建时间</text>
				<view class="">
					<text class="text-color-9">{{creatTime}}</text>
					<text class="cuIcon-right margin-left text-color-9"></text>
				</view>
			</view>
			<view class="time-e" @click="showModal" data-target="DrawerModalR" data-type="2">
				<text class="text-color-3 title">订单支付时间</text>
				<view class="">
					<text class="text-color-9">{{payTime}}</text>
					<text class="cuIcon-right margin-left text-color-9"></text>
				</view>
			</view>
		</view>
		
		<view class="dimension">
			<view class="title text-color-3">订单状态<text class="type margin-left-xs text-color-3">单选</text></view>
			<view class="screen-type">
				<view class="tab margin-left margin-bottom-sm text-color-9" @click="changeCondition" data-type="all" :class="{'on':condition === 'all'}">全部</view>
				<view class="tab margin-left margin-bottom-sm text-color-9" @click="changeCondition" data-type="ordinary" :class="{'on':condition === 'ordinary'}">待支付</view>
				<view class="tab margin-left margin-bottom-sm text-color-9" @click="changeCondition" data-type="anchor" :class="{'on':condition === 'anchor'}">已支付</view>
				<view class="tab margin-left margin-bottom-sm text-color-9" @click="changeCondition" data-type="entrepreneurAnchor" :class="{'on':condition === 'entrepreneurAnchor'}">已关闭</view>
			</view>
		</view>
		<view class="dimension">
			<view class="title text-color-3">发货状态<text class="type margin-left-xs text-color-3">单选</text></view>
			<view class="screen-type no-border">
				<view class="tab margin-left margin-bottom-sm text-color-9" @click="changeConditions" data-type="all" :class="{'on':conditions === 'all'}">全部</view>
				<view class="tab margin-left margin-bottom-sm text-color-9" @click="changeConditions" data-type="ordinary" :class="{'on':conditions === 'ordinary'}">待发货</view>
				<view class="tab margin-left margin-bottom-sm text-color-9" @click="changeConditions" data-type="anchor" :class="{'on':conditions === 'anchor'}">已发货</view>
				<view class="tab margin-left margin-bottom-sm text-color-9" @click="changeConditions" data-type="entrepreneurAnchor" :class="{'on':conditions === 'entrepreneurAnchor'}">已收货</view>
			</view>
		</view>
		
		<view class="submit-container">
			<view class="reset" @click="userOperate" data-type="reset" :class="{'on':operate === 'reset'}">重置</view>
			<view class="submit" @click="userOperate" data-type="submit" :class="{'on':operate === 'submit'}">确定</view>
		</view>
		
		<view class="cu-modal drawer-modal justify-end" :class="modalName=='DrawerModalR'?'show':''" @tap="hideModal">
			<view class="cu-dialog basis-lg" @tap.stop="" :style="[{width:'80vw',height:'100vh'}]">
				<view class="cu-list menu text-left">
					<view class="cal-header">
						<text class="cuIcon-back"></text>
						<text>选择日期</text>
					</view>
					
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
				operate:'submit',
				condition:'all',
				conditions:'all',
				dataType:0,
				creatTime:'请选择',
				payTime:'请选择',
				modalName:null,
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
					url:'../UserList/OrderList/order_list'
				})
			},
			userOperate(e){
				this.operate = e.currentTarget.dataset.type;
				if(this.operate === 'reset'){
					this.condition = 'all'
					this.conditions = 'all'
				}
			},
			changeCondition(e){
				this.condition = e.currentTarget.dataset.type
			},
			changeConditions(e){
				this.conditions = e.currentTarget.dataset.type
			},
			
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target;
				this.dataType = e.currentTarget.dataset.type;
			},
			hideModal(e) {
				this.modalName = null
			},
			change(e) {
				if(this.dataType == 1){
					this.creatTime = e.fulldate
				}else{
					this.payTime = e.fulldate
				}
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
		position: relative;
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
		.select-time-box{
			padding: 20rpx 0;
			border-bottom: 1px solid #eee;
			.time-s,.time-e{
				width: 100%;
				height: 80rpx;
				padding:0 30rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.title{
					font-size: 30rpx;
				}
			}
		}
		.dimension{
			.title{
				font-size: 30rpx;
				line-height: 100rpx;
				padding-left: 50rpx;
				.type{
					font-size: 24rpx;
				}
			}
			.screen-type{
				margin:0 30rpx;
				padding-bottom: 20rpx;
				display: flex;
				flex-wrap: wrap;
				border-bottom: 1px solid #eee;
				.tab{
					min-width: 120rpx;
					height: 60rpx;
					padding:0 30rpx;
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
			.no-border{
				border: none;
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
		.cal-header{
			font-size: 36rpx;
			height: 100rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			position: relative;
			.cuIcon-back{
			
				position: absolute;
				left: 20rpx;
			}
		}
	}
	
</style>
