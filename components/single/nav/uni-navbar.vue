<template>
	<view>
		<scroll-view scroll-x :class="[bgColor]" class="nav text-center">
			<view class="cu-item" :class="index==TabCur?'text-green cur':''" v-for="(item,index) in datas" :key="index" @tap="tabSelect" :data-id="index">
				<text v-if="item.cuIcon!=null" :class="['cuIcon-' + item.cuIcon]" class="margin-left-sm"></text> {{item.name}}
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				TabCur: 0,
				scrollLeft: 0
			};
		},
		name: 'cu-nav',
		computed: {
			style() {
				var style=""
				return style
			}
		},
		props: {
			datas:Array,
			bgColor: {
				type: String,
				default: 'bg-white'
			}
		},
		methods: {
			onClick() {
				this.$emit('onclick', true);
			},
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
				this.$emit('onchange', this.TabCur);
			}
		}
	}
</script>

<style scoped>
	
</style>
