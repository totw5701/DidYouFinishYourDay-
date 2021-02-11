var http = require('http');
var fs = require('fs');
var url = require('url');



var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var title = queryData.id;

    if(_url == '/'){
      
      title='Welcome';
    }
    if(_url == '/favicon.ico'){
        response.writeHead(404);
        response.end();
        return;
    }
    response.writeHead(200);

    var template = `
    <!DOCTYPE html>
<html lang="en">
    <head>
       <style>
       
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

input:focus {
  outline: none;
}

a {
  color: inherit;
  text-decoration: none;
}


       /* Main Page */
       .banner {
        display: flex;
        align-items: center;
        border: 5px solid #303030;
        padding: 15px;
      }
      
      #bannerMainImg {
        width: 180px;
        height: 140px;
        border-radius: 15px;
        margin-right: 30px;
      }
      
      .banner-title {
        font-size: 50px;
        font-weight: 900;
        color: #303030;
      }
      
      .main-page--contents {
        background-color: #c9c8c8;
        border-radius: 10px;
        padding: 20px;
        width: 500px;
        margin-top: 40px;
      }
      
      .create-button {
        background-color: #7c7c7c;
        border-radius: 5px;
        font-size: 20px;
        font-weight: 900;
        color: #ffffff;
        padding: 5px;
        margin: 5px;
      }
      
      .todo-list__title {
        font-size: 20px;
        font-weight: 900;
        color: #303030;
        margin-top: 20px;
        margin-bottom: 10px;
      }
      
      .finished-list__title {
        font-size: 20px;
        font-weight: 900;
        color: #303030;
        margin-top: 10px;
        margin-bottom: 10px;
      }
      
      .schedule {
        border: 3px solid #742e2e;
        padding: 10px;
        margin-top: 20px;
        margin-bottom: 20px;
      }
      
      .schedule__title {
        font-size: 20px;
        font-weight: 900;
        color: #000000;
        margin-bottom: 10px;
      }
      
       
       .frame {
         display: flex;
         flex-direction: column;
         align-items: center;
         border: 1px solid black;
       }
       
       </style>
       
       <meta charset="UTF-8">
       <title>DTFYD - ${queryData.id} </title>
    </head>

    <body>
      <div class="frame">
          <div class="banner">
             <img id="bannerMainImg" src="https://media1.tenor.com/images/c03da72e43b08f4d41028410723a850d/tenor.gif?itemid=5555911">
             <h1 class="banner-title">Did You Finish Your Day?</h1>
          </div>

          <div class="frame--main-page">
            <div class=main-page--contents>

               <a class="create-button" href="/create">Add Schedule</a>

               <h1 class="todo-list__title">Left Schedule</h1>
               <ol>
                  <li><a href="/?id=eatWell">eat well</a></li>
                  <li><a href="/?id=sleepWell">sleep well</a></li>
                  <li><a href="/?id=poopWell">poop well</a></li>
               </ol>

               <h1 class="finished-list__title">Past Schedule </h1>
               <ol>
                  <li><a href="eatWell.html">eat well</a></li>
                  <li><a href="sleepWell.html">sleep well</a></li>
                  <li><a href="poopWell.html">poop well</a></li>
               </ol>

            </div>

         </div>
      </div>
    </body>

</html>
    `;


    response.end(template);
 
});
app.listen(2000);