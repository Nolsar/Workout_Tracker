var path = require("path");

module.exports = function(app){ 
  app.get("/exercise",function (req,res){   
      res.sendFile(path.join(__dirname,"../Develop/public/exercise.js"));
  });

  app.get("/",function(req,res){    
      res.sendFile(path.join(__dirname,"../Develop/public/index.html"));
  });

  app.get("/stats",function(req,res){   
      res.sendFile(path.join(__dirname,"../Develop/public/stats.html"));
  });

}