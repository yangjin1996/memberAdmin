var base = "api/";
var prefix = base + "v1/";
const serviceAddress = {
	//首页
	"HOME": prefix + "index",
	//微信登录
	"WX_LOGIN": prefix + "wxlogin",
	//热门特区商品详情
	"HOT_DATAILS": prefix + "getHotDatails",
	//获取商品详情
	"SHOP_DATAILS": prefix + "getShopDatails",
	//分享商品
	"SHARE_SHOP": prefix + "shareShop",
	//获取全部优惠券
	"ALL_COUPON": prefix + "getAllCoupon",
	//获取优惠券详情
	"COUPON_DATAILS": prefix + "getCouponDatails",
	//领取优惠券
	"CREATE_MY_COUPON": prefix + "createMyCoupon",
	//分享优惠券
	"SHARE_COUPON": prefix + "shareCoupon",
	//获取我的优惠券
	"MY_COUPON": prefix + "getMyCoupon",
	//获取品牌列表
	"BRAND_LIST": prefix + "getBrandList",
	//获取品牌详情
	"BRAND_DATAILS": prefix + "getBrandDatails",
	//获取收益
	"PROFIT_INDEX": prefix + "profitIndex",
	//支付
	"COUPON_PAY": prefix + "couponPay",
	//获取订单数据
	"MY_ORDER": prefix + "getMyorder",
	//获取个人数据
	"GET_USER": prefix + "getMyInfo",
	//获取修改个人信息
	"EDIT_USERINFO": prefix + "editMyInfo",
	//获取我的分享
	"SHARE_COUPON": prefix + "myShareCoupon",
	//获取Token
	"ACCESS_TOKEN": prefix + "getShareImge",
	//提交客服
	"CREATE_CONSULTATION": prefix + "userSendProblem",
	"DECRYPT_PHONE":prefix+"decryptPhone"
};
export default {
	serviceAddress
}
