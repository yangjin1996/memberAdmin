<template>
	<view class="container">
		<image class="container-img" src="https://www.homeeyes.cn/app/images/invite.png" mode="widthFix"></image>
		<view class="bottom_btn">
			<button type="primary" data-type="0" open-type="share" @click="openStaffInvite">分享给好友</button>
			<!-- <button type="primary" data-type="1" open-type="share" @click="openStaffInvite">分享到朋友圈</button> -->
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			cid: 0,
			uid: 0,
			shareinfo: {
				title: '未来家装饰',
				desc: '邀请您体验透明装修',
				path: 'https://www.homeeyes.cn/app/livedemo/downloadapk.html',
				logo: 'https://www.homeeyes.cn/app/images/icon_logo.png'
			}
		};
	},
	onLoad(options) {
		this.cid = this.util.getCid();
		this.uid = this.util.getUid();
		//this.initPro();
	},
	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function(res) {
		if (res.from === 'button') {
			// 来自页面内分享按钮
			console.log(res.target);
		}
		let url = 'pages/stafffinvite/stafffinvite?cid=' + this.cid + '&uid=' + this.uid;
		this.shareinfo.path = url;
		return this.shareinfo;
	},
	methods: {
		initPro: function() {
			let params = {
				cid: this.cid
			};
			console.log(params);
			var that = this;
			this.$axios.post(
				this.umcons.serviceAddress.GET_SHARE_LINK,
				params,
				function(res, code) {
					console.log(res);
					if (code == 0) {
						if (that.util.isExist(res.title)) {
							that.shareinfo.title = res.title;
						}
						if (that.util.isExist(res.content)) {
							that.shareinfo.desc = res.content;
						}
						if (that.util.isExist(res.invite)) {
							that.shareinfo.path = res.invite;
						}
						if (that.util.isExist(res.logo)) {
							that.shareinfo.logo = res.logo;
						}
					}
				},
				function(error) {
					console.log(error);
				}
			);
		},
		openStaffInvite: function(res) {
			var type = res.target.dataset.type;

			// #ifdef APP-PLUS
			if (type == 0) {
				this.yzutil.onShare(0, this.shareinfo);
			} else if (type == 1) {
				this.yzutil.onShare(1, this.shareinfo);
			}

			// #endif
		}
	}
};
</script>

<style scoped>
.container-img {
	width: 100%;
	height: 100%;
}
.container {
	position: relative;
}
.bottom_btn {
	position: fixed;
	bottom: 10upx;
	left: 40upx;
	right: 40upx;
}
.bottom_btn button {
	margin-top: 10upx;
}
</style>
