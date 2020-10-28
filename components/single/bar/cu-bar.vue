<template>
	<view>
		<view class="cu-bar bg-white " :class="[isTop?'margin-top':'margin-line']" @click="onClick">
			<view class="action" :class="[{'border-title':modal==1,'sub-title':modal==2,'title-style-3':modal==3}]">
				<text v-if="icon!=''" :class="['cuIcon-' + icon,'text-'+Bgcolor]"></text>
				<text class="text-bold" :class="['text-'+Bgcolor,fontsize]" >{{title}}</text>
				<text v-if="modal==1" :class="['bg-'+Bgcolor]" style="width:3rem"></text>
				<!-- <text class="bg-gradual-blue" style="width:3rem"></text> -->
				<text v-else-if="modal==2&&hint!=''" class="text-ABC" :class="['text-'+Bgcolor]">{{hint}}</text>
				<text v-else-if="modal==2&&hint==''" :class="['bg-'+Bgcolor]"></text>
				<text v-else-if="modal==3" class="text-Abc self-end margin-left-sm" :class="['text-'+Bgcolor]">{{hint}}</text>
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
				var style=""
				return style
			}
		},
		props: {
			title:{
				type:String,
				default:'标题'
			},
			icon: {
				type: String,
				default: ''
			},
			mold: {
				type: [Boolean, String],
				default: false
			},
			modal:{
				type: Number,
				default: 0
			},
			fontsize:{
				type: String,
				default:'text-xl'
			},
			Bgcolor: {
				type: String,
				default: 'red'
			},
			hint: {
				type: String,
				default: ''
			},
			isTop:{
				type: [Boolean, String],
				default: false
			}
		},
		methods: {
			onClick() {
				this.$emit('onclick', true);
			}
			
		}
	}
</script>

<style scoped>
	
</style>
