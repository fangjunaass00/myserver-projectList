var express = require("express");
var fs = require("fs");
var path = require("path"); //系统路径模块
var router = express.Router();

router.get("/", function(req, res, next) {
  console.log(req.params);
  console.log(req.query);
  var filedata = JSON.stringify(req.query);
  fs.writeFile("filedata/file.json", filedata, function(err) {
    if (err) throw err;
    var file = path.join("", "filedata/file.json"); //文件路径，__dirname为当前运行js文件的目录
    fs.readFile(file, "utf-8", function(err, data) {
      if (err) {
        res.send("文件读取失败");
      } else {
        res.send(data);
      }
    });
  });
});
module.exports = router;
