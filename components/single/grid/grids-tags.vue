<template>
	<view class='padding-sm flex flex-wrap bg-white'>
		<view class="padding-xs" v-for="(item,index) in datas" :key="index" v-if="item.name!='gray'">
			<view class='cu-tag' :class="'bg-' + item.name">{{item.title}}</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	name: 'grids',
	computed: {
	},
	props: {
		cols:  {
			type: Number,
			default: 3
		},
		gridBorder: {
			type: [Boolean, String],
			default: false
		},
		datas:Array
	},
	methods: {
		
	}
};
</script>

<style scoped></style>
