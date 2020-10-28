<template>
	<view>
		<view class="cu-list menu" :class="[isTop ? 'margin-top' : 'margin-line', menuBorder ? 'sm-border' : '', card ? 'card-menu margin-top' : '']">
			<view class="cu-item">
				<view class="content padding-tb-sm">
					<view>
						<text v-if="leftIcon != ''" class="margin-right-xs" :class="['cuIcon-' + leftIcon, 'text-' + bgColor]"></text>
						<image v-if="leftImage != ''" class="margin-right-xs png" :src="leftImage" mode="aspectFit"></image>
						{{ title }}
					</view>
					<view class="text-gray text-sm" v-if="hint != ''">
						<text class="cuIcon-infofill margin-right-xs"></text>
						{{ hint }}
					</view>
				</view>
				<view class="action"><switch class="switch-sex" @change="SwitchSex" :class="skin ? 'checked' : ''" :checked="skin ? true : false"></switch></view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			skin: false
		};
	},
	name: 'cu-custom',
	computed: {
		style() {
			var style = '';
			return style;
		}
	},
	props: {
		title: {
			type: String,
			default: '标题'
		},
		hint: {
			type: String,
			default: ''
		},
		menuBorder: {
			type: [Boolean, String],
			default: false
		},
		card: {
			type: [Boolean, String],
			default: false
		},
		leftIcon: {
			type: String,
			default: ''
		},
		leftImage: {
			type: String,
			default: ''
		},
		bgColor: {
			type: String,
			default: 'red'
		},
		otype: {
			type: Number,
			default: 0
		},
		isTop: {
			type: [Boolean, String],
			default: false
		}
	},
	methods: {
		SwitchSex(e) {
			this.skin = e.detail.value;
			this.$emit('onswitch', this.skin);
		},
		onClick() {
			this.$emit('onclick', true);
		}
	}
};
</script>

<style scoped>
	.switch-sex::after {
		content: "\e716";
	}
	
	.switch-sex::before {
		content: "\e7a9";
	}
	
	.switch-music::after {
		content: "\e66a";
	}
	
	.switch-music::before {
		content: "\e6db";
	}
</style>
