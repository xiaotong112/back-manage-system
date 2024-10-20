// 导入express框架
const express = require('express')
// 创建express实例
const app = express()






app.get('/',(req,res)=>{
    res.end('helloworld')
})



// 绑定和侦听指定的主机和端口
app.listen(3001, () => {
	console.log('http://127.0.0.1:3007')
})