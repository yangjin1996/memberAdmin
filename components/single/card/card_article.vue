<template>
	<view class="cu-card article" :class="isCard ? 'no-card' : ''">
		<block v-for="(item, index) in datas" :key="index">
			<view class="cu-item shadow" @click="onClick">
				<view class="title"><view class="text-cut">{{item.name}}</view></view>
				<view class="content">
					<image :src="item.image" mode="aspectFill"></image>
					<view class="desc">
						<view class="text-content">{{item.content}}</view>
						<view>
							<view class="cu-tag bg-red light sm round">{{item.tag}}</view>
							<view class="cu-tag bg-green light sm round">{{item.tag1}}</view>
						</view>
					</view>
				</view>
			</view>
		</block>
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
		datas: {},
		isCard: {
			type: [Boolean, String],
			default: false
		}
	},
	methods: {
		onClick() {
			this.$emit('onclick', true);
		}
	}
};
</script>

<style scoped></style>
