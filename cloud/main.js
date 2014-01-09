// Use AV.Cloud.define to define as many cloud functions as you want.
// For example:
AV.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});

AV.Cloud.define("good", function(request, response) {
  var str = request.params.coder + " is good " + request.params.person + " is also good";
  response.success(str);
});
