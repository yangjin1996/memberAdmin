<template>
	<view>
		<view class="item-more" :class="{'margin-line':isTop}" @click="toPage">
			{{title}} <text class="icon-roundright"></text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		name: 'cu-bar',
		computed: {

		},
		props: {
			isRight: {
				type: [Boolean, String],
				default: true
			},
			isTop: {
				type: [Boolean, String],
				default: false
			},
			title: {
				type: String,
				default: '查看更多'
			},
			url: {
				type: String,
				default: ''
			}

		},
		methods: {
			toPage() {
				var url = this.url;
				if (!url) {
					this.$emit('onclick', this.title);
				} else {
					uni.navigateTo({
						url
					});

				}

			}
		}
	}
</script>

<style scoped>
	.item-more {
		text-align: center;
		font-size: 30upx;
		font-family: FZLTKHK--GBK1-0;
		font-weight: 400;
		color: rgba(154, 152, 152, 1);
		line-height: 30upx;
		align-items: center;
		padding: 10px;
	}
</style>
