<template>
	<view class="nav-list">
		<view
			v-for="(item, index) in datas"
			:key="index"
			hover-class="none"
			:url="item.url"
			class="nav-li"
			:class="'bg-' + item.color"
			:style="[{ animation: 'show ' + ((index + 1) * 0.2 + 1) + 's 1' }]"
			v-if="item.show"
			@click="toGoods"
			:data-index="index"
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
			return {
				
			};
		},props:{
			datas:Array
		},methods:{
			toGoods(e) {
				let index=e.currentTarget.dataset.index;
				this.$emit('onclick',index);
			}
		}
		
	}
</script>

<style>

</style>
