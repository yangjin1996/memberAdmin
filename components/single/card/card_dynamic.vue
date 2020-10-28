<template>
	<view class="cu-card dynamic" :class="isCard ? 'no-card' : ''">
		<block v-for="(item, index) in datas" :key="index">
			<view class="cu-item shadow" @click="onClick">
				<view class="cu-list menu-avatar">
					<view class="cu-item">
						<view class="cu-avatar round lg" :style="{backgroundImage:'url('+item.photo+');'}"></view>
						<view class="content flex-sub">
							<view>{{item.auther}}</view>
							<view class="text-gray text-sm flex justify-between">{{item.time}}</view>
						</view>
					</view>
				</view>
				<view class="text-content">{{item.content}}</view>
				<view class="grid flex-sub padding-lr" :class="isCard ? 'col-3 grid-square' : 'col-1'">
					<view class="bg-img"
							:class="isCard ? '' : 'only-img'"
							v-for="(img, index2) in item.images "
							:key="index2">
						<image :src="img" :data-src="img" :data-index="index" @tap="previewImage"></image>
					</view>
					
				</view>
				<view class="text-gray text-sm text-right padding">
					<text class="cuIcon-attentionfill margin-lr-xs"></text>
					{{item.read}}
					<text class="cuIcon-appreciatefill margin-lr-xs"></text>
					{{item.like}}
					<text class="cuIcon-messagefill margin-lr-xs"></text>
					{{item.msg}}
				</view>

				<view class="cu-list menu-avatar comment solids-top">
					<view class="cu-item" v-for="(comment,index3) in item.comments" :key="index3">
						<view class="cu-avatar round" :style="{backgroundImage:'url('+comment.photo+');'}"></view>
						<view class="content">
							<view class="text-grey">{{comment.name}}</view>
							<view class="text-gray text-content text-df">{{comment.content}}</view>
							<view class="bg-grey padding-sm radius margin-top-sm  text-sm" v-if="index3%2==0">
								<view class="flex">
									<view>凯尔：</view>
									<view class="flex-sub">妹妹，你在帮他们给黑暗找借口吗?</view>
								</view>
							</view>
							<view class="margin-top-sm flex justify-between">
								<view class="text-gray text-df">{{comment.time}}</view>
								<view>
									<text class="cuIcon-appreciatefill text-red"></text>
									<text class="cuIcon-messagefill text-gray margin-left-sm"></text>
								</view>
							</view>
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
		},
		previewImage: function(e) {
			var current = e.target.dataset.src;
			var index = e.target.dataset.index;
			var images=this.datas[index].images
			uni.previewImage({
				current: current,
				urls: images
			});
		}
	}
};
</script>

<style scoped></style>
