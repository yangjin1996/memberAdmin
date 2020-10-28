<template>
	<view>
		<view class="cu-list menu" :class="[isTop ? 'margin-top' : 'margin-line', menuBorder ? 'sm-border' : '', card ? 'card-menu margin-top' : '']">
			<view class="cu-item " v-for="(item, index) in datas" :key="index" :class="arrow ? 'arrow' : ''">
				<button class="cu-btn content" @click="onClick" :data-index="index">
					<text v-if="item.icon != null" :class="['cuIcon-' + item.icon, 'text-' + item.color]"></text>
					<image v-if="item.image != null" :src="item.image" class="png" mode="aspectFit"></image>
					<text class="text-grey">{{ item.title }}</text>
				</button>
				<view class="action" v-if="item.hint != ''">
					<text class="text-grey text-sm">{{ item.hint }}</text>
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
		datas: Array,
		isTop: {
			type: [Boolean, String],
			default: false
		}
	},
	methods: {
		onClick(e) {
			let index = e.currentTarget.dataset.index;
			this.$emit('onclick', index);
		}
	}
};
</script>

<style scoped></style>
