// Use AV.Cloud.define to define as many cloud functions as you want.
// For example:
AV.Cloud.define("good", function(request, response) {
  var str = request.params.coder + " is good " + request.params.person + " is also good";
  response.success(str);
});

AV.Cloud.define("getTime", function(request, response) {
  
  var date = new Date();  
  var year = date.getFullYear();//年
  var month = date.getMonth() + 1;//月
  var day = date.getDate();	 //日  
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  //月份小于10时显示为'0X'
  if (month < 10) {
  month = "0" + month;
  }

  //天数小于10时显示为'0X'
  if (day < 10) {
  day = "0" + day;
  }

  //小时小于10时显示为'0X'
  if (hour < 10) {
  hour = "0" + hour;
  }

  //分钟小于10时显示为'0X'
  if (minute < 10) {
  minute = "0" + minute;
 }

  //秒钟小于10时显示为'0X'
  if (second < 10) {
  second = "0" + second;
 }

  var colon = ":";
  var str = "serverTime " + year + colon + month + colon + day + colon + hour + colon +minute + colon + second;
  response.success(str);
});


AV.Cloud.define("getReward", function(request, response) {  
  var GameScore = AV.Object.extend("Reward");
  var query = new AV.Query(GameScore);
  query.equalTo("code", request.params.code);
  query.find({
    success: function(results) {
     if( results.length > 0 )
     {
        var object = results[0];
        response.success("rewardType:"+object.get('rewardType'));
        object.destroy();
     }
	 else
	 {
		response.success("can't find code");
	 }
     //
    },
    error: function() {
      response.success("can't find code");
    }
  });
});