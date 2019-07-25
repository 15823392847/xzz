const express=require('express');
//引入商品路由器
const productRouter=require('./routes/product.js');
//引入用户路由器
const userRouter=require('./routes/user.js');
//引入body-Parser中间件
const bodyParser=require('body-parser');
var app=express();
app.listen(8080);
//使用body-Parser中间件,将post请求的数据解析为对象
app.use(bodyParser.urlencoded({
	extended:false
}));
app.post('/reg',function(req,res){
	console.log(req.body);
/*res.send(`注册成功，用户名:
${req.body.uname}	
密码:
${req.body.upwd}
邮箱:
${req.body.email}
电话:
${req.body.phone}
`);*/
});

//托管静态资源到public上
app.use(express.static('./public'));
//使用路由器，挂载到/user下
app.use('/user',userRouter);
//使用商品路由器，挂载到/product
app.use('/product',productRouter);
