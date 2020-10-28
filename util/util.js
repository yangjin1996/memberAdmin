/**
 * 授权
 */
function onAuthorization() {
	var url = encodeURIComponent(window.location.href.split('#')[0]);
	var uid = getnavivalues()['uid'];
	if (!isExist(uid)) {
		window.location.href = 'https://www.homeeyes.cn/wx/Com_oauth?targetUrl=' + url;
	} else {
		return uid;
	}
}
/**
 * 获取参数
 */
function getnavivalues() {
	var url = window.location.search; //获取url中"?"符后的字串
	url = url.split('#/')[0];
	var theRequest = new Array();
	if (url.indexOf('?') !== -1) {
		var str = url.substr(1);
		var strs = str.split('&');
		for (var i = 0; i < strs.length; i++) {
			theRequest[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1]);
		}
	}
	return theRequest;
}
/**
 * 显示toast
 */
function showAlert(msg,type=0,confirm) {
	let icon='none';
	if(type==1){
		icon='success';
	}else if(type==2){
		icon='loading';
	}
	uni.showToast({
		title: msg,
		icon: icon,
		mask: true,
		duration: 1000
	});
	setTimeout(function() {
		uni.hideToast();
		if(confirm){
			confirm();
		}
	}, 1000);
}
/**
 * 提示模态窗
 */
function showModalMsg(msg='你有一条新的提示信息', confirmMsg='确定', cancelMsg='取消', confirm, cancel) {
	uni.showModal({
		title: '提示',
		content: msg,
		confirmText: confirmMsg,
		cancelText: cancelMsg,
		success: function(res) {
			if (res.confirm) {
				if (confirm) {
					confirm(res.confirm);
				}
			} else if (res.cancel) {
				if (cancel) {
					cancel(res.cancel);
				}
			}
		}
	});
}
/**
 * @param {Object} time 时间戳 如果时间戳为10位则转换为13位
 */
function getNowFormatDate(time) {
	if(time.length==10){
		time*=1000;
	}
	var date = new Date(time);
	var seperator1 = '-';
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var strDate = date.getDate();
	if (month >= 1 && month <= 9) {
		month = '0' + month;
	}
	if (strDate >= 0 && strDate <= 9) {
		strDate = '0' + strDate;
	}
	var currentdate = year + seperator1 + month + seperator1 + strDate;
	return currentdate;
}
/**
 * 获取今天时间
 * type 获取时间类型 1 字符串   2数组
 * 默认为1
 */
function getTodayDate(type=1) {
	var date = new Date();
	var seperator1 = '-';
	var seperator2 = ':';
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var strDate = date.getDate();
	var hhstr = date.getHours();
	var mmStr = date.getMinutes();
	var ssStr = date.getSeconds();
	if (month >= 1 && month <= 9) {
		month = '0' + month;
	}
	if (strDate >= 0 && strDate <= 9) {
		strDate = '0' + strDate;
	}
	if (hhstr >= 0 && hhstr <= 9) {
		hhstr = '0' + hhstr;
	}
	if (mmStr >= 0 && mmStr <= 9) {
		mmStr = '0' + mmStr;
	}
	if (ssStr >= 0 && ssStr <= 9) {
		ssStr = '0' + ssStr;
	}
	if(type==1){
		return (year + seperator1 + month + seperator1 + strDate + ' ' + hhstr + seperator2 + mmStr + seperator2 + ssStr);
	}else{
		return [year, month, strDate, hhstr, mmStr, ssStr];
	}
}
/**
 * 判断是否为微信客户端
 */
function isWinXin() {
	var isWeiXin = navigator.userAgent.toLowerCase().indexOf('micromessenger') > -1 ? true : false;
	return isWeiXin;
}
/**
 * 是否存在字符
 * @param {Object} value
 */
function isExist(value) {
	if (value !== null && value !== undefined && value.length > 0) {
		return true;
	} else {
		return false;
	}
}
/**
 * 是否存在数字
 * @param {Object} value
 */
function isNumberExist(value) {
	if (value !== null && value !== undefined && value.length > 0 &&parseInt(value) > 0) {
		return true;
	} else {
		return false;
	}
}
function clickCallPhone(phone) {
	if (isExist(phone) && phone.length >= 8) {
		var content = '是否拨打电话：' + phone;
		uni.showModal({
			title: '提示',
			content: content,
			success: function(res) {
				if (res.confirm) {
					uni.makePhoneCall({
						phoneNumber: phone //仅为示例
					});
				} else if (res.cancel) {
					console.log('用户点击取消');
				}
			}
		});
	} else {
		uni.showToast({
			title: '未有联系方式',
			duration: 1000,
			icon: 'none'
		});
		setTimeout(function() {
			uni.hideToast();
		}, 1000);
	}
}
/**
 * 获取月份天数
 * @param {Object} month
 */
function getDateDays(month) {
	var date = new Date();
	var year = date.getFullYear();
	if (month == 0) {
		month = date.getMonth() + 1;
	}
	var d = new Date(year, month, 0);
	return d.getDate();
}
/**
 * 获取当前月份
 */
function getDateMonth() {
	var date = new Date();
	var month = date.getMonth() + 1;
	return month;
}
function randomCoding(){
	var result = [];
	//生成一个0到25的数字
	var ranNum = Math.ceil(Math.random() * 25);
	//大写字母'A'的ASCII是65,A~Z的ASCII码就是65 + 0~25;
	//然后调用String.fromCharCode()传入ASCII值返回相应的字符并push进数组里
	result.push(String.fromCharCode(65+ranNum));
	return result.join('');
}
/**
 * 加密
 * @param {Object} data
 */
function bitEncrypt(data) {
	var data = data || '';
	var arr = data.split('');
	var result = arr.map(function(item) {
		let letter=	randomCoding();
		return item+letter;
	});
	return result.join('');
}
/**
 * 解密
 * @param {Object} data
 */
function encEncrypt(data) {
	var arr = data.split('');
	let result='';
	for (let i=0,len=arr.length;i<len;i++) {
		if(i%2==0){
			result+=arr[i];
		}
	}
	return result;
}
/**
 * 获取分享配置
 * @param {Object} params
 */
function getSharePage(params) {
	var pages = getCurrentPages(); //获取加载的页面
	var currentPage = pages[pages.length - 1]; //获取当前页面的对象
	var url = currentPage.route+"?"+params;
	let shareinfo={
		title: '都市之佳',
		desc: '邀请您体验小程序',
		path: url,
		logo: 'https://www.homeeyes.cn/app/images/icon_logo.png'
	}
	return shareinfo;
}
function getSharePage2(params,name,desc,logo) {
	var pages = getCurrentPages(); //获取加载的页面
	var currentPage = pages[pages.length - 1]; //获取当前页面的对象
	var url = currentPage.route+"?"+params;
	let shareinfo={
		title: name,
		desc: desc,
		path: url,
		logo: logo
	}
	return shareinfo;
}

export default {
	showAlert,
	getNowFormatDate,
	isWinXin,
	getTodayDate,
	isExist,
	isNumberExist,
	showModalMsg,
	clickCallPhone,
	getDateDays,
	getDateMonth,
	bitEncrypt,
	encEncrypt,
	getSharePage,
	getSharePage2
};