<template>
	<view class="container">
		<cu-bar2 bgColor="bg-gradual-blue" :isBack="true"><block slot="content" class="page-name">操作条</block></cu-bar2>
		<view :class="{ 'calendar-content-active ': infoShow }" class="calendar-content">
			<view v-if="showCalendar">
				<!-- 插入模式 -->
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
				<uni-calendar-green
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
				<uni-calendar-total
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
</template>

<script>
import uniCalendar from '@/components/group/uni-calendar/uni-calendar.vue';
import uniCalendarGreen from '@/components/group/uni-calendar/uni-calendar-green.vue';
import uniCalendarTotal from '@/components/group/uni-calendar/uni-calendar-total.vue';
import { mapState, mapMutations } from 'vuex';
export default {
	computed: mapState(['userinfo', 'isteacher']),
	components: {
		uniCalendar,
		uniCalendarGreen,
		uniCalendarTotal
	},
	data() {
		/**
		 * 时间计算
		 */
		function getDate(date, AddMonthCount = 0, AddDayCount = 0) {
			if (typeof date !== 'object') {
				date = date.replace(/-/g, '/');
			}
			let dd = new Date(date);
			dd.setMonth(dd.getMonth() + AddMonthCount); // 获取AddDayCount天后的日期
			dd.setDate(dd.getDate() + AddDayCount); // 获取AddDayCount天后的日期
			let y = dd.getFullYear();
			let m = dd.getMonth() + 1 < 10 ? '0' + (dd.getMonth() + 1) : dd.getMonth() + 1; // 获取当前月份的日期，不足10补0
			let d = dd.getDate() < 10 ? '0' + dd.getDate() : dd.getDate(); // 获取当前几号，不足10补0
			return y + '-' + m + '-' + d;
		}
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
			date: '',
			startDate: '',
			endDate: '',
			timeData: {
				clockinfo: '',
				date: '',
				fulldate: '',
				lunar: '',
				month: '',
				range: '',
				year: ''
			},
			selected: [],
			count: 0,
			infoShow: false,
			showCalendar: false,
			cid: 0,
			uid: 0,
			trans_up: '',
			trans_down: '',
			slmonth: ''
		};
	},
	onLoad(prop) {
		setTimeout(() => {
			this.showCalendar = true;
		}, 350);
		this.cid = prop.cid;
		this.uid = this.userinfo.uid;
		this.onInitInfo(0);
		let height = this.ScreenHeight - 400;
		this.trans_up = 'height: ' + height + 'px; transform: translateY(0px);';
		this.trans_down = 'height: ' + height + 'px; transform: translateY(' + (height - 52) + 'px);';
	},
	onPullDownRefresh: function() {
		var that = this;
		setTimeout(function() {
			that.onInitInfo(1);
		}, 200);
	},
	methods: {
		toggle(index) {
			this.tags[index].checked = !this.tags[index].checked;
			this.reckon();
		},
		open() {
			this.reckon();
			this.$refs.calendar.open();
		},
		reckon() {
			if (this.tags[1].checked) {
				this.startDate = this.tags[1].value;
			} else {
				this.startDate = '';
			}
			if (this.tags[2].checked) {
				this.endDate = this.tags[2].value;
			} else {
				this.endDate = '';
			}
			if (this.tags[4].checked) {
				this.date = this.tags[4].value;
			} else {
				this.date = '';
			}
			// if (this.tags[6].checked) {
			// 	this.selected = this.tags[6].value
			// } else {
			// 	this.selected = []
			// }
		},
		change(e) {
			console.log('change 返回:', e);
			this.timeData = e;
			this.infoShow = true;
		},
		confirm(e) {
			console.log('confirm 返回:', e);
			this.timeData = e;
			this.infoShow = true;
		},
		retract() {
			this.infoShow = !this.infoShow;
		},
		onMonthSelect(m) {
			this.slmonth = m;
			this.onInitInfo();
		},
		onInitInfo: function(status) {
			let month = this.slmonth == '' ? new Date().getFullYear() + '-' + (new Date().getMonth() + 1) : this.slmonth;
			var params = {
				user_id: this.uid,
				date: month + '-01'
			};
			let sl = [];
			console.log(params);
			var that = this;
			this.$axios.post(
				this.umcons.serviceAddress.MY_DATELISt,
				params,
				function(data, code) {
					console.log(data);
					that.count = data.monthCheck;
					if (code == 0) {
						for (let i = 0, len = data.arr.length; i < len; i++) {
							let param = {
								date: data.arr[i],
								info: '打卡'
							};
							sl.push(param);
						}
						that.selected = sl;
						console.log(that.selected);
						that.reckon();
					}
					uni.stopPullDownRefresh();
				},
				function(error) {
					uni.stopPullDownRefresh();
					that.refresh = 1;
					console.log(error);
				},
				status
			);
		}
	}
};
</script>

<style>
page {
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	background-color: #efeff4;
}

view {
	font-size: 28upx;
	line-height: inherit;
}

.m-button {
	width: 185upx;
	height: 61upx;
	border-radius: 99upx;
	background: linear-gradient(-90deg, rgba(247, 139, 46, 1), rgba(255, 187, 91, 1));
}

.card-box {
	height: 180upx;
	box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.17);
	border-radius: 20upx;
}

.card-box image {
	width: 73upx;
}

.example {
	padding: 0 30upx 30upx;
}

.example-title {
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 32upx;
	color: #464e52;
	padding: 30upx 30upx 30upx 50upx;
	margin-top: 20upx;
	position: relative;
	background-color: #fdfdfd;
	border-bottom: 1px #f5f5f5 solid;
}

.example-title__after {
	position: relative;
	color: #031e3c;
}

.example-title:after {
	content: '';
	position: absolute;
	left: 30upx;
	margin: auto;
	top: 0;
	bottom: 0;
	width: 6upx;
	height: 32upx;
	background-color: #ccc;
}

.example .example-title {
	margin: 40upx 0;
}

.example-body {
	padding: 30upx;
	background: #fff;
}

.example-info {
	padding: 30upx;
	color: #3b4144;
	background: #fff;
}

.calendar-content {
	padding-bottom: 100upx;
	font-size: 26upx;
}

.calendar-content-active {
	padding-bottom: 450upx;
}

.calendar-tags-group {
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: space-between;
}

.calendar-tags {
	width: 100%;
	box-sizing: border-box;
}

.calendar-tags-item {
	padding: 20upx 20upx;
	border: 1px rgba(0, 0, 0, 0.2) solid;
	color: #333;
	border-radius: 10upx;
	text-align: center;
	margin: 10upx;
	background: #f8f8f8;
}

.calendar-tags-item:active {
	background: #f8f8f8;
}

.checked .calendar-tags-item {
	background: rgb(0, 122, 255);
	color: #fff;
	border: 1px rgba(0, 0, 0, 0.1) solid;
}

.calendar-button {
	font-weight: bold;
	font-size: 32upx;
}

.calendar-button-groups {
	position: absolute;
	width: 100%;
	bottom: 0;
	display: flex;
}

.calendar-button-confirm {
	width: 50%;
	margin: 10upx;
	border: 1px #eee solid;
	font-size: 32upx;
}

.calendar-button-confirm:after {
	border: none;
}

.calendar-box {
	position: fixed;
	bottom: 0;
	background: #fff;
	color: #444;
	line-height: 1.5;
	width: 100%;
	transition: all 0.3s;
}

.calendar-info-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20upx 30upx;
	padding-left: 0;
	border-top: 1px #eee solid;
	border-bottom: 1px #eee solid;
}

.calendar-title {
	/* height: 80upx; */
	font-weight: bold;
	color: #666;
	font-size: 32upx;
	border-left: 2px #0d9ebb solid;
	padding: 0upx 20upx;
	margin: 0 20upx;
}

.calendar-info {
	overflow-y: scroll;
	height: 260upx;
	padding: 30upx 30upx;
}
</style>
