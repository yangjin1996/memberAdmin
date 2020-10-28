<template>
	<view class="page-contents margin-line flex" :style="[{ height: ScreenHeight==0?'100%': (ScreenHeight+'px') }]" v-if="isShow">
		<view class="contents_base"  @click="startSeeker">
			<image lazy-load="true" class="icon_no_project" src="https://www.homeeyes.cn/app/images/icon_no_seeker.png"></image>
			<view class="text_no_project">{{ hint }}</view>
			<slot name="content"></slot>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			ScreenHeight: this.ScreenHeight,
			StatusBar: this.StatusBar,
			CustomBar: this.CustomBar
		};
	},
	computed: {
		style() {
			var ScreenHeight = this.ScreenHeight;
			console.log(ScreenHeight);
			var StatusBar = this.StatusBar;
			var CustomBar = this.CustomBar;
			var bgImage = this.bgImage;
			var style = `height:${ScreenHeight}px;padding-top:${StatusBar}px;`;
			if (this.bgImage) {
				style = `${style}background-image:url(${bgImage});`;
			}
			return style;
		}
	},
	props: {
		hint: {
			type: String,
			default: '没有找到你的搜索条件哦~'
		},
		isShow: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		startSeeker: function() {
			this.$emit('onclick', true);
		}
	}
};
</script>

<style scoped>
.cu-start {
	font-size: 30upx;
	font-family: FZLTKHK--GBK1-0;
	font-weight: 400;
	color: rgba(85, 84, 84, 1);
}

.contents_base{
	margin: auto;
}
.page-contents{
	align-items: center;
}
</style>
