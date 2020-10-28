<template>
	<view id="el" class="su-itemcell">
		<view class="su-itemcell-title">{{title}}</view>
		<view class="su-itemcell-value">{{value}}</view>
	</view>
</template>

<script>
	export default {
		name: 'el',
		data() {
			return {

			}
		},
		props: {
			title: String,
			value: String

		},
		methods: {
			commitExit() {
				this.$emit('onmaskclose', false);
			},
			formateState: function(state) {


			}

		}
	}
</script>
<!-- StarbbUI -->
<style scoped>
	.su-itemcell {
		display: flex;
		position: relative;
		padding: 20upx;
		align-items: center;
		background-color: #FFFFFF;
		width: 100%;
		
	}

	.su-itemcell-title {
		font-size: 32upx;
		font-family: FZLTHK--GBK1-0;
		font-weight: 400;
		color: rgba(112, 111, 111, 1);
	}

	.su-itemcell-value {
		position: absolute;
		right: 1rem;
		font-size: 28upx;
		font-family: FZLTKHK--GBK1-0;
		font-weight: 400;
		color: rgba(146, 145, 145, 1);
	}
</style>
