var express = require("express");
var fs = require("fs");
var path = require("path"); //系统路径模块
var router = express.Router();

router.get("/", function(req, res, next) {
  var file = path.join("", "filedata/file.json"); //文件路径，__dirname为当前运行js文件的目录
  fs.readFile(file, "utf-8", function(err, data) {
    if (err) {
      res.send("文件读取失败");
    } else {
      var postdata = JSON.parse(data);
      res.send(postdata);
    }
  });
  //var noneExistFileName = ["async_create.", new Date() - 0, ".json"].join("");
  // fs.writeFile(noneExistFileName, "{a:b}", function(err) {
  //   if (err) throw err;
  //   console.log(noneExistFileName + "不存在，被创建了！");
  //   res.send('respond with a resource');
  // });
});

module.exports = router;
