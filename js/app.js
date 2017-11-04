/**
 * 演示程序当前的 “注册/登录” 等操作，是基于 “本地存储” 完成的
 * 当您要参考这个演示程序进行相关 app 的开发时，
 * 请注意将相关方法调整成 “基于服务端Service” 的实现。
 **/
(function($, owner) {
	/**
	 * 用户登录
	 **/
	owner.login = function(loginInfo, callback) {
		callback = callback || $.noop;
		loginInfo = loginInfo || {};
		loginInfo.email = loginInfo.email || '';
		loginInfo.password = loginInfo.password || '';
//		if(loginInfo.email.length < 3) {
//			return callback('账号最短为 3 个字符');
//		}
		if(loginInfo.password.length < 6) {
			return callback('密码最短为 6 个字符');
		}

		// 从服务端获取用户名密码的验证结果
		mui.post('http://ihealth.yangyingming.com/api/v1/usercheck', loginInfo, function(data) {
			//服务器返回响应，根据响应结果，分析是否登录成功；
			//获取认证结果
			authed = data.result;
			if(authed) {
				// 登录成功
				// 添加本地设置
				var settings = owner.getSettings();
				settings.autoLogin = loginInfo.autoLogin;
				owner.setSettings(settings);
				// 创建本地状态
				return owner.createState(data.data, callback);
			} else {
				return callback(data.msg);
			}
		}, 'json');

	};

	owner.createState = function(data, callback) {
		//		var state = owner.getState();
		//		state.email = name;
		//		state.token = "token123456789";
		console.log(JSON.stringify(data));
		owner.setState(data);
		return callback();
	};

	/**
	 * 新用户注册
	 **/
	owner.reg = function(regInfo, callback) {
		callback = callback || $.noop;
		regInfo = regInfo || {};
		regInfo.email = regInfo.email || '';
		regInfo.password = regInfo.password || '';
//		if(regInfo.email.length < 3) {
//			return callback('用户名最短需要 5 个字符');
//		}
		if(regInfo.password.length < 6) {
			return callback('密码最短需要 6 个字符');
		}
		if(!checkEmail(regInfo.email)) {
			return callback('邮箱地址不合法');
		}
		// 发送注册数据到后台
		mui.post('http://ihealth.yangyingming.com/api/v1/reguser',regInfo,function(data){
			console.log('hhh');
			console.log(JSON.stringify(data));
			if(data.result){
				// 注册成功
				// 接着登录
				owner.login({email: regInfo.email, password:regInfo.password, autoLogin: true})
			}
			else{
				return callback(data.msg);
			}
		});
	};

	/**
	 * 获取当前状态
	 **/
	owner.getState = function() {
		var stateText = localStorage.getItem('$state') || "{}";
		return JSON.parse(stateText);
	};

	/**
	 * 设置当前状态
	 **/
	owner.setState = function(state) {
		state = state || {};
		localStorage.setItem('$state', JSON.stringify(state));
		//var settings = owner.getSettings();
		//settings.gestures = '';
		//owner.setSettings(settings);
	};

	var checkEmail = function(email) {
		email = email || '';
		return(email.length > 3 && email.indexOf('@') > -1);
	};

	/**
	 * 找回密码
	 **/
	owner.forgetPassword = function(email, callback) {
		callback = callback || $.noop;
		if(!checkEmail(email)) {
			return callback('邮箱地址不合法');
		}
		return callback(null, '新的随机密码已经发送到您的邮箱，请查收邮件。');
	};

	/**
	 * 获取应用本地配置
	 **/
	owner.setSettings = function(settings) {
		settings = settings || {};
		localStorage.setItem('$settings', JSON.stringify(settings));
	}

	/**
	 * 设置应用本地配置
	 **/
	owner.getSettings = function() {
		var settingsText = localStorage.getItem('$settings') || "{}";
		return JSON.parse(settingsText);
	}
	/**
	 * 获取本地是否安装客户端
	 **/
	owner.isInstalled = function(id) {
		if(id === 'qihoo' && mui.os.plus) {
			return true;
		}
		if(mui.os.android) {
			var main = plus.android.runtimeMainActivity();
			var packageManager = main.getPackageManager();
			var PackageManager = plus.android.importClass(packageManager)
			var packageName = {
				"qq": "com.tencent.mobileqq",
				"weixin": "com.tencent.mm",
				"sinaweibo": "com.sina.weibo"
			}
			try {
				return packageManager.getPackageInfo(packageName[id], PackageManager.GET_ACTIVITIES);
			} catch(e) {}
		} else {
			switch(id) {
				case "qq":
					var TencentOAuth = plus.ios.import("TencentOAuth");
					return TencentOAuth.iphoneQQInstalled();
				case "weixin":
					var WXApi = plus.ios.import("WXApi");
					return WXApi.isWXAppInstalled()
				case "sinaweibo":
					var SinaAPI = plus.ios.import("WeiboSDK");
					return SinaAPI.isWeiboAppInstalled()
				default:
					break;
			}
		}
	}
}(mui, window.app = {}));