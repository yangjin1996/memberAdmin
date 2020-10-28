<template>
	<view>
		<view class="cu-custom" :style="[{height:BannerBar + 'px'}]">
			<image class="cu-custom-img" lazy-load :style="[{height:BannerBar + 'px'}]" :src="bgBanner"></image>
			<view class="cu-bar fixed search" :style="style" :class="[scrollTop==0?'none-bg text-white bg-img':'bg-white',bgColor]">
				<view class="action" @tap="onLeft" v-if="isBack">
					<slot name="left"></slot>
				</view>
				<view class="content" :style="[{top:StatusBar + 'px'}]">
					<slot name="content"></slot>
				</view>
				<slot name="right"></slot>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				BannerBar: this.CustomBar + 140,
				baseImage: 'https://www.homeeyes.cn/app/images/icon_logo.png'
			};
		},
		name: 'cu-custom',
		computed: {
			style() {
				var StatusBar = this.StatusBar;
				var CustomBar = this.CustomBar;
				var bgImage = this.bgImage;
				var style = `height:${CustomBar}px;padding-top:${StatusBar}px;`;
				if (this.bgImage) {
					style = `${style}background-image:url(${bgImage});`;
				}
				return style
			}
		},
		props: {
			bgColor: {
				type: String,
				default: ''
			},
			isBack: {
				type: [Boolean, String],
				default: true
			},
			bgImage: {
				type: String,
				default: ''
			},
			bgBanner: {
				type: String,
				default: ''
			},scrollTop:{
				type: Number,
				default: 0
			}
			
		},
		methods: {
			onLeft() {
				// this.$emit('onleft', true);
				uni.navigateBack({
					delta: 1
				});
			},
			onRight() {
				this.$emit('onright', true);
			}
		}
	}
</script>

<style scoped>
	.cu-bar {
		background: no-repeat;
	}

	.action {
		margin-left: 20upx;
	}

	.cu-custom-img {
		width: 100%;

	}

	.cu-bar .content{
		font-size: 36upx;
		font-family: FZLTHK--GBK1-0;
		font-weight: 400;
		color: rgba(255, 255, 255, 1);
	}
</style>
