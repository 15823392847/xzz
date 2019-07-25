const express=require('express');
const pool=require('../pool.js');
var router=express.Router();
//添加路由
//1创建商品列表--分页查询
router.get('/list',function(req,res){
//res.send('商品列表');
var obj=req.query;
console.log(obj);
var pno=obj.pno;
var count=obj.count;
//页码为空，默认第一页 
if(!pno) 
	pno=1;
//大小为空，默认显示9条数据
if(!count) 
	count=9;
pno=parseInt(pno);
count=parseInt(count);
var start=(pno-1)*count;
pool.query('SELECT lid,title,price FROM xz_laptop LIMIT ?,?',[start,count],function(err,result){
if(err) throw err;
//console.log(result);
res.send(result);
});
});


//添加商品

/*//2商品详情
router.get('/detail',function(req,res){
var obj=req.query;
console.log(obj);
if(!obj.lid){
res.send({code:401,msg:'lid required'});
return;
}
pool.query('SELECT * FROM xz_laptop WHERE lid=?',[obj.lid],function(err,result){
if(err) throw err;
//判断是否检索到用户，如果检索到，把该用户的对象响应到浏览器，否则响应检索不到
if(result.length>0){
res.send(result[0]);
}else{
res.send({code:301,msg:'can not found'});
}
});
//res.send('检索用户');
});

//删除商品
router.get('/delete',function(req,res){
var obj=req.query;
console.log(obj);
if(!obj.lid){
res.send({code:401,msg:'lid required'});
return;
}
pool.query('SELECT * FROM xz_laptop WHERE lid=?',[obj.lid],function(err,result){
if(err) throw err;
console.log(result);
if(result.affectedRows>0){res.send({code:200,msg:'delete suc'});
}else{res.send({code:301,msg:'delete err'});
}
});
});*/







//导出路由器对象
module.exports=router;