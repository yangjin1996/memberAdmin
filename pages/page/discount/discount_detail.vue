<template>
	<scroll-view>
		<view class="bg-white padding-sm margin-top-xs text-black">
			<view class="cu-card">
				<view class="cu-item bg-img shadow-blur" :style="[{ backgroundImage: 'url(https://image.weilanwl.com/color2.0/plugin/qpct2148.jpg)' }]">
					<view class="cardTitle">
						{{ couponinfo.price }}
						<text class="padding-left text-size-28 text-white">{{ couponinfo.name }}</text>
					</view>
				</view>
			</view>
		</view>
		<itemtotal :datas="total" @onclickitem="onClickMenu">
			<block slot="left" class="text-center">访问人数</block>
			<block slot="center" class="text-center">已经领取</block>
			<block slot="right" class="text-center">分享人数</block>
		</itemtotal>

		<!-- 推荐商品 -->
		<view class="bg-white margin-top" style="padding-bottom: 140upx;">
			<cu-cell title="其他优惠券" url="../discount/discount"><block slot="right">更多优惠劵</block></cu-cell>
			<card-media :datas="coupon" @onclick="toChild"></card-media>
		</view>
		<view class="cu-bar bg-white tabbar border shop foot">
			<button class="action" open-type="contact">
				<view class="cuIcon-service text-green"><view class="cu-tag badge"></view></view>
				联系我们
			</button>
			<view class="action" @click="seekDiscount">
				<view class="cuIcon-cart"><!-- <view class="cu-tag badge">{{myCoupon}}</view> --></view>
				我的优惠劵
			</view>
			<view class="bg-orange submit" @tap="showModal" data-target="bottomModal">分享优惠劵</view>
			<view class="submit" :class="isJoin ? 'bg-grey' : 'bg-red'" @click="onCommit">{{ isJoin ? '已领取' : '立即领取' }}</view>
		</view>
		<view class="cu-modal bottom-modal" :class="modalName == 'bottomModal' ? 'show' : ''">
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
	</scroll-view>
</template>

<script>
import itemtotal from '@/components/single/grid/item_total.vue';
import cardMedia from '@/components/single/card/card_media.vue';
import { mapState, mapMutations } from 'vuex';
export default {
		computed: mapState(['userinfo','inviter']),
	components: {
		itemtotal,
		cardMedia
	},
	data() {
		return {
			coupon_id:0,
			uid:0,
			isJoin: false,
			modalName: null,
			total: {
				value1: '1330人',
				value2: '1230人',
				value3: '2230人'
			},
			couponinfo:{},
			myCoupon:0,
			coupon: [
				{
					title: '厨卫优惠券',
					price: '￥200',
					img: 'https://image.weilanwl.com/color2.0/plugin/sylb2244.jpg',
					url: './discount_detail'
				}
			],
			shareinfo: {
				title: '都市之佳',
				desc: '邀请您体验透明装修',
				path: 'https://www.homeeyes.cn/app/livedemo/downloadapk.html',
				logo: 'https://www.homeeyes.cn/app/images/icon_logo.png'
			}
		};
	},
	onLoad: function(option) {
		this.coupon_id=option.id;
		if(this.util.isExist(option.token)){
			this.setinviter(option.token);
		}
	},
	onShow() {
		this.uid=this.userinfo.uid;
		this.onInit(0);
	},
	onShareAppMessage: function(res) {
		if (res.from === 'button') {
			// 来自页面内分享按钮
			console.log(res.target);
		}
		this.modalName = null;
		let url = 'pages/discount/discount_detail?id='+this.coupon_id+'&token='+this.uid+'&type=1';
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
		onInit: function(state) {
			var params = {
				user_id: this.uid,
				coupon_id:this.coupon_id,
				grade_uid:this.inviter
			};
			var that = this;
			this.$axios.post(
				this.umcons.serviceAddress.COUPON_DATAILS,
				params,
				function(res, code) {
					if (code == 0) {
						var data = res;
						console.log(data)
						that.couponinfo=res.coupon;
						that.coupon=res.otherCoupon;
						that.myCoupon=res.myCoupon;
						that.total.value1=res.coupon.visitor
						that.total.value2=res.coupon.geted
						that.total.value3=res.coupon.shared
						if(res.coupon.is_geted==0){
							that.isJoin=false;
						}else{
							that.isJoin=true;
						}
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
				let path='../stafffinvite/stafffinvite?token='+this.uid+'&cid='+this.coupon_id+'&type=0';
				uni.navigateTo({
					url: path
				});
			} else if (index == 2) {
				let path='https://zs.homeeyes.cn/app/future/#/pages/discount/discount_detail?id='+this.coupon_id+'&token='+this.uid+'&type=1';
				uni.setClipboardData({
					data: path,
					success: function() {
						console.log('success');
					}
				});
			}else if (index == 3) {
				let path='../creatimage/creatimage?id='+this.coupon_id+'&type=0';
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
		toChild(id) {
			let path = '../discount/discount_detail?id=' + id;
			uni.navigateTo({
				url: path
			});
		},
		seekDiscount: function() {
			uni.navigateTo({
				url: '../order/mydiscount'
			});
		},
		onCommit: function() {
			if(this.isJoin){
				this.util.showToastModal("已经领取了优惠券",function(){});
				return;
			}
			var params = {
				user_id: this.uid,
				coupon_id:this.coupon_id
			};
			var that = this;
			this.$axios.post(
				this.umcons.serviceAddress.CREATE_MY_COUPON,
				params,
				function(res, code) {
					if (code == 0) {
						var data = res;
						that.util.showToastModal("领取成功",function(){
							uni.navigateTo({
								url: '../order/mydiscount'
							});
						});
					}
					uni.stopPullDownRefresh();
				},
				function(error) {
					uni.stopPullDownRefresh();
					console.log(error);
				}
				
			);
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
</style>
