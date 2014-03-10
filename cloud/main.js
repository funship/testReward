// Use AV.Cloud.define to define as many cloud functions as you want.
// For example:
AV.Cloud.define("good", function(request, response) {
  var str = request.params.coder + " is good " + request.params.person + " is also good";
  response.success(str);
});

AV.Cloud.define("getTime", function(request, response) {
  var myDate() = new Date()();
  var str = myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();
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