<template>
	<view class="container bg-color-white" :style="{'height':screenHeight + 'px'}">
		<view class="header">
			<text class="cuIcon-close back-icon text-color-9" @click="back"></text>
			<view class="title">筛选</view>
		</view>
		<view class="dimension">
			<view class="title text-color-3">查询维度<text class="type margin-left-xs text-color-3">单选</text></view>
			<view class="screen-type">
				<view class="tab text-color-9" @click="changeCondition" data-type="commission" :class="{'on':condition === 'commission'}">提成类型</view>
				<view class="tab margin-left text-color-9" @click="changeCondition" data-type="role" :class="{'on':condition === 'role'}">角色身份</view>
			</view>
		</view>
		
		<view class="times-slot">
			<view class="time text-color-3">时间段</view>
			<view class="select-time">
				<view class="s-time" @click="showModal" data-target="DrawerModalR" data-time="1">
					<text class="text-color-3">{{newDate1}}</text>
					<image class="img" src="https://img02.mockplus.cn/idoc/ps/2020-10-28/2856ba80-192c-11eb-ac86-07ce5f71c012.png" mode=""></image>
				</view>
				<text class="text-color-9">-</text>
				<view class="e-time" @click="showModal" data-target="DrawerModalR" data-time="2">
					<text class="text-color-3">{{newDate2}}</text>
					<image class="img" src="https://img02.mockplus.cn/idoc/ps/2020-10-28/2856ba80-192c-11eb-ac86-07ce5f71c012.png" mode=""></image>
				</view>
			</view>
		</view>
		
		<view class="submit-container">
			<view class="reset" @click="userOperate" data-type="reset">重置</view>
			<view class="submit on" @click="userOperate" data-type="submit">确定</view>
		</view>
		
		<view class="cu-modal drawer-modal justify-end calendar-box" :class="modalName=='DrawerModalR'?'show':''" @tap="hideModal">
			<view class="cu-dialog basis-xl" @tap.stop="" :style="[{width:'700px',height:'100vh'}]">
				<view class="cu-list menu text-left">
					<view class="back-icon">
						<text class="cuIcon-back" @click="hideModal"></text>
						<view class="text-color-3 text-center title">选择日期</view>
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

		<view class="cu-load load-modal" v-show="loadModal">
			<image src="/static/logo.png" mode="aspectFit"></image>
			<view class="gray-text">加载中...</view>
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
					checked: true,
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
				screenHeight:0,
				loadModal: false,
				newDate1:'',
				newDate2:'',
				dateTime:'',
				condition:'commission',
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
		onShow(){
			this.initData();
		},
		methods:{
			initData(){
				uni.getSystemInfo({
					success:(res) => {
						this.screenHeight = res.windowHeight
					}
				})
				let date = new Date();
				let d = this.dateFormat("YYYY-mm-dd", date);
				this.newDate1 = this.newDate2  = d;
			},
			dateFormat(fmt, date) {
			    let ret;
			    const opt = {
			        "Y+": date.getFullYear().toString(),        // 年
			        "m+": (date.getMonth() + 1).toString(),     // 月
			        "d+": date.getDate().toString(),            // 日
			        "H+": date.getHours().toString(),           // 时
			        "M+": date.getMinutes().toString(),         // 分
			        "S+": date.getSeconds().toString()          // 秒
			        // 有其他格式化字符需求可以继续添加，必须转化成字符串
			    };
			    for (let k in opt) {
			        ret = new RegExp("(" + k + ")").exec(fmt);
			        if (ret) {
			            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
			        };
			    };
			    return fmt;
			},
			back(){
				uni.redirectTo({
					url:`../DataOverview/data_overview`
				})
			},
			changeCondition(e){
				this.condition = e.currentTarget.dataset.type
			},
			userOperate(e){
				this.operate = e.currentTarget.dataset.type;
				if(this.operate === 'reset'){
					this.condition = 'commission';
					this.initData();
				}else{
					this.loadModal = true;
					setTimeout(() => {
						this.loadModal = false;
						uni.redirectTo({
							url:`../DataOverview/data_overview?condition=${this.condition}&time1=${this.newDate1}&time2=${this.newDate2}`
						})
					}, 2000)
				}
			},
			showModal(e) {
				this.dateTime = e.currentTarget.dataset.time;
				this.modalName = e.currentTarget.dataset.target;
			},
			hideModal(e) {
				this.modalName = null
			},
			change(e) {
				if(e.range.data.length > 0){
					this.newDate1 = e.range.begin;
					this.newDate2 = e.range.end;
					return
				}
				if(this.dateTime == 1){
					this.newDate1 = e.fulldate;
				}else if(this.dateTime == 2){
					this.newDate2 = e.fulldate;
				}
				this.timeData = e;
			},
			onMonthSelect(m) {
				this.slmonth = m;
				this.onInitInfo();
			},
			// 判断时间区间
			valDate([year,month,date],[year1,month1,date1]){
				let msg = '';
				if(year > year1){
					msg = '请选择合理的时间区间'
					return false
				}
				if(month > month1){
					msg = '请选择合理的时间区间'
					return false
				}
				if(date > date1){
					msg = '请选择合理的时间区间'
					return false
				}
				// return {msg,true}
			}
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
				position: absolute;
				left: 0;
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
				border-bottom: 1px solid #eee;
				display: flex;
				.tab{
					width: 190rpx;
					height: 60rpx;
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
		.calendar-box:before{
			width: 0px;
		}
	}
	.back-icon{
		padding: 20rpx;
		font-size: 40rpx;
		.title{
			font-size: 36rpx;
			line-height: 50rpx;
		}
	}
</style>
