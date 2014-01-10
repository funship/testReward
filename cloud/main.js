// Use AV.Cloud.define to define as many cloud functions as you want.
// For example:
AV.Cloud.define("good", function(request, response) {
  var str = request.params.coder + " is good " + request.params.person + " is also good";
  response.success(str);
});
/*
function checkDulicateCode(GameReward,code)
{
    var isDulicateCode = false;
    var query = new AV.Query(GameRward);
        query.equalTo("code", request.params.code);
        
        query.find({
        success: function(results) {
        if( results.length > 0 )
        {
         isDulicateCode = true;
        }
         //
        },
        error: function() {
             response.error("can't fing code");
        }
    return isDulicateCode;
}
*/


function getRewardCode(tableName,totalNumber)
{
    //var GameRward = AV.Object.extend("Reward");
	var GameRward = AV.Object.extend("test");
    var gameRward = new GameRward();
    var codeIndex = 0;
 
    for(codeIndex = 0;codeIndex < totalNumber;++codeIndex)
    {
        var codeNumber=""; 
        for(var i=0;i<15;i++) 
        { 
             codeNumber+=Math.floor(Math.random()*10); 
        } 
        
        var rewardRandom = Math.floor(Math.random() * 100);
        var rewardNum = 1;
        if(rewardRandom < 90)
        {
          rewardNum = 1;
        }else if(rewardRandom < 98)
        {
          rewardNum = 2;
        }
        else
        {
          rewardNum = 3;
        }
   
        //codeIndex = codeIndex + 1; 
        //if(!checkDulicateCode(GameReward,codeNumber))
        //{
        
            gameRward.save({
            code: codeNumber,
            rewardType: "1sss"    
            }, {
            success: function(gameRward) {
            
            },
            error: function(gameRward, error) {
            // The save failed.
            // error is a AV.Error with an error code and description.
            }
           });
        
        //} 
    }

}


AV.Cloud.define("createCode", function(request, response) {
   var tableName = "Reward";
   var str = request.params.coder;
   var codeNumber = request.params.number;
   if(str == "funship@funship.org.123")
   {       
       getRewardCode(tableName,codeNumber);
       response.success("create code ok"+codeNumber);
   }
   
   
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
        response.success(object.get('rewardType'));
        object.destroy();
     }
     //
    },
    error: function() {
      response.error("can't fing code");
    }
  });
});