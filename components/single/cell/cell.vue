<template>
	<view>
		<view class="cu-list menu" :class="[isTop ? 'margin-top' : 'margin-line', menuBorder ? 'sm-border' : '', card ? 'card-menu margin-top' : '']">
			<view class="cu-item " :class="arrow ? 'arrow' : ''">
				<button
					class="cu-btn content"
					@click="onClick"
					:open-type="openTypes[otype]"
					@getphonenumber="bindData"
					@getuserinfo="bindData"
					bindcontact="bindData"
					@opensetting="bindData"
				>
					<text v-if="leftIcon != ''" :class="['cuIcon-' + leftIcon, 'text-' + bgColor]"></text>
					<image v-if="leftImage != ''" :src="leftImage" class="png" mode="aspectFit"></image>
					<text class="text-grey text-title">{{ title }}</text>
				</button>
				<view class="action" v-if="hint != ''">
					<text class="text-grey text-sm">{{ hint }}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			openTypes: ['', 'contact', 'getUserInfo', 'getPhoneNumber', 'share', 'openSetting', 'feedback']
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
		arrow: {
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
		onClick() {
			this.$emit('onclick', true);
		},
		onRight() {
			this.$emit('onright', true);
		},
		bindData: function(e) {
			this.$emit('onbind', e);
		}
	}
};
</script>

<style scoped>
	.text-title{
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
</style>
