<template>
	<scroll-view>
		<view class="bg-white margin-top-xs" :style="[{ height: height == 0 ? '100%' : height + 'px' }]">
			<view class="padding-sm">
				<view class="margin-left-xs text-bold">您遇到的问题类型</view>
				<radio-group class="block">
					<view class="margin-top-sm grid col-2">
						<view v-for="(item, index) in radio_list" :key="index" class="cu-form-group flex align-center justify-start">
							<radio @click="radio_click()"></radio>
							<view class="margin-left-sm">{{ item.name }}</view>
						</view>
					</view>
				</radio-group>
				<view class="cu-form-group"><textarea maxlength="500" placeholder="请详细描述您的问题" v-model="text" @input="word_count()"></textarea></view>
				<view class="text-sm text-right margin-right text-grey">最多还可以输入{{ word }}个字</view>
				<view class="padding">
					<button @click="onCommit" class="cu-btn block margin-tb-sm lg" :class="able == false ? 'line-blue' : 'bg-blue'" :disabled="able == false">提交</button>
				</view>
			</view>
		</view>
	</scroll-view>
</template>

<script>
export default {
	data() {
		return {
			height: this.ScreenHeight,
			able: false,
			text: '',
			word: 500,
			radio_list: [{ name: '购买失败' }, { name: '显示错误' }, { name: '小程序崩溃' }, { name: '其他问题' }]
		};
	},
	methods: {
		radio_click() {
			this.able = true;
		},
		word_count() {
			this.word = 500 - this.text.length;
		},
		onCommit: function() {
			this.util.showAlert('提交成功', function() {});
		}
	}
};
</script>

<style>
.cu-form-group + .cu-form-group {
	border: none;
}
</style>
