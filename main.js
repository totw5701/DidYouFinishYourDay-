var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
var template = require('./lib/template.js');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
   
    if(pathname === '/'){
      if(queryData.id === undefined){
         fs.readdir('./data', function(error, filelist){
            var obj = {
               title:'Welcome To DYFYD',
               description:"manage your schedules :)"
            }
            var list = template.list(filelist);
            var html = template.HTML("Welcome to DYFYD",
               ``,''
                , list
            )
           response.writeHead(200);
           response.end(html);
         });
      }else{
         fs.readdir('./data', function(error, filelist){
            var list = template.list(filelist);
            fs.readFile(`data/${queryData.id}`, 'utf8', (err, data) => {
               var obj = JSON.parse(data)
               var html = template.HTML(`DTFYD - ${obj.title}`,
               ` 
               <a class="upDate-button" href="/update?id=${obj.id}"><span>Update</span></a>
               <form action="/delete_process" method="post">
                  <input type="hidden" name="id" value="${obj.id}">
                  <input class="Delete-button" type="submit" value="Delete">
               </form>`,
                `<div class="schedule">
                <h1 class="schedule__title">${obj.title}</h1>
                <p class="schedule__content">${obj.description}</p>
                <span class="schedule__time">${obj.createTime}</span>
               </div>`,
               list
               )
           response.writeHead(200);
           response.end(html);
           });
         })
      }
  } else if(pathname === '/create'){
   fs.readdir('./data', function(error, filelist){
      var obj = {
         title:'Welcome To DYFYD',
         description:"manage your schedules :)"
      }
      var randomId = parseInt(Math.random() * 10000000)
      var list = template.list(filelist);
      var html = template.HTML(obj.title,
               ``,
                `<div class="schedule">
                <form class="schedule__create-form" action="/create_process" method="post">
                   <input type="hidden" name="id" value="${randomId}">
                   <input type="text" name="title" placeholder="title">
                   <textarea class="create__description" name="description" placeholder="schedule"></textarea>
                   <input type="submit" value="Create">
                </form>
               </div>`,
                list
               )
 
     response.writeHead(200);
     response.end(html);
   });
  } else if(pathname === '/create_process'){
   var body = '';
   request.on('data', function(data){           //서버측에서 데이터를 조각조각 받는데 그 조각을 받을때마다 콜백함수를 실행하도록 세팅 되어있다.
      body = body + data;
    });
   request.on('end', function(){
      var post = qs.parse(body);
      var id = post.id;
      var title = post.title;
      var description = post.description;
      let newDate = new Date();
      let year = newDate.getFullYear();
      let month = newDate.getMonth() + 1;  
      let date = newDate.getDate(); 
      let hours = newDate.getHours();
      let minutes = newDate.getMinutes();
      let createTime = `${year}/${month}/${date} ${hours}:${minutes}`
      var dbObj = JSON.stringify({id,title,description,createTime});
      console.log(dbObj);
      fs.writeFile(`data/${id}`, dbObj, `utf8`, function(err){       // 파일 작성이 끝나면 콜백함수를 실행한다.
         response.writeHead(302, {Location: `/?id=${id}`});    //301은 페이지가 완전히 다른 주소로 바뀌었다는 말, 302는 이동하라는 뜻. redirection하는줄
         response.end();
       })
   })
   
  } else if(pathname === '/update'){
      
      
   fs.readdir('./data', function(error, filelist){
      var list = template.list(filelist);
      fs.readFile(`data/${queryData.id}`, 'utf8', (err, data) => {

         let obj = JSON.parse(data);
         let id = obj.id;
         var html = template.HTML(obj.title,
               `
               <a class="upDate-button" href="/update?id=${obj.id}"><span>Update</span></a>
               <form action="/delete_process" method="post">
                 <input type="hidden" name="id" value="${obj.id}">
                 <input class="Delete-button" type="submit" value="Delete">
               </form>`,
                `<div class="schedule">
                <form class="schedule__create-form" action="/create_process" method="post">
                   <input type="hidden" name="id" value="${obj.id}">
                   <input type="text" name="title" placeholder="title" value="${obj.title}">
                   <textarea class="create__description" name="description" placeholder="schedule">${obj.description}</textarea>
                   <input type="submit" value="Create">
                </form>
             </div>`,
               list
               )
 
     response.writeHead(200);
     response.end(html);
      })     
   });
  
  } else if(pathname === '/delete_process') {
   
   var body = '';
   request.on('data', function(data){           //서버측에서 데이터를 조각조각 받는데 그 조각을 받을때마다 콜백함수를 실행하도록 세팅 되어있다.
      body = body + data;
    });
   request.on('end', function(){
      var post = qs.parse(body);
      var id = post.id;
      fs.unlinkSync(`data/${id}`);
      response.writeHead(302, {Location: `/`});    //301은 페이지가 완전히 다른 주소로 바뀌었다는 말, 302는 이동하라는 뜻. redirection하는줄
      response.end();
   })
  } else {
    response.writeHead(404);
    response.end("Notfound");
  }   
 
});
app.listen(2000, function(){console.log('😒 Connection compliete')});
