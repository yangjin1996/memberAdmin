<template>
	<view>
		<view class="cu-timeline" v-for="(item, index) in datas" :key="index" @click="onClickItem" :data-index="index">
			<view class="cu-time">{{ item.date }}</view>
			<view class="cu-item">
				<view class="content">
					<view class="cu-capsule radius">
						<view class="cu-tag bg-cyan">上午</view>
						<view class="cu-tag line-cyan">{{ item.time }}</view>
					</view>
					<view class="margin-top">{{ item.content }}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	props: {
		datas: {},
		iscustom: {
			type: [Boolean, String],
			default: false
		}
	},
	methods: {
		onClickItem(e) {
			//console.log(this.datas);
			var index = e.currentTarget.dataset.index;
			this.$emit('onclickitem', index);
		}
	}
};
</script>

<style></style>
