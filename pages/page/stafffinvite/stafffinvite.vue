<template>
	<view class="container">
		<view class="invite-top">
			<view class="header-boxs-user">
				<image class="invite-header-image" :src="users.avatar"></image>
				<view class="invite-header-text invite-header-title">{{users.name}}</view>
			</view>
		</view>
		<view class="invite-center">
			<view class="invite-header-text invite-header-name">{{ type == 0 ? '—— 分享给您了一张优惠劵 ——' : '—— 推荐给您了一个宝贝 ——' }}</view>
		</view>
		<view class="invite-header-boxs">
			<view class="invite-bottom">
				<view class="invite-bottom-top">
					<itemtotal :datas="total" @onclickitem="onClickMenu">
						<block slot="left" class="text-center">访问人数</block>
						<block slot="center" class="text-center">{{type == 0 ?'领取人数':'商品销量'}}</block>
						<block slot="right" class="text-center">分享人数</block>
					</itemtotal>
				</view>
				<view class="invite-bottom-bottom">
					<view class="bg-white padding-sm margin-top-xs text-black" @tap="toChild">
						<view class="cu-card" v-if="type == 0">
							<view class="cu-item bg-img shadow-blur" :style="[{ backgroundImage: 'url(https://image.weilanwl.com/color2.0/plugin/qpct2148.jpg)' }]">
								<view class="cardTitle">
									<text class="margin-right-sm text-bold text-red">{{ info.emoney }}元领取</text>￥{{ info.price }}
									<text class="padding-left text-size-28 text-white">{{ info.name }}</text>
								</view>
							</view>
						</view>
						<view v-else class="cu-list menu-avatar">
							<view class="cu-item">
								<view class="cu-avatar round lg" :style="[{ backgroundImage: 'url(' + info.img + ')' }]"></view>
								<view class="content">
									<view class="text-grey">{{ info.name }}</view>
									<view class="text-gray text-sm flex">
										<view class="text-cut">
											<text class="margin-right-sm text-bold text-red">￥{{ info.n_price }}</text>
											<text class="margin-right-sm text-gray" style="text-decoration: line-through;">￥{{ info.y_price }}</text>
										</view>
									</view>
								</view>
								<view class="action">
									<view class="text-grey text-xs">活动限量</view>
									<view class="cu-tag round bg-grey sm">5</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="page-bottom">
			<button v-if="from == 0" class="btn-commit " type="primary" open-type="share">立即分享</button>
			<button v-else class="btn-commit " type="primary" @click="commitInfo">立即领取</button>
		</view>
	</view>
</template>
<script>
import itemtotal from '@/components/single/grid/item_total.vue';
import { mapState, mapMutations } from 'vuex';
export default {
	computed: mapState(['userinfo', 'label', 'hasLogin', 'inviter']),
	components: {
		itemtotal
	},
	data() {
		return {
			userphone: '',
			usercode: '',
			password: '',
			codeMsg: '验证码',
			uid: 0,
			cid: 0,
			proid: 0,
			type: 0,
			info: {
				img: 'http://zs.homeeyes.cn/upload/images/微信图片_20191029101637.png',
				label_name: '热销',
				n_price: '888',
				name: '通体大理石',
				shared: 0,
				visit: 22,
				xl: 2234,
				y_price: '1000'
			},
			users: {},
			total: {
				value1: '0人',
				value2: '0人',
				value3: '0人'
			},
			shareinfo: {
				title: '都市之佳',
				desc: '邀请您体验透明装修',
				path: 'https://www.homeeyes.cn/app/livedemo/downloadapk.html',
				logo: 'https://www.homeeyes.cn/app/images/icon_logo.png'
			},
			from: 0,
			token: 0
		};
	},
	onLoad(props) {
		this.pid = props.pid;
		this.coupon_id = props.cid;
		this.type = props.type;
		if (this.util.isExist(props.token)) {
			this.setinviter(props.token);
		}
	},
	onShow() {
		this.uid = this.userinfo.uid;
		this.initPro(0);
	},
	onPullDownRefresh: function() {
		var that = this;
		setTimeout(function() {
			that.initPro(1);
		}, 200);
	},
	onUnload() {},
	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function(res) {
		if (res.from === 'button') {
			// 来自页面内分享按钮
			console.log(res.target);
		}
		let url = 'pages/stafffinvite/stafffinvite?token=' + this.uid + '&cid=' + this.coupon_id+'&pid=' + this.pid + '&type=' + this.type;
		this.shareinfo.path = url;
		return this.shareinfo;
	},
	methods: {
		...mapMutations(['setinviter']),
		onInputPhone: function(event) {
			this.userphone = event.target.value;
		},
		onInputCode: function(event) {
			this.usercode = event.target.value;
		},
		initPro: function(state) {
			let params = {
				coupon_id: this.coupon_id,
				shop_id: this.pid,
				user_id: this.inviter,
				type: this.type
			};
			console.log(params);
			var that = this;
			this.$axios.post(
				this.umcons.serviceAddress.SHARE_COUPON,
				params,
				function(res) {
					that.users = res.users;
					that.info = res.info;
					if(that.type==0){
						that.total.value2 = res.info.geted;
						that.total.value1 = res.info.visitor;
						that.total.value3 = res.info.shared;
					}else{
						that.total.value2 = res.info.xl;
						that.total.value1 = res.info.visit;
						that.total.value3 = res.info.shared;
					}
				
					console.log(res);
					uni.stopPullDownRefresh();
				},
				function(error) {
					console.log(error);
					uni.stopPullDownRefresh();
				},
				state
			);
		},
		commitInfo: function() {
			if (!hasLogin) {
				this.util.showModal(
					'你尚未登录，是否登录后领取？',
					function() {
						uni.navigateTo({
							url: '../login/login?from=0'
						});
					},
					function() {}
				);
				return;
			}
			if (this.type == 0) {
				var params = {
					user_id: this.uid,
					coupon_id: this.coupon_id,
					grade_uid:this.inviter
				};
				var that = this;
				this.$axios.post(
					this.umcons.serviceAddress.CREATE_MY_COUPON,
					params,
					function(res, code) {
						if (code == 0) {
							var data = res;
							that.util.showToastModal('领取成功', function() {
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
			} else {
				let path = '../memberupgrade/memberupgrade?pid=' + this.pid;
				uni.navigateTo({
					url: path
				});
			}
		},
		getCode: function() {
			if (this.userphone.length != 11) {
				this.util.showAlert('请输入手机号');
				return;
			}
			let params = {
				phone: this.userphone,
				type: 2
			};
			var that = this;
			console.log(params);
			this.$axios.post(
				this.umcons.serviceAddress.SEND_CODE,
				params,
				function(res, code) {
					console.log(res);
					if (code == 0) {
						var time = 60;
						that.codeMsg = time + '秒';
						var timer = setInterval(function() {
							if (time > 0) {
								time--;
								that.codeMsg = time + '秒';
							} else {
								that.codeMsg = '点击获取';
								clearInterval(timer);
							}
						}, 1000);
					}
				},
				function(error) {
					console.log(error);
				}
			);
		},
		toChild(e) {
			if (this.type == 0) {
				let path = '../discount/discount_detail?token=' + this.inviter + '&id=' + this.cid;
				uni.navigateTo({
					url: path
				});
			} else {
				let path = '../index/goods_detail?token=' + this.inviter + '&id=' + this.pid;
				uni.navigateTo({
					url: path
				});
			}
		}
	}
};
</script>

<style scoped>
@import url('../../../css/invite.css');
.page-bottom {
	padding: 20upx;
}
</style>
