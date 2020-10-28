<template>
	<view>
		<view class="cu-card case" :class="isCard ? 'no-card' : ''">
				<view class="cu-item shadow" v-for="(item, index) in datas" :key="index" @click="onClick">
					<view class="image">
						<image :src="item.image" mode="widthFix"></image>
						<view class="cu-tag bg-blue">{{item.tag}}</view>
						<view class="cu-bar bg-shadeBottom">
							<text class="text-cut">{{item.content}}</text>
						</view>
					</view>
					<view class="cu-list menu-avatar">
						<view class="cu-item">
							<view class="cu-avatar round lg" :style="{backgroundImage:'url('+item.photo+');'}"></view>
							<view class="content flex-sub">
								<view class="text-grey">{{item.auther}}</view>
								<view class="text-gray text-sm flex justify-between">
									{{item.time}}
									<view class="text-gray text-sm">
										<text class="cuIcon-attentionfill margin-lr-xs"></text>
										{{item.read}}
										<text class="cuIcon-appreciatefill margin-lr-xs"></text>
										{{item.like}}
										<text class="cuIcon-messagefill margin-lr-xs"></text>
										{{item.msg}}
									</view>
								</view>
							</view>
						</view>
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
	name: 'cu-custom',
	computed: {
		style() {
			var style = '';
			return style;
		}
	},
	props: {
		datas: Array,
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
