<template>
	<view>
		<view class="cu-list menu-avatar">
			<view class="cu-item" style="background: none;" v-for="(item, index) in datas" :key="index" @click="onClick" :data-index="index">
				<view class="cu-avatar round lg" :style="[{ backgroundImage: 'url(' + item.image + ')' }]">
					<view class="cu-tag badge" v-if="item.size!=null">{{ item.size }}+</view>
				</view>
				<view class="content">
					<view :class="'text-'+textColor">
						<view class="text-cut" >{{ item.title }}</view>
						<view v-if="item.tag!=null" class="cu-tag round bg-orange sm">{{ item.tag }}</view>
					</view>
					<view class="text-sm flex" :class="'text-'+textColor">
						<view class="text-cut" >
							<!-- <text class="cuIcon-infofill text-red  margin-right-xs"></text> -->
							{{ item.content }}
						</view>
					</view>
				</view>
				<view class="action">
					<view class="icon cuIconfont-spin" :class="['cuIcon-' + tag,'text-'+bgColor]"></view>
					<view class="text-xs" :class="'text-'+textColor">{{ item.desc }}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			myicon: 'https://www.homeeyes.cn/app/images/icon_item_mymsg.png'
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
		datas: Array,
		tag: {
			type: String,
			default: 'hotfill'
		},
		bgColor: {
			type: String,
			default: 'red'
		},
		textColor: {
			type: String,
			default: 'white'
		}
	},
	methods: {
		onClick(e) {
			var index = e.currentTarget.dataset.index;
			this.$emit('onclick', index);
		}
	}
};
</script>

<style scoped>
	.icon{
		font-size: 40upx;
	}
	.cu-list{
		background: none;
		border-top: #EFEFEF 1upx solid;
	}
	.cu-list.menu-avatar.cu-item {
		background: none;
	}
</style>
