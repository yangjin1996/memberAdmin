<template>
	<view class="container">
		<view class="contents ">
			<view class="padding bg-white text-black hd-head-show margin-top ">
				<view class="flex hd-head-content">
					<view class="flex-sub text-center">
						<text>总收益</text>
						<text class="margin-left text-size-50 text-bold">{{ profitNum }}</text>
					</view>
				</view>
				<view class="grid col-2 margin-top-xl text-center">
					<view>
						<view class="text-bold text-red text-xxl">+{{ yprofitNum!=null?yprofitNum:0 }}</view>
						<view >昨日收益</view>
					</view>
					<view>
						<view class="text-bold text-red text-xxl">+{{ profitNum }}</view>
						<view >累计收益</view>
					</view>
				</view>
				
			</view>
		</view>
		<scroll-view scroll-x class="bg-white nav text-center margin-line">
			<view class="cu-item " :class="index == TabCur ? 'tabar-text cur' : 'taber-text-gray'" v-for="(item, index) in tabs" :key="index" @tap="tabSelect" :data-id="index">
				{{ item.name }}
			</view>
		</scroll-view>
		<view class="table-content margin-line" v-if="TabCur == 0">
			<cell-list v-if="getMyProfitMx.length>0" :datas="getMyProfitMx"></cell-list>
			<cu-more title="没有更多积分了"></cu-more>
		</view>
		<view class="table-content margin-line" v-if="TabCur == 1">
			<classesgrids2 v-if="share_profitMx.length>0" :datas="share_profitMx" @onclickitem="openProjectFlow"></classesgrids2>
			<cu-more title="没有更多记录了"></cu-more>
		</view>
		<view class="table-content margin-line" v-if="TabCur == 2">
			<classesgrids :datas="cases" @onclickitem="openProjectFlow"></classesgrids>
			<cu-more title="没有更多记录了"></cu-more>
		</view>
		
	</view>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import classesgrids from '@/components/single/list/classes_grids_model2.vue'
import classesgrids2 from '@/components/single/list/classes_grids_model3.vue'
import cellList from '@/components/single/list/cell-list.vue';
export default {
	computed: {
		...mapState(['hasLogin', 'forcedLogin', 'userinfo'])
	},
	components: {cellList,classesgrids,classesgrids2},
	data() {
		return {
			TabCur: 0,
			scrollLeft: 0,
			tabs: [
				{
					id: 0,
					name: '收益明细'
				},{
					id: 1,
					name: '分享明细'
				},
				{
					id: 2,
					name: '兑换记录'
				}
			],
			uid: 0,
			
			profitNum: 2312,
			yprofitNum: 321,
			all_income: 1321,
			share_profitMx:[],
			getMyProfitMx: [
				{
					title: '打卡积分',
					value: '10'
				}
			],cases: []
		};
	},
	onLoad() {},
	onShow() {
		this.uid = this.userinfo.uid;
		this.onInit(0);
	},
	onPullDownRefresh: function() {
		var that = this;
		setTimeout(function() {
			that.onInit(1);
		}, 200);
	},
	onShareAppMessage: function(res) {
		if (res.from === 'button') {
			// 来自页面内分享按钮
			console.log(res.target);
		}
		let params="token="+this.userinfo.uid;
		return this.controller.getSharePage(params);
	},
	methods: {
		...mapMutations(['logout', 'login', 'loginsoure']),
		tabSelect(e) {
			this.TabCur = e.currentTarget.dataset.id;
			this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
		},
		onInit: function(state) {
			var that = this;
			let params = {
				user_id: this.uid
			};
			console.log(params);
			this.$axios.post(
				this.umcons.serviceAddress.PROFIT_INDEX,
				params,
				function(res, code) {
					if (code == 0) {
						var data = res;
						that.getMyProfitMx=res.getMyProfitMx;
						that.share_profitMx=res.share_profitMx;
						that.profitNum=res.profitNum;
						that.yprofitNum=res.yprofitNum;
						console.log(res);
					}
					uni.stopPullDownRefresh();
				},
				function(error) {
					console.log(error);
					uni.stopPullDownRefresh();
				},state
			);
		},openProjectFlow:function(index){
			
		}
	}
};
</script>

<style scoped>
.round-21 {
	border-radius: 21upx;
}
.text-center view{
	text-align: center;
}
.hd-head-show{
	
	height: 400upx;
}
.hd-head-content{
	line-height: 150upx;
}
.text-size-50{
	color: #FF0000;
}
</style>
