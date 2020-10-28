<template>
		<view class="cu-form-group margin-line">
			<view class="title">{{ title }}</view>
			<switch
				:class="[Bgcolor, { 'radius': mold, 'checked':switchC,'switch-sex':modal=='sex' }]"
				@change="SwitchC"
				:checked="switchC ? true : false"
			></switch>
		</view>
</template>

<script>
export default {
	data() {
		return {
			switchC: false
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
		datas: {},
		mold: {
			type: [Boolean, String],
			default: false
		},
		modal:{
			type: String,
			default: ''
		},
		title: {
			type: String,
			default: '标题'
		},
		Bgcolor: {
			type: String,
			default: 'red'
		}
	},
	methods: {
		SwitchC(e) {
			this.switchC = e.detail.value;
			this.$emit('onchange', this.switchC);
		}
	}
};
</script>

<style scoped>

</style>
