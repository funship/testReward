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
   var randomCode = Math.random()*10+1;
   response.success(randomCode);
   gameScore.save({
    code: randomCode,
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