<template>
	<view class="container">
		<view class="cu-list grid" :class="['col-' + cols, gridBorder ? '' : 'no-border']">
			<view class="cu-item text-left" style="line-height: 46rpx;" v-for="(item, index) in datas" :key="index" @click="onClick" :data-index="index">
				<view class="text-bold text-black text-30">{{ item.name }}</view>
				<view class="text-black">今日：<span>{{ item.oldData }}</span></view>
				<view class="text-black">昨日：<span>{{ item.newData }}</span></view>
			</view>
		</view>
		<view class="data-scale" @click="showModal" data-target="DrawerModalR">
			<u-echarts chartType="ring" :opts="opts"></u-echarts>
		</view>
		
		<view class="cu-modal drawer-modal justify-end" :class="modalName=='DrawerModalR'?'show':''"  @tap="hideModal">
			<view class="cu-dialog basis-lg" @tap.stop="" :style="[{width:'80vw',height:'100vh'}]">
				<view class="cu-list menu text-left">
					<view class="cu-item arrow" v-for="(item,index) in 2" :key="index">
						<view class="content">
							<view @click="showCalendars">Item {{index +1}}</view>
						</view>
					</view>
					
					<view class="" v-show="showCalendar">
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
			uni.getStorageInfo({
			    success: (res) => {
			        console.log(res.keys);
			        console.log(res.currentSize);
			        console.log(res.limitSize);
			    }
			});
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
				// this.$emit('onclick', index);
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
		}
	}
</script>

<style lang="scss" scoped>
	.cu-item{
		padding-left: 30rpx !important;
	}
	.data-scale{
		width:100%;
		height:500rpx;
		background-color: #fff;
		margin-top: 40rpx;
	}
</style>
