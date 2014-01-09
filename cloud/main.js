// Use AV.Cloud.define to define as many cloud functions as you want.
// For example:
AV.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});

AV.Cloud.define("good", function(request, response) {
  var str = request.params.coder + " is good " + request.params.person + " is also good";
  response.success(str);
});


AV.Cloud.define("createCode", function(request, response) {
   var GameScore = AV.Object.extend("test");
   var gameScore = new GameScore();
   var Num=""; 
   for(var i=0;i<6;i++) 
   { 
   Num+=Math.floor(Math.random()*10); 
   } 
   response.success(Num);
   gameScore.save({
    code: Num,
    rewardType: "1234sdf"    
    }, {
    success: function(gameScore) {
     // The object was saved successfully.
    },
    error: function(gameScore, error) {
    // The save failed.
    // error is a AV.Error with an error code and description.
    }
    });
});


AV.Cloud.define("getReward", function(request, response) {  
  var GameScore = AV.Object.extend("test");
  var query = new AV.Query(GameScore);
  query.equalTo("code", request.params.code);
  query.find({
    success: function(results) {      
      response.success(results.get("rewardType"));
	  //results.destroy();
    },
    error: function() {
      response.error("can't fing code");
    }
  });
});