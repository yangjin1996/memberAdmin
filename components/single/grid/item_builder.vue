<template>
	<view id="cuitem" class='cu-list menu menu-avatar'>
		<view v-for="(item,index) in datas" :key="index" class="cu-item " @click="clickItem" :data-id="item.id">
			<view class="cu-avatar radius lg" v-bind:style="{backgroundImage:'url('+item.avatar+')'}">
			</view>
			<view class='content'>
				<view>{{item.name}}
					<view class="cu-tag round bg-orange sm">{{item.year}}年</view>
				</view>
				<view class='text-gray text-sm'>
					<text class='text-title'>施工项目:</text>
					<text class='text-desc'>{{item.build_number}}</text>
					<text class='text-title'>好评度:</text>
					<text class='text-desc'>{{item.praise}}</text></view>
			</view>
			<view class='action'>
				<view class='text-grey text-xs'>点击查看</view>
				<!-- <view class='icon-notice_forbid_fill text-gray'></view> -->
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'cuitem',
		data() {
			return {

			}
		},
		props: {
			datas: {}

		},
		methods: {
			clickItem(evens) {
				var id = evens.currentTarget.dataset.id;
				this.$emit('onclickitem', id);
			}


		}
	}
</script>
<!-- StarbbUI -->
<style scoped>
	.text-desc{
		margin-right: 10upx;
	}
</style>
