<template>
	<view>
		<view class="flex align-center padding shadow-box" v-for="(item, index) in msgtype" :key="index"
		 :data-type="item.type" @click="onClick">
			<image class="icon" :src="item.image"></image>
			<view class="margin-left">
				<view class="flex align-center">
					<text class="text-lg text-bold">{{item.name}}</text>
					<text class="margin-left-sm text-orange" v-if="item.newMsg > 0">{{item.newMsg}}条新消息</text>
				</view>
				<view class="text-gray">{{item.info == '' ? '暂无新消息' : item.info}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data() {
			return{
				msgtype: []
			}
		},
		props: {
			datas: {}
		},
		created() {
			this.msgtype = this.datas
			this.trim()
		},
		watch: {
			datas: (v_new, v_old) => {
				this.msgtype = v_new
				this.trim()
			} 
		},
		methods: {
			trim() {
				for(let t in this.msgtype){
					this.msgtype[t].info = this.msgtype[t].info.length > 18 ? this.msgtype[t].info.substr(0, 18) + '...' : this.msgtype[t].info
				}
			},
			onClick(e) {
				let type = e.currentTarget.dataset.type
				this.$emit("onclick", type)
			}
		}
	}
</script>

<style scoped>
	.icon {
		width: 88upx;
		height: 88upx;
	}
	
	.shadow-box {
		background-color: white;
		box-shadow: 0upx 0upx 8upx 1upx rgba(0, 0, 0, 0.07);
		margin: 30upx 30upx;
		border-radius: 20upx;
	}
</style>