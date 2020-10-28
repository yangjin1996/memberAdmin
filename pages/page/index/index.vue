<template>
	<scroll-view>
		<!-- 轮播滚动条 -->
		<view class="bg-white margin-top-sm">
			<swiper
				class="screen-swiper padding"
				indicator-dots="true"
				circular="true"
				autoplay="true"
				interval="4000"
				duration="600"
				indicator-color="#DEEFFF"
				indicator-active-color="#66CCFF"
			>
				<swiper-item v-for="(item, index) in banner" :key="index" @click="toGoods" :data-url="item.url">
					<view :style="'background-image:url(' + item.img + ')'" style="height: 100%;" class="radius bg-img"></view>
				</swiper-item>
			</swiper>
		</view>

		<!-- 热门特区 -->
		<view class="bg-white margin-top-sm">
			<view class="padding-sm">热门特区</view>
			<!-- 网格信息-快捷导航 -->
			<nav-list-grid :datas="label" @onclick="clickMenu"></nav-list-grid>
		</view>
		<view class="bg-white margin-top-sm" v-if="coupon.length>0">
			<cu-cell title="优惠券" url="../discount/discount"><block slot="right">更多优惠劵</block></cu-cell>
			<!-- 优惠券信息 -->
			<card-media :datas="coupon" @onclick="toChild"></card-media>
		</view>
		<!-- 导航栏 -->
		<scroll-view scroll-x class="bg-white nav margin-top-xs">
			<view class="flex text-center">
				<view
					class="cu-item flex-sub text-shadow"
					:class="index == TabCur ? 'text-yellow cur' : ''"
					v-for="(item, index) in tabars"
					:key="index"
					:data-id="index"
					:data-tag="item.id"
					@click="tabSelect"
				>
					{{ item.name }}
				</view>
			</view>
		</scroll-view>
		<!-- 商品信息 -->
		<view v-if="shop.length > 0">
			<shoplist :tags="label" :type="TabCur" :datas="shop" @onclick="onClickShop"></shoplist>
			<cu-more title="没有更多商品了"></cu-more>
		</view>
	</scroll-view>
</template>

<script>
import shoplist from '@/components/single/list/shoplist.vue';
import cardMedia from '@/components/single/card/card_media.vue';
import navListGrid from '@/components/single/list/nav-list-grid.vue';
import { mapState, mapMutations } from 'vuex';
export default {
	computed: mapState(['label','tabars','hasLogin','userinfo','shareinfo','inviter']),
	components: {
		shoplist,
		cardMedia,
		navListGrid
	},
	data() {
		return {
			TabCur: 0,
			scrollLeft: 0,
			pageNo: 1,
			pageSize: 20,
			loadMoreText: '',
			total: 0,
			uid:-1,
			banner: [
				{
					id: 1,
					img: 'http://zs.homeeyes.cn/upload/images/112443645765756.jpg',
					url: null,
					is_up: 1,
					created_at: '2019-10-18 15:57:06',
					updated_at: '2019-10-18 15:57:06'
				}
			],
			shop: [
				{
					id: 1,
					name: 'xxx地砖',
					img: 'http://zs.homeeyes.cn/upload/images/b87588984db0ccc04a2724baccf2e0ae.jpg',
					brand_id: 1,
					label_id: 1,
					shop_fl_id: 1,
					y_price: '1000',
					n_price: '888',
					is_up: 1,
					xl: 2234,
					created_at: '2019-10-18 16:17:08',
					updated_at: '2019-10-18 16:17:08'
				}
			],
			coupon: [
				{
					id: 1,
					name: '大红地砖',
					price: '100',
					is_up: 1,
					brand_id: 0,
					e_time: '2019-10-31 00:00:00',
					visitor: 3,
					geted: 0,
					shared: 0,
					created_at: '2019-10-18 16:12:49',
					updated_at: '2019-10-18 16:12:49'
				}
			]
		};
	},
	onLoad: function(prop) {
		if(this.util.isExist(prop.token)){
			this.setinviter(prop.token);
		}
	},
	onShow() {
		this.pageNo = 1;
		var that = this;
		if(this.userinfo.uid>0){
			this.uid=this.userinfo.uid;
		}
		
		setTimeout(function() {
			that.onInit(0);
		}, 200);
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
			this.onInit();
		}, 500);
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
		...mapMutations(['updataLab','updataTabs','setinviter','setShopList','setSharePath']),
		tabSelect(e) {
			this.TabCur = e.currentTarget.dataset.tag;
			this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
		},
		onInit: function(type) {
			let that=this;
			this.$controller.onHome(this.pageNo,this.$store.state,type,function(data,error,msg){
				console.log(data);
				if (error == 0) {
					that.total = data.total;
					that.coupon = data.coupon;
					that.banner = data.banner;
					if (that.pageNo == 1) {
						that.shop = data.shop;
					} else {
						that.shop = that.shop.concat(data.shop);
					}
					that.updataTabs(data.shop_fl);
					that.setShopList(data.shop);
					let array = that.label;
					for (let i = 0, len = data.label.length; i < len; i++) {
						array[i].title = data.label[i].name;
						array[i].id = data.label[i].id;
						array[i].show = true;
					}
					that.updataLab(array);
				}
			});
			
		},
		onClickShop: function(id) {
			console.log(id)
			uni.navigateTo({
				url: 'goods_detail?id=' + id
			});
		},
		toGoods(e) {
			let url = e.currentTarget.dataset.url;
			if (this.util.isExist(url)) {
				let path = '../webview/webview?url=' + url;
				uni.navigateTo({
					url: path
				});
			}
		},
		toPage(page) {
			uni.navigateTo({
				url: page
			});
		},
		toChild(index) {
			let id=this.coupon[index].id;
			let path = '../discount/discount_detail?id=' + id;
			uni.navigateTo({
				url: path
			});
		},clickMenu:function(index){
		  let id=this.label[index].id;
		  let title=this.label[index].title;
		  if(id!=4){
			  let path='./discount_list?id='+id+'&title='+title;
			  uni.navigateTo({
			  	url:path
			  })
		  }else{
			  uni.navigateTo({
			  	url:'./brand_list'
			  })
		  }
		}
		
	}
};
</script>

<style>
.padding-h-50 {
	padding: 50upx 0px;
}
.border-black {
	border: 1px solid black;
}
.border-radius-14 {
	border-radius: 14upx;
}
.no-margin-top {
	margin-top: 0px !important;
}
</style>
