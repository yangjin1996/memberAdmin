<template>
	<view class="page-top">
	<view class="cu-bar search fixed">
		<view class='search-form round'>
			<text class="text-white cuIcon-search margin-left"></text>
			<input type="text" :placeholder="hint" confirm-type="search" @input='seeker'></input>
		</view>
		<view class='action'>
			<text class='cu-start' @click='startSeeker'>搜索</text>
		</view>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				inputvalue:this.value
			}
		},
		props: {
			value: {
				type: String,
				default: ''
			},
			hint: {
				type: String,
				default: '搜索图片、文章、视频'
			}
		},
		methods: {
			seeker: function(e) {
				this.inputvalue = e.detail.value
			},
			startSeeker: function() {
				this.$emit('onseeker', this.inputvalue);

			}
		}
	}
</script>

<style scoped>
	.cu-start {
		font-size: 30upx;
		font-family: FZLTKHK--GBK1-0;
		font-weight: 400;
		color: rgba(85, 84, 84, 1);
	}
	.page-top{
		height: 100upx;
		line-height: 100upx;
	}
	.cu-bar{
		border-top: #EDEDED 1upx solid;
	}
</style>
