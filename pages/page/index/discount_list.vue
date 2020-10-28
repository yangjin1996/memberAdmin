<template>
	<scroll-view>
		<!-- 导航栏 -->
		<scroll-view scroll-x class="bg-white nav margin-top-xs">
			<view class="flex text-center">
				<view
					class="cu-item flex-sub text-shadow"
					v-for="(item, index) in shop_fl"
					:class="item.id == TabCur ? 'text-yellow cur' : ''"
					:key="index"
					:data-id="item.id"
					@click="tabSelect"
				>
					{{ item.name }}
				</view>
			</view>
		</scroll-view>
		<!-- 商品信息 -->
		<view v-if="shops.length > 0">
			<shoplist :tags="label" :type="TabCur" :datas="shops" @onclick="onClickShop"></shoplist>
			<cu-more title="没有更多商品了"></cu-more>
		</view>
	</scroll-view>
</template>

<script>
import shoplist from '@/components/single/list/shoplist.vue';
import { mapState, mapMutations } from 'vuex';
export default {
	computed: mapState(['label','userinfo']),
	components: {
		shoplist
	},
	data() {
		return {
			TabCur: 0,
			scrollLeft: 0,
			pageNo: 1,
			pageSize: 20,
			refresh: 0,
			loadMoreText: '',
			total: 0,
			label_id:0,
			shop_fl: [
				{
					id: 0,
					name: '全部',
					is_up: 1,
					created_at: '2019-10-18 16:18:20',
					updated_at: '2019-10-18 16:18:20'
				}
			],
			shops: [
				
			]
			
		};
	},
	onLoad: function(prop) {
		this.label_id=prop.id;
		if(this.util.isExist(prop.title)){
			uni.setNavigationBarTitle({
			    title: prop.title
			});
		}
	},
	onShow() {
		this.onInit(0);
	},
	onPullDownRefresh: function() {
		var that = this;
		this.loadMoreText = '';
		this.pageNo = 1;
		setTimeout(function() {
			that.onInit(1);
		}, 500);
	},
	onReachBottom() {
		this.pageNo++;
		if (this.pageNo > this.total) {
			this.loadMoreText = '没有更多数据了!';
			return;
		}
		setTimeout(() => {
			this.onInit(1);
		}, 500);
	},onShareAppMessage: function(res) {
		if (res.from === 'button') {
			// 来自页面内分享按钮
			console.log(res.target);
		}
		let params="token="+this.userinfo.uid;
		return this.controller.getSharePage(params);
	},
	methods: {
		tabSelect(e) {
			this.TabCur = e.currentTarget.dataset.id;
			this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
		},
		onInit: function(state) {
			var that=this;
			this.$controller.onHotDatatls(this.pageNo,this.label_id,this.$store.state,state,function(data,error,msg){
				console.log(data);
				if (error == 0) {
					that.total=data.total;
					if(that.shop_fl.length==1){
						that.shop_fl=that.shop_fl.concat(data.shop_fl);
					}
					if(that.pageNo==1){
						that.shops=data.shops;
					}else{
						that.shops=that.shops.concat(data.shops);
					}
				}
			});
		},
		onClickShop: function(id) {
			uni.navigateTo({
				url: 'goods_detail?id=' + id
			});
		}

	}
};
</script>

<style scoped>

</style>
