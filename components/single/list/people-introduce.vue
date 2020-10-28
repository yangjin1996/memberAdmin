<template>
	<view>
		<view class="teacher-box margin-sm padding-sm flex align-start radius" v-for="(item, index) in items" :key="index"
		 @click="onClick" :data-index="index">
			<view class="flex justify-center margin-bottom-xs">
				<view class="cu-avatar xl round" :style="'background-image: url(' + item.avatar + ')'"></view>
			</view>
			<view class="margin-left-sm">
				<view class="title-text">{{item.name}}</view>
				<view class="text-grey" style="margin: 4rpx 0rpx;">
					<text>{{item.tag1}}</text>
					<text class="margin-left-xs margin-right-xs">|</text>
					<text>{{item.tag2}}</text>
				</view>
				<view class="margin-top-ss">{{item.introduce}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data() {
			return{
				items: []
			}
		},
		props: {
			datas: {}
		},
		created() {
			this.items = this.datas
			for(let t in this.items){
				this.items[t].introduce = this.trim(this.items[t].introduce)
			}
		},
		watch: {
			datas: (v_new, v_old) => {
				this.items = v_new
				for(let t in this.items){
					this.items[t].introduce = this.trim(this.items[t].introduce)
				}
			}
		},
		methods: {
			onClick(e) {
				let index = e.currentTarget.dataset.index;
				this.$emit("onclick", inedx);
			},
			trim (str){
				if(str == null || str == ''){
					return
				}
			    if(str.length > 34){
			        return str.substr(0, 36) + '...'
			    }else{
			        return str
			    }
			}
		}
	}
</script>

<style>
	.teacher-box{
		background-color: #FFFFFF;
		box-shadow: 0upx 0upx 10upx rgba(21, 22, 23, 0.24);
	}
	
	.title-text{
		font-size: 30upx;
		font-weight: bold;
	}
</style>