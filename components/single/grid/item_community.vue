<template>
	<view class="el">
		<view class="su-msg-item" v-for="(item,index) in datas" :key="index">
			<image lazy-load="true" class="su-msg-item-photo" :src="item.image" :data-index="index" @click="onSelect"></image>
			<view class="su-msg-item-info" :data-index="index" @click="onSelect">
				<view class="su-msg-item-name">{{item.name}}</view>
				<view class="su-msg-item-phone">{{item.address}}</view>
				<view class="su-msg-item-state">{{item.count_user}}位业主已加入</view>
			</view>
			<view class="su-msg-item-tag" v-if="item.is_join==0" :data-id="item.id" @click="onAdd">加入</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'el',
		data() {
			return {
				myicon: "https://www.homeeyes.cn/app/images/icon_item_mymsg.png",
				comicon: "https://www.homeeyes.cn/app/images/icon_item_commsg.png",
			}
		},
		props: {
			datas: Array,
			uid: Number
		},
		methods: {
			onAdd: function(e) {
				let id = e.currentTarget.dataset.id;
				let params = {
					uid: this.uid,
					community_id: id
				}
				console.log(params);
				var that = this
				this.$axios.post(this.umcons.serviceAddress.USER_JOIN_COMMUNITY, params, function(res, code) {
					console.log(res);
					if (code == 0) {
						that.util.showAlert("操作成功");
						that.util.saveCommunityId(id);
						setTimeout(function() {
							uni.navigateBack({
								delta: 1
							})
						}, 500)

					} else {
						that.util.showAlert("操作失败");
					}
				}, function(error) {

					console.log(error);
				});
			},
			onSelect: function(e) {
				var index = e.currentTarget.dataset.index;
				this.$emit('onselect', this.datas[index].id);

			}

		}
	}
</script>
<!-- StarbbUI -->
<style scoped>
	.su-msg-item-name {
		font-size: 32upx;
		font-family: '黑体';
		font-weight: 400;
		color: rgba(85, 84, 84, 1);
		line-height: 32upx;

	}

	.su-msg-item-phone {
		font-size: 26upx;
		font-family: FZLTHK--GBK1-0;
		font-weight: 400;
		color: rgba(140, 139, 139, 1);
		line-height: 32upx;
		margin-top: 15upx;
		width: 75%;
		
	}

	.su-msg-item-state {
		font-size: 26upx;
		font-family: FZLTKHK--GBK1-0;
		font-weight: 400;
		color: rgba(194, 193, 193, 1);
		line-height: 32upx;
		margin-top: 30upx;
	}

	.su-msg-item {
		display: flex;
		width: 100%;
		align-items: center;
		position: relative;
		background-color: #FFFFFF;
		padding-top: 20upx;
		padding-left: 24upx;
		padding-bottom: 30upx;
	}

	.su-msg-item-photo {
		width: 160upx;
		height: 160upx;
		border-radius: 8upx;
		line-height: 200upx;
	}

	.su-msg-item-info {
		line-height: 200upx;
		margin-left: 20upx;
	}

	.su-msg-item-tag {
		padding-top: 10upx;
		padding-bottom: 10upx;
		padding-left: 20upx;
		padding-right: 20upx;
		font-size: 30upx;
		font-family: '黑体';
		font-weight: 400;
		color: rgba(0, 205, 118, 1);
		position: absolute;
		right: 26upx;
		background: rgba(255, 255, 255, 1);
		border: 1px solid rgba(0,205,118,1);
		border-radius: 8upx;
	}

	.su-msg-item::after {
		content: '';
		width: 100%;
		height: 1px;
		background-color: #dcdcdc;
		display: block;
		left: 0px;
		position: absolute;
		bottom: 0;
	}

	.su-msg-item-time {
		position: absolute;
		right: 0.5rem;
	}
</style>
