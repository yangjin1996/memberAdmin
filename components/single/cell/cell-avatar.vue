<template>
	<view>
		<view class="cu-list menu"  :class="[isTop?'margin-top':'margin-line',menuBorder ? 'sm-border' : '', card ? 'card-menu margin-top' : '']">
			<view class="cu-item " :class="arrow ? 'arrow' : ''" >
				<button class="cu-btn content" @click="onClick">
					<text v-if="leftIcon!=''" :class="['cuIcon-' + leftIcon,'text-'+bgColor]" ></text>
					<image v-if="leftImage!=''" :src="leftImage" class="png" mode="aspectFit"></image>
					<text  class="text-grey">{{title}}</text>
				</button>
				<view class="action">
					<view class="cu-avatar-group">
						<view class="cu-avatar round sm" v-for="(item,index) in datas" :key="index" :style="'background-image:url('+item+');'"></view>
					</view>
					<text class="text-grey text-sm" v-if="hint!=''">{{hint}}</text>
				</view>
			</view>
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
		style() {
			var style = '';
			return style;
		}
	},
	props: {
		title:{
			type:String,
			default:'标题'
		},hint:{
			type:String,
			default:''
		},
		menuBorder: {
			type: [Boolean, String],
			default: false
		},
		card: {
			type: [Boolean, String],
			default: false
		},
		arrow: {
			type: [Boolean, String],
			default: false
		},
		leftIcon: {
			type: String,
			default: ''
		},
		leftImage: {
			type: String,
			default: ''
		},
		bgColor: {
			type: String,
			default: 'red'
		},
		isTop:{
			type: [Boolean, String],
			default: false
		},
		datas:Array
	},
	methods: {
		onClick() {
			this.$emit('onclick', true);
		},
		onRight() {
			this.$emit('onright', true);
		},bindData:function(e){
			this.$emit('onbind', e);
		}
	}
};
</script>

<style scoped></style>
