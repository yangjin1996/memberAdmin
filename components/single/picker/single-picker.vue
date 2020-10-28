<template>
	<view>
		<view class="cu-form-group margin-top">
			<view class="title">订单</view>
			<picker @change="PickerChange" :value="index" :range="picker">
				<view class="picker">
					{{index>-1?picker[index]:'&nbsp'}}
				</view>
			</picker>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index: -1
			};
		},
		name: 'cu-custom',
		computed: {
			style() {
				var style=""
				return style
			}
		},
		props: {
			datas:{},
			picker:{
				type:Array,
				default:['选项1', '选项2', '选项3']
			}
		},
		methods: {
			onClick() {
				this.$emit('onclick', true);
			},
			onRight() {
				this.$emit('onright', true);
			},
			PickerChange(e) {
				this.index = e.detail.value;
				this.$emit('PickerChanges', this.index);
			}
		}
	}
</script>

<style scoped>
	
</style>
