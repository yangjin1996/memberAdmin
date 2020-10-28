<template>
	<view class="nav-list margin-top">
		<view
			v-for="(item, index) in datas"
			:key="index"
			hover-class="none"
			:data-url="'/pages/single/' + item.name"
			:data-index="index"
			class="nav-li"
			:class="'bg-' + item.color"
			:style="[{ animation: 'show ' + ((index + 1) * 0.2 + 1) + 's 1' }]"
			@click="onClick"
		>
			<view class="nav-title">{{ item.title }}</view>
			<view class="nav-name">{{ item.name }}</view>
			<text :class="'cuIcon-' + item.cuIcon"></text>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	name: 'cu-custom',
	computed: {
		style() {
			var style = '';
			return style;
		}
	},
	props: {
		datas: []
	},
	methods: {
		onClick(e) {
			let index = e.currentTarget.dataset.index;
			this.$emit('onclick', index);
		},
		onRight() {
			this.$emit('onright', true);
		}
	}
};
</script>

<style scoped></style>
