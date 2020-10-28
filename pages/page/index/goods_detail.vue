<template>
	<scroll-view>
		<view class="container">
			<image :src="shopinfo.img" mode="aspectFill" class="margin-top-sm"></image>
			<itemtotal :datas="total" @onclickitem="onClickMenu">
				<block slot="left" class="text-center">访问人数</block>
				<block slot="center" class="text-center">商品销量</block>
				<block slot="right" class="text-center">分享人数</block>
			</itemtotal>
			<view class="bg-white padding-sm margin-top-xs text-black">
				<view>
					<text class="text-bold">{{ shopinfo.name }}</text>
					<text class="cu-tag round padding-left padding-right bg-orange margin-left-sm">{{ shopinfo.label_name }}</text>
				</view>
				<view class="margin-top-xs">
					<text class="text-red text-bold text-xl">￥{{ shopinfo.n_price }}</text>
					<text class="text-grey margin-left-sm" style="text-decoration: line-through;">￥{{ shopinfo.y_price }}</text>
				</view>
				<view class="margin-top-xs">销量{{ shopinfo.xl }}件</view>
			</view>
			<cu-cell title="商品详情"  isTop="true" ></cu-cell>

			<!-- 导航栏 -->
			<!-- <scroll-view scroll-x class="bg-white nav margin-top-xs">
			<view class="flex text-center">
				<view
					class="cu-item flex-sub text-shadow"
					:class="item.onclick ? 'text-blue cur' : ''"
					v-for="(item, index) in nav_list"
					:key="index"
					@click="onItemClick(nav_list, index, img_list, s_img_list)"
				>
					{{ item.name }}
				</view>
			</view>
		</scroll-view> -->
			<view >
				<image v-for="(item,index) in shopinfo.imageinfo" :key="index" :src="item" :data-src="image" @tap="previewImage" class="img-list" mode="widthFix"></image>
			</view>
			
			<!-- 推荐商品 -->
			<cu-cell title="推荐商品" isTop="true"></cu-cell>
			<view v-if="goods_list.length > 0">
				<shoplist :tags="label" type="0" :datas="goods_list" @onclick="onClickShop"></shoplist>
				<cu-more title="没有更多商品了"></cu-more>
			</view>

			<view class="cu-bar bg-white tabbar border shop foot">
				<button class="action" open-type="contact">
					<view class="cuIcon-service text-green"><view class="cu-tag badge"></view></view>
					联系我们
				</button>
				<view class="action" @click="seekDiscount">
					<view class="cuIcon-cart"><!-- <view class="cu-tag badge">99</view> --></view>
					我的订单
				</view>
				<view class="bg-orange submit" @tap="showModal" data-target="bottomModal">分享商品</view>
				<view class="submit" :class="isJoin ? 'bg-grey' : 'bg-red'" @click="onCommit">{{ isJoin ? '已参加' : '立即预购' }}</view>
			</view>
			<view class="cu-modal bottom-modal" @tap="hideModal" :class="modalName == 'bottomModal' ? 'show' : ''">
				<view class="cu-dialog">
					<view class="cu-list grid col-4 no-border">
						<view class="cu-item">
							<button open-type="share" class="cu-btn cuIcon-weixin text-green"></button>
							<text>微信分享</text>
						</view>
						<view class="cu-item" @click="onShare" data-index="1">
							<view class="cuIcon-pic text-orange"></view>
							<text>生成专属页</text>
						</view>
						<view class="cu-item" @click="onShare" data-index="2">
							<view class="cuIcon-copy text-orange"></view>
							<text>复制链接</text>
						</view>
						<view class="cu-item" @click="onShare" data-index="3">
							<view class="cuIcon-copy text-orange"></view>
							<text>保存图片</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</scroll-view>
</template>

<script>
import itemtotal from '@/components/single/grid/item_total.vue';
import shoplist from '@/components/single/list/shoplist.vue';
import { mapState, mapMutations } from 'vuex';
export default {
	computed: mapState(['userinfo', 'label','hasLogin','inviter']),
	components: {
		itemtotal,
		shoplist
	},
	data() {
		return {
			isJoin: false,
			cid: 0,
			shop_id: 0,
			modalName: null,
			total: {
				value1: '1330人',
				value2: '1230人',
				value3: '2230人'
			},
			name: '',
			img: '',
			shopinfo: {},
			token:0,
			goods_list: [
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
			shareinfo: {
				title: '都市之佳',
				desc: '邀请您体验透明装修',
				path: 'pages/index/index?',
				logo: 'https://www.homeeyes.cn/app/images/icon_logo.png'
			}
		};
	},
	onLoad: function(option) {
		this.shop_id = option.id;
		this.token = option.token;
		if(this.util.isExist(option.token)){
			this.setinviter(option.token);
		}
	},
	onShow() {
		if(this.hasLogin){
			this.uid = this.userinfo.uid;
			this.onInit(0);
		}else{
			uni.navigateTo({
				url:'../login/login'
			})
		}
		
	},
	onShareAppMessage: function(res) {
		if (res.from === 'button') {
			// 来自页面内分享按钮
			console.log(res.target);
		}
		this.modalName = null;
		let url = 'pages/index/goods_detail?id='+this.shop_id+'&token='+this.uid+'&type=1';
		this.shareinfo.path = url;
		return this.shareinfo;
	},
	onPullDownRefresh: function() {
		var that = this;
		setTimeout(function() {
			that.onInit(1);
		}, 200);
	},
	methods: {
		...mapMutations(['setinviter']),
		onInit: function(state) {
			var params = {
				user_id:this.uid,
				shop_id: this.shop_id,
				grade_uid:this.inviter
			};
			var that = this;
			this.$axios.post(
				this.umcons.serviceAddress.SHOP_DATAILS,
				params,
				function(res, code) {
					if (code == 0) {
						var data = res;
						that.goods_list = res.otherShop;
						that.shopinfo = res.shop;
						that.total.value1=res.shop.visit;
						that.total.value2=res.shop.xl;
						that.total.value3=res.shop.shared;
						console.log(res);
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
		onShare: function(e) {
			let index = e.currentTarget.dataset.index;
			this.modalName = null;
			if (index == 0) {
			} else if (index == 1) {
				let path='../stafffinvite/stafffinvite?token='+this.uid+'&pid='+this.shop_id+'&type=1';
				uni.navigateTo({
					url: path
				});
			} else if (index == 2) {
				let path='https://zs.homeeyes.cn/app/future/#/pages/index/goods_detail?id='+this.shop_id+'&token='+this.id+'&type=1';
				uni.setClipboardData({
					data: path,
					success: function() {
						console.log('success');
					}
				});
			} else if (index == 3) {
				let path='../creatimage/creatimage?id='+this.shop_id+'&type=1';
				uni.navigateTo({
					url: path
				});
			}
		},
		showModal(e) {
			this.modalName = e.currentTarget.dataset.target;
		},
		hideModal(e) {
			this.modalName = null;
		},
		toGoods(img) {
			var u_img = encodeURIComponent(img);
			uni.navigateTo({
				url: 'goods_detail?' + 'img=' + u_img
			});
		},
		seekDiscount: function() {
			uni.navigateTo({
				url: '../order/mydiscount'
			});
		},
		onCommit: function() {
			this.isJoin = !this.isJoin;
			if (this.isJoin) {
				uni.navigateTo({
					url: '../memberupgrade/memberupgrade'
				});
			}
		},
		onClickShop: function(id) {
			console.log(id);
			uni.navigateTo({
				url: 'goods_detail?id=' + id
			});
		},previewImage: function(e) {
				var current = e.target.dataset.src
				uni.previewImage({
					current: current,
					urls: this.shopinfo.imageinfo
				})
			}
	}
};
</script>

<style scoped>
image {
	width: 100%;
	height: 350upx;
}
image.image-list {
	height: auto;
}
image.img-goods {
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
.cuIcon {
	font-size: 175%;
}
.cuIcon-weixin {
	width: 52upx;
	height: 52upx;
}

.cu-btn:not([class*='bg-']) {
	background: none;
}
.container{
	padding-bottom: 100upx;
}
</style>
