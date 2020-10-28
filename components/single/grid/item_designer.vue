<template>
	<view class="cu-card case">
		<view v-for="(item,index) in datas" :key="index" class="cu-item shadow journal-item round" id="journal" >
			<view class="journal-item-info" @click="onClickItem">
				<view class="journal-title">
					<image lazy-load="true" class="loading journal-avatar" :src="item.avatar"></image>
					<view class="journal-title-desc">
						<view class="journal-author">{{ item.name }}</view>
						<view class="journal-time">
							<text>案例{{ item.cases_number }}套</text>
							<text class="margin-left">{{ item.position != null ? item.position : '全部风格' }}</text>
						</view>
					</view>
				</view>
			</view>
			<scroll-view class="journal-img-group" scroll-x="true" @scroll="scroll" scroll-left="0" v-if="item.cases_image.length > 0">
				<view class="item-boxs-img" v-for="(cases, index2) in item.cases_image" :key="index2">
					<image class="loading item-journal-img " lazy-load="true" :data-src="cases.url" :data-id="cases.id" @click="openUrl" :src="cases.photo"></image>
				</view>
			</scroll-view>
			<!-- <view class="journal-foot">
			<view class="journal-foot-date" @click="onDel">删除</view>
			<view class="journal-foot-like">点赞<text class="journal-foot-likenum"> {{item.zan}}</text></view>
		</view> -->
		</view>
	</view>
</template>

<script>
export default {
	name: 'journal',
	data() {
		return {
			old: {
				scrollTop: 0
			}
		};
	},
	props: {
		datas: {}
	},
	methods: {
		scroll: function(e) {
			//console.log(e)
			this.old.scrollTop = e.detail.scrollTop;
		},
		onClickItem() {
			//console.log(this.datas);
			this.$emit('onclickitem', this.datas.id);
		},
		previewImage: function(e) {
			var current = e.target.dataset.src;
			var imgs = this.datas.image;
			uni.previewImage({
				current: current,
				urls: imgs
			});
		},
		openUrl: function(e) {
			var src = e.target.dataset.src;
			if (this.util.isExist(src)) {
				this.$emit('onclickcase', src);
			} else {
				var id = e.target.dataset.id;
			}
		}
	}
};
</script>
<!-- StarbbUI -->
<style scoped>
.journal-item {
	background-color: #ffffff;
	padding: 24upx;
}

.journal-item-info {
	width: 100%;
	padding: 5upx;
	background-color: #ffffff;
}

.journal-avatar {
	width: 70upx;
	height: 70upx;
	border-radius: 50%;
}

.journal-author {
	font-size: 28upx;
	font-family: FZLTHK--GBK1-0;
	font-weight: 400;
	color: rgba(85, 84, 84, 1);
}

.journal-time {
	font-size: 24upx;
	font-family: FZLTKHK--GBK1-0;
	font-weight: 400;
	color: rgba(154, 152, 152, 1);
	margin-top: 15upx;
}

.journal-title {
	width: 100%;
	display: flex;
	padding-left: 10upx;
	padding-right: 10upx;
	padding-top: 4upx;
	padding-bottom: 4upx;
	margin-bottom: 4upx;
	position: relative;
}

.journal-title-desc {
	margin-left: 10upx;
	font-size: 26upx;
	line-height: 26upx;
	font-family: FZLTKHK--GBK1-0;
	font-weight: 400;
	color: rgba(146, 145, 145, 1);
	display: block;
}

.journal-title-desc view {
	margin: 0;
	line-height: 32upx;
}

.journal-btn {
	color: rgba(244, 194, 73, 1);
	font-size: 28upx;
	padding-top: 6upx;
	padding-bottom: 6upx;
	padding-left: 20upx;
	padding-right: 20upx;
	border: solid 2upx rgba(244, 194, 73, 1);
	border-radius: 10px;
	margin-right: 6upx;
}

.item-journal-content {
	margin-left: 30upx;
	line-height: 34upx;
	font-size: 30upx;
	font-family: FZLTHK--GBK1-0;
	font-weight: 400;
	color: rgba(131, 131, 131, 1);
}

.journal-img-group {
	width: 100%;
	margin: 0;
	background-color: white;
	white-space: nowrap;
}

.item-boxs-img {
	display: inline-block;
	width: 228upx;
	height: 228upx;
	padding: 4upx;
}

.item-journal-img {
	width: 100%;
	height: 100%;
	border-radius: 8upx;
}

.journal-foot {
	display: flex;
	width: 100%;
	padding: 5upx;
	line-height: 24upx;
}

.journal-foot-like {
	right: 30upx;
	position: absolute;
	font-size: 26upx;
	font-family: FZLTKHK--GBK1-0;
	font-weight: 400;
	color: rgba(183, 183, 183, 1);
}

.journal-foot-date {
	margin-left: 30upx;
	font-size: 24upx;
	font-family: FZLTKHK--GBK1-0;
	font-weight: 400;
	color: rgba(204, 203, 203, 1);
}

.journal-foot-likenum {
	margin-left: 10upx;
}
</style>
