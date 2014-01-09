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
   var GameScore = AV.Object.extend("GameScore");
   var gameScore = new GameScore();

   gameScore.save({
    score: 1337,
    playerName: "Sean Plott",
    cheatMode: false
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