<template>
	<view>
		<view class="cu-bar bg-white search margin-line "  :class="[bgImage != '' ? 'none-bg text-white bg-img' : '', bgColor,{'fixed':isTop}]">
			<view v-if="isLeft" @click="onBack" class="cu-avatar round" :style="[{ backgroundImage: 'url(' + icon + ');' }]"></view>
			<view v-else class="action"  @click="onBack">
				<text :class="['cuIcon-' + icon]" class="text-gray"></text>
				返回
			</view>
			<view class="content text-bold">{{ title }}</view>
			<view class="action" v-if="actions.length > 0">
				<block v-for="(item, index) in actions" :key="index">
					<text :class="['cuIcon-' + item.icon, 'text-' + item.color]" @click="onMore" :data-index="index"></text>
				</block>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			StatusBar: this.StatusBar,
			CustomBar: this.CustomBar
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
			return style;
		}
	},
	props: {
		icon: {
			type: String,
			default: ''
		},
		title: {
			type: String,
			default: '标题'
		},
		actions: Array,
		isLeft: {
			type: [Boolean, String],
			default: false
		},
		bgColor: {
			type: String,
			default: ''
		},
		
		bgImage: {
			type: String,
			default: ''
		},isTop: {
			type: [Boolean, String],
			default: false
		}
	},
	methods: {
		onBack(e) {
			if (this.isLeft) {
				this.$emit('onback', this.isLeft);
			} else {
				uni.navigateBack({
					delta: 1
				});
			}
		},
		onMore(e) {
			let index = e.currentTarget.dataset.index;
			this.$emit('onmore', index);
		}
	}
};
</script>

<style scoped></style>
