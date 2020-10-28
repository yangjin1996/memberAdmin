<template>
	<view class="box">
		<view class="cu-bar tabbar border shop" :class="[bgColor, { foot: isBottom }]">
			<view v-if="btnStyle==0" class="btn-group" >
				<block v-for="(item,index) in datas" :key="index"  >
					<button  class="cu-btn bg-red round shadow-blur" @click="onClick" :data-index="index" :class="['bg-' + item.bg]">{{item.text}}</button>
				</block>
			</view>
			<block v-else v-for="(item,index) in datas" :key="index" >
				<view class="bg-red submit" @click="onClick" :data-index="index" :class="['bg-' + item.bg]">{{item.text}}</view>
			</block>
		</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		name: 'cu-custom',
		computed: {
			
		},
		props: {
			datas:{},
			btnStyle:{
				type: Number,
				default: 0
			},
			bgColor: {
				type: String,
				default: 'bg-white'
			},
			isBottom: {
				type: [Boolean, String],
				default: false
			}
		},
		methods: {
			onClick(e) {
				let index=e.currentTarget.dataset.index;
				this.$emit('onclick', index);
			}
			
		}
	}
</script>

<style scoped>
	.box {
		margin: 50upx 0;
	}
	
	.box view.cu-bar {
		margin-top: 20upx;
	}
</style>
