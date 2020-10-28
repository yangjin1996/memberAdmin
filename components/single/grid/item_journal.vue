<template>
	<view class="journal">
		<view class="journal-item" v-for="(item,index) in datas" :key="index" @click="onClickJournal">
			<view class="journal-item-info">
				<view class="journal-title">
					<image lazy-load="true" class="loading journal-avatar" :src="item.avatar"></image>
					<view class="journal-title-desc">
						<view class="journal-author">{{item.name}}</view>
						<view class="journal-time">{{item.addtime}}</view>
					</view>
				</view>
			</view>
			<view class="item-journal-content" v-if="item.content!=null">
				{{item.content}}
			</view>
			<view class="journal-img-group" v-if="item.image.length>0">
				<view class="item-boxs-img" v-for="(item2,index2) in item.image" :key="index2">
					<image v-if="item2.length>10" lazy-load="true" class="loading item-journal-img " :data-src="item2" :data-index="index" @tap="previewImage"
					 :src="item2"></image>
				</view>
			</view>
			<view class="journal-foot">
				<view class="journal-foot-date"><text v-if="uid==item.uid" :data-id="item.id" @click="onDel">删除</text></view>
				<view class="journal-foot-like" :data-index="index" @click="onZan">
					<text v-if="item.is_zan==1" class="lg text-red cuIcon-likefill"></text>
					<text v-if="item.is_zan==0" class="lg text-grey cuIcon-like"></text>
					<text class="journal-foot-likenum"> {{item.zan}}</text>
				</view>
				<view class="journal-foot-comment" :data-id="item.id" data-pid="0" @click="onappraise">
					<text class="lg text-grey cuIcon-comment"></text>
					<text class="journal-foot-likenum"> {{item.comment.length}}</text>
				</view>
			</view>
			<view class="journal-comment" v-if="item.comment.length>0">
				<view class="journal-comment-item" v-for="(comment,index3) in item.comment" :key="index3" 
				 :data-id="item.id" :data-pid="comment.id" @click="onappraise">
				 <text class="journal-comment-at" v-if="comment.pid!=0">{{item.comment[index3-1].name}}</text>
				 <text class="journal-comment-call" v-if="comment.pid!=0">回复</text>
					<text class="journal-comment-title">{{comment.name!=null?comment.name:"游客"}}:</text>
					<text class="journal-comment-text text-grey">{{comment.content}}</text>
				</view>
			</view>
		</view>
		<view class="comment-page" v-if="isComment" @click="closeComment">
			
		</view>
		<view class="cu-form-group comment-box" :style="{bottom:keyWordHeight}" v-if="isComment">
			<input @input="onInputContent" adjust-position='false' @blur="onblur" @focus="onfocus" :focus='isComment' cursor-spacing="12" placeholder="请输入评论内容" name="input"></input>
			<button class='cu-btn bg-gray shadow' @click="onClickComment">发送</button>
		</view>
	</view>

</template>

<script>
	export default {
		name: 'journal',
		data() {
			return {
				did: 0,
				pid: 0,
				content: '',
				isComment:false,
				keyWordHeight:0
			}
		},
		props: {
			datas: {},
			uid: 0
		},
		methods: {
			onfocus:function(){
				// #ifdef APP-PLUS
				uni.hideTabBar(true)
				// #endif
			},
			onblur:function(){
				//uni.showTabBar(true);
			},
			onInputContent: function(e) {
				//console.log(e.detail.value);
				this.content = e.detail.value;

			},
			onClickJournal: function() {
				
			},closeComment:function(){
				this.isComment=false;
				// #ifdef APP-PLUS
				plus.key.hideSoftKeybord();
				uni.showTabBar(true);
				// #endif
				
			},
			onDel(e) {
				let id = e.currentTarget.dataset.id;
				let params = {
					uid: this.uid,
					id: id
				}
				var that = this
				this.util.showModalMsg("你确定要删除？","删除","取消",function(){
					that.$axios.post(that.umcons.serviceAddress.DT_DEL, params, function(res, code) {
						console.log(res);
						if (code == 0) {
							that.$emit('ondel', id);
						}
					}, function(error) {
					
						console.log(error);
					});
				},function(){
					
				})
				

			},
			previewImage: function(e) {
				var current = e.target.dataset.src;
				var index = e.target.dataset.index;
				var imgs = this.datas[index].image;
				uni.previewImage({
					current: current,
					urls: imgs
				})
			},
			onZan: function(e) {
				let index = e.currentTarget.dataset.index;
				let item = this.datas[index];
				if (item.is_zan == 0) {
					let params = {
						dt_id: item.id,
						uid: this.uid
					}
					var that = this;
					this.$axios.post(this.umcons.serviceAddress.DT_ZAN, params, function(res, code) {
						console.log(res)
						if (code == 0) {
							that.$emit('onzan', index);
						}
					}, function(error) {
						console.log(error)
					});
				} else {
					this.util.showAlert("你已经点赞");
				}

			},
			onClickComment: function(e) {
				if (!this.util.isExist(this.content)) {
					this.util.showAlert("请输入评论内容");
					return;
				}
				this.isComment = false;
				let params = {
					user_dt_id: this.did,
					uid: this.uid,
					pid: this.pid,
					content: this.content
				}
				console.log(params);
				var that = this;
				this.$axios.post(this.umcons.serviceAddress.CREATE_USER_DT_COMMUNITY, params, function(res, code) {
					console.log(res)
					if (code == 0) {
						uni.showTabBar(true);
						that.$emit('oncomment',true);

					}
				}, function(error) {
					console.log(error)
				});
			},
			openComment: function(e) {
				this.did = e.currentTarget.dataset.id;
				this.pid = e.currentTarget.dataset.pid;
				this.isComment =!this.isComment;
				// #ifdef APP-PLUS
				uni.hideTabBar(true);
				this.keyWordHeight=this.yzutil.getKeyWordHeight();
				// #endif
				
			},onappraise:function(index){
			let url='../appraise/appraise?id='+index;
			uni.navigateTo({
				url:url
			})
			}
		}
	}  
</script>
<!-- StarbbUI -->
<style scoped>
	.journal-item {
		background-color: #FFFFFF;
		padding: 26upx;
		position: relative;
	}

	.journal-item:after {
		content: '';
		width: calc(100% - 20px);
		height: 1px;
		background-color: #DFDFDF;
		bottom: 0;
		left: 10px;
		right: 10px;
		position: absolute;

	}

	.journal-item-info {
		width: 100%;


	}

	.journal-avatar {
		width: 70upx;
		height: 70upx;
		border-radius: 50%;
	}

	.journal-author {
		font-size: 28upx;
		font-family: FZLTHK--GBK1-0;
		font-weight: 400;
		color: rgba(85, 84, 84, 1);
	}

	.journal-time {
		font-size: 24upx;
		font-family: FZLTKHK--GBK1-0;
		font-weight: 400;
		color: rgba(154, 152, 152, 1);
		margin-top: 20upx;
	}

	.journal-title {
		width: 100%;
		display: flex;
		padding-left: 10upx;
		padding-right: 10upx;
		padding-top: 4upx;
		padding-bottom: 4upx;
		margin-bottom: 4upx;
		position: relative;
	}



	.journal-title-desc {
		margin-left: 16upx;
		font-size: 26upx;
		line-height: 26upx;
		font-family: FZLTKHK--GBK1-0;
		font-weight: 400;
		color: rgba(146, 145, 145, 1);
		display: block;
	}



	.journal-btn {
		color: rgba(244, 194, 73, 1);
		font-size: 28upx;
		padding-top: 6upx;
		padding-bottom: 6upx;
		padding-left: 20upx;
		padding-right: 20upx;
		border: solid 2upx rgba(244, 194, 73, 1);
		border-radius: 10px;
		margin-right: 6upx;
	}


	.item-journal-content {
		margin-left: 10upx;
		line-height: 34upx;
		font-size: 30upx;
		font-family: FZLTHK--GBK1-0;
		font-weight: 400;
		color: rgba(85, 84, 84, 1);
		padding-bottom: 16upx;
		padding-top: 16upx;
	}

	.journal-img-group {
		width: 100%;
		padding-left: 10upx;
		padding-right: 10upx;
		text-align: left;
		display: block;

	}

	.item-boxs-img {
		width: 33%;
		float: left;
		height: 228upx;
		padding: 4upx;
	}

	.item-journal-img {
		width: 100%;
		height: 100%;
		border-radius: 8upx;
	}

	.journal-foot {
		display: flex;
		width: 100%;

		min-height: 50upx;
		line-height: 50upx;
		align-items: center;
	}

	.journal-foot-like {
		right: 125upx;
		position: absolute;
		font-size: 26upx;
		font-family: FZLTKHK--GBK1-0;
		font-weight: 400;
		color: rgba(183, 183, 183, 1);
	}

	.journal-foot-comment {
		right: 55upx;
		position: absolute;
		font-size: 26upx;
		font-family: FZLTKHK--GBK1-0;
		font-weight: 400;
		color: rgba(183, 183, 183, 1);
	}

	.journal-foot-date {
		margin-left: 30upx;
		font-size: 24upx;
		font-family: FZLTKHK--GBK1-0;
		font-weight: 400;
		color: rgba(204, 203, 203, 1);
	}
	.journal-foot-likenum {
		margin-left: 10upx;
	}

	.journal-comment {
		background:rgba(249,249,249,1);
		padding: 10upx;
		border-radius: 8upx;
	}

	.journal-comment-title {
		margin-right: 10upx;
		font-size: 26upx;
		font-family: FZLTHK--GBK1-0;
		font-weight: 400;
		color: rgba(0, 205, 118, 1);
	}

	.journal-comment-at {
		font-size: 26upx;
		font-family: FZLTKHK--GBK1-0;
		font-weight: 400;
		color: rgba(0, 205, 118, 1);
	}
	.journal-comment-call{
		font-size: 24upx;
		font-family: FZLTKHK--GBK1-0;
		font-weight: 400;
		color: rgba(0, 205, 118, 1);
		margin-left: 5upx;
		margin-right: 5upx;
	}
	.journal-comment-text {

		font-weight: 400;
		font-size: 26upx;
		font-family: FZLTKHK--GBK1-0;
		font-weight: 400;
		color: rgba(85, 84, 84, 1);
	}

	.journal-comment-item {
		padding-top: 4upx;
		padding-bottom: 4upx;
	}

	.cuIcon-comment {
		margin-left: 20upx;
	}

	.comment-box {
		position: fixed;
		bottom: 0;
		width: 100%;
		left: 0;
		right: 0;
		z-index: 999;
		background-color: #FFFFFF;
		border-top: #EDEDED 1upx solid;
	}
	.comment-page{
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		position: fixed;
		bottom: 0;
		top: 0;
		left: 0;
		right: 0;
		z-index: 999;
	}
	.cuIcon-likefill,.cuIcon-comment,.cuIcon-like {
		font-size: 30upx;
	}
</style>
