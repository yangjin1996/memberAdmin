<template>
	<view class="su-msg-item" @click="onclickmsg">
		<image lazy-load="true" class="su-msg-item-photo" :src="myicon"></image>
		<view class="su-msg-item-info">
			<view class="su-msg-item-name">{{itemdata.title}}
			<text class="su-msg-item-tag">{{itemdata.is_read==0?"未读":"已读"}}</text> 
			<text class="su-msg-item-time">{{itemdata.addtime}}</text></view>
			<view class="su-msg-item-phone">{{itemdata.content}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'el',
		data() {
			return {
				myicon:"https://www.homeeyes.cn/app/images/icon_item_mymsg.png",
				comicon:"https://www.homeeyes.cn/app/images/icon_item_commsg.png",
			}
		},
		props: {
			itemdata: {}

		},
		methods: {
			onclickmsg() {

				this.$emit('selectmsg', this.itemdata.id);
			},
			formateState: function(state) {


			}

		}
	}
</script>
<!-- StarbbUI -->
<style scoped>
	.su-msg-item-name,
	.su-msg-item-phone {
		align-items: center;
		position: relative;
		line-height: 40upx;
	}

	.su-msg-item-name {
		font-size: 30upx;
		font-family: FZLTHK--GBK1-0;
		font-weight: 400;
		color: rgba(112, 111, 111, 1);
	}

	.su-msg-item-phone {
		font-size: 26upx;
		font-family: FZLTKHK--GBK1-0;
		font-weight: 400;
		color: rgba(146, 145, 145, 1);
	}


	.su-msg-item {
		display: flex;
		width: 100%;
		align-items: center;
		padding: 0.5rem;
		position: relative;
		background-color: #FFFFFF;
	}

	.su-msg-item-photo {
		width: 50px;
		height: 50px;
		border-radius: 25px;
		padding: 10upx;
	}

	.su-msg-item-info {
		float: right;
		width: 80%;
		margin-left: 0.5rem;
	}

	.su-msg-item-tag {
		padding-top: 4upx;
		padding-bottom: 4upx;
		padding-left: 4upx;
		padding-right: 4upx;
		border-radius: 4upx;
		background-color: #00CD76;
		color: white;
		font-size: 24upx;
		margin-left: 10upx;
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
