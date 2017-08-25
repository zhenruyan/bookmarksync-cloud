const express = require('express');
const router = express.Router();
const info = require('../model/admin/info.js');

/*
登录
 */
router.get('/login',function (req,res,next) {
    let msgdata={code:'1',text:'corecms-nodejs管理系统后台'};
    res.render('admin/login',{msg:JSON.stringify(msgdata)});
});
router.post('/login',function (req,res,next) {
    let msgdata={code:'1',text:'corecms-nodejs管理系统后台'};
    res.render('admin/login',{msg:JSON.stringify(msgdata)});
});

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('admin/admin', { title: '测试11111' });
});
/*
系统信息
 */
router.get('/sysinfo/',(req,res,next)=>{
  // console.log(info);
    res.render('admin/info',{sysinfo:JSON.stringify(info)});
});

module.exports = router;
