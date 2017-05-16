var http = require('http')
var fs = require('fs')
var url = require('url')

//console.log(Object.keys(http))
var port = process.env.PORT || 6360;

var server = http.createServer(function(request, response){

  var temp = url.parse(request.url, true)
  var path = temp.pathname
  var query = temp.query
  var method = request.method  

 if(path === '/'){
     var string = fs.readFileSync('./index.html')
     response.setHeader('Content-type','text/html;charset=utf-8')
     response.end(string)
}else if(path ==='/style.css'){
     var string = fs.readFileSync('./style.css')
     response.setHeader('Content-type','text/css')
     response.end(string)
}else if(path ==='/main.js'){
     var string = fs.readFileSync('./main.js')
     response.setHeader('Content-type','application/javascript')
     response.end(string)
}else if(path ==='/page1.json'){
     var string = fs.readFileSync('./page1.json')
     response.setHeader('Content-type','application/json')
     response.end(string)
}else if(path ==='/page2.json'){
     var string = fs.readFileSync('./page2.json')
     response.setHeader('Content-type','application/json')
     response.end(string)
}else if(path ==='/page3.json'){
     var string = fs.readFileSync('./page3.json')
     response.setHeader('Content-type','application/json')
     response.end(string)
}else if(path ==='/page4.json'){
     var string = fs.readFileSync('./page4.json')
     response.setHeader('Content-type','application/json')
     response.end(string)
}else if(path ==='/page5.json'){
     var string = fs.readFileSync('./page5.json')
     response.setHeader('Content-type','application/json')
     response.end(string)
}else{
     response.statusCode = 404
     response.setHeader('Content-type','text/html;charset=utf-8')
     response.end('找不到对应的路径，你需要自行修改 index.js')    	
	}
    console.log(method + ' ' + request.url)
})

server.listen(port)
console.log('监听 ' + port + ' 成功，请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)
//server.listen(port)
//console.log('监听 6360 成功')
