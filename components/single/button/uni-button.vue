<template>
	<view>
		<button class="cu-btn block margin-tb-sm lg" :class="['bg-' + BgColor,{'round':mold}]" @click="onClick" :open-type="openTypes[otype]" @getphonenumber="bindData" @getuserinfo="bindData" @bindcontact="bindData" @opensetting="bindData">
			<text v-if="Icon!=''" class="cuIconfont-spin" :class="['cuIcon-' + Icon]"></text>
			{{title}}
		</button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			openTypes:['','contact','getUserInfo','getPhoneNumber','share','openSetting','feedback']
			
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
		title: {
			type: String,
			default: '按钮'
		},
		BgColor: {
			type: String,
			default: 'blue'
		},
		Icon: {
			type: String,
			default: ''
		},
		otype:{
			type:Number,
			default:0
		},
		mold: {
			type: [Boolean, String],
			default: false
		}
	},
	methods: {
		onClick() {
			this.$emit('onclick', true);
		},
		onRight() {
			this.$emit('onright', true);
		}
		,bindData:function(e){
			this.$emit('onbind', e);
		}
	}
};
</script>

<style scoped></style>
