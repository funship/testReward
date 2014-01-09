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
   var GameCode = new AV.extend("test");
   var gameCode = GameCode();
   gameCode.save({   
    code: "11111",
    reardType: "2222"
  }, {
    success: function(gameCode) {
	response.success("ok");
      // The save was successful.
    },
    error: function(gameCode, error) {
      // The save failed.  Error is an instance of AV.Error.
	  response.success("error"+error);
    }
  });
});