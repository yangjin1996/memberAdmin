<template>
	<scroll-view>
		<image :src="brand.logo" mode="aspectFill" class="margin-top-sm img-top"></image>

		<view class="flex bg-white padding-sm text-black avatar">
			<image class="round avatar logo" :src="brand.logo" mode="widthFix"></image>
			<view class="margin-left-sm">
				<view class="flex align-center">
					<view class="text-bold">{{brand.name}}</view>
					<text class="cu-tag round margin-left-sm bg-orange text-white text-bold">{{brand.shop_num}}件商品</text>
				</view>
				<view class="text-grey text-sm margin-top-xs">
					{{brand.info}}
				</view>
			</view>
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
import { mapState, mapMutations } from 'vuex';
export default {
	computed: mapState(['label','tabars','userinfo','inviter']),
	components: {
		shoplist
	},
	data() {
		return {
			TabCur: 0,
			scrollLeft: 0,
			pageNo: 1,
			pageSize: 20,
			total: 0,
			brand_id:0,
			uid:0,
			shop_fl: [
				{
					id: 0,
					name: '全部',
					is_up: 1,
					created_at: '2019-10-18 16:18:20',
					updated_at: '2019-10-18 16:18:20'
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
			brand: {
				id: 1,
				name: '品牌瓷砖',
				logo: 'http://zs.homeeyes.cn/upload/images/b87588984db0ccc04a2724baccf2e0ae.jpg',
				is_up: 1,
				info: '品牌瓷砖介绍',
				created_at: '2019-10-18 16:58:24',
				updated_at: '2019-10-18 16:58:24',
				shop_num: 3
			},
			img: '',
			avatar:
				'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571221001541&di=1ffdfd1650b8e15de9fc377a85373e67&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20161104%2FImg472312175.jpg'
		};
	},
	onLoad: function(option) {
		this.brand_id = option.id;
	},onShow() {
		this.uid=this.userinfo.uid;
		this.onInit(0);
	},onPullDownRefresh: function() {
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
		tabSelect(e) {
			this.TabCur = e.currentTarget.dataset.tag;
			this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
		},
		onInit: function(state) {
			var params = {
				pageNo: this.pageNo,
				pageSize: this.pageSize,
				brand_id:this.brand_id,
				grade_uid:this.inviter
			};
			var that = this;
			this.$axios.post(
				this.umcons.serviceAddress.BRAND_DATAILS,
				params,
				function(res, code) {
					if (code == 0) {
						var data = res;
						that.brand = res.brand;
						that.shop = res.shop;
					}
					uni.stopPullDownRefresh();
				},
				function(error) {
					uni.stopPullDownRefresh();
					console.log(error);
				},
				state
			);
		},
		onItemClick(nav, number, items, s_items) {
			items.length = 0;
			for (let l = 0; l < nav.length; l++) {
				nav[l].onclick = false;
			}
			nav[number].onclick = true;

			for (var t in s_items) {
				if (s_items[t].type == nav[number].name || nav[number].name == '全部') {
					items.push(s_items[t]);
				}
			}
		},
		toGoods(img) {
			var u_img = encodeURIComponent(img);
			uni.navigateTo({
				url: 'goods_detail?' + 'img=' + u_img
			});
		},
		onClickShop: function(id) {
			//console.log(id)
			uni.navigateTo({
				url: 'goods_detail?id=' + id
			});
		}
	}
};
</script>

<style>
image {
	width: 88%;
	height: 400upx;
}
button {
	display: inline-block;
}
view.cu-tag {
	position: absolute;
	z-index: 999;
	border-radius: 9upx;
}
.br {
	margin-top: 375upx;
	margin-left: -145upx;
	text-decoration: underline;
	color: red;
	font-size: 26upx;
	padding: 0px 0px;
	border-radius: 0px;
}
image.img-top {
	width: 100%;
}

.logo{
	width: 120upx;
	height: 120upx;
}
</style>
