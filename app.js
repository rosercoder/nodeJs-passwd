/**
 * @author ngsh
 * @date 2021-12-04 16:32:02
 * @decription passwd gerenater
 *
 */

// 加载模块 load nodules
var express=require('express')

// 创建服务器 create server
var app=express()

// 允许访问指定目录 allow access to specified directory
app.use('/',express.static('./public/'))
app.use('/lib/bootstrap',express.static('./node_modules/bootstrap/dist'))
app.use('/lib/jquery',express.static('./node_modules/jquery/dist'))


app.listen(5001,function(){
  console.log('running...')
})