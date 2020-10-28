<template>
    <view>
        <picker-view v-if="visible" :indicator-style="indicatorStyle" :value="value" @change="bindChange">
            <picker-view-column >
                <view class="item" v-for="(item,index) in years" :key="index">{{item}}年</view>
            </picker-view-column>
            <picker-view-column>
                <view class="item" v-for="(item,index) in months" :key="index">{{item}}月</view>
            </picker-view-column>
            <picker-view-column>
                <view class="item" v-for="(item,index) in days" :key="index">{{item}}日</view>
            </picker-view-column>
			 <picker-view-column v-if="isdata">
			    <view class="item" v-for="(item,index) in hours" :key="index">{{item}}</view>
			</picker-view-column>
			<picker-view-column v-if="isdata">
			    <view class="item" v-for="(item,index) in seconds" :key="index">{{item}}</view>
			</picker-view-column>
        </picker-view>
		
    </view>
</template>

<script>
    export default {
        data: function () {
            const date = new Date();
            const years = [];
            const year = date.getFullYear();
            const months = [];
            const month = date.getMonth() + 1
            const days = [];
            const day = date.getDate();
			const hours = [];
			const hour= date.getHours();
			const seconds=[];
			const second=date.getMinutes();
            for (let i = 2010; i <= date.getFullYear()+5; i++) {
                years.push(i)
            }

            for (let i = 1; i <= 12; i++) {
                months.push(i)
            }

            for (let i = 1; i <= 31; i++) {
                days.push(i)
            }
			for (let i = 0; i <= 23; i++) {
				if(i<10){
					hours.push('0'+i)
				}else{
					hours.push(i)
				}
			}
			for (let i = 0; i <= 59; i++) {
				if(i<10){
					seconds.push('0'+i)
				}else{
					seconds.push(i)
				}
			    
			}
            return {
                years,
                year,
                months,
                month,
                days,
                day,
				hours,
				hour,
				seconds,
				second,
                value: [years.length-6, month - 1, day - 1,hour,second],
				/**
				 * 解决动态设置indicator-style不生效的问题
				 */
                visible: true,
                indicatorStyle: 'height: ${Math.round(uni.getSystemInfoSync().screenWidth/(750/100))}px;',
				basecheck:true
            }
        },props:{
			isdata:{
				type:Boolean,
				default:true
			}
		},
        methods: {
            bindChange: function (e) {
				this.basecheck=false;
                const val = e.detail.value
                this.year = this.years[val[0]]
                this.month = this.months[val[1]]
                this.day = this.days[val[2]]
				this.hour = this.hours[val[3]]
				this.second = this.seconds[val[4]];
				var time=this.year+"-"+this.month+"-"+this.day;
				if(this.isdata==true){
					time+=" "+this.hour+":"+this.second+":"+"00";
				}
				this.$emit("ontime",time);
            }
        }
    }
</script>

<style>
	
    picker-view {
        width: 100%;
        height: 600upx;
        margin-top:20upx;
    }

    .item {
        line-height: 100upx;
        text-align: center;
    }
</style>
