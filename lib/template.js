var css = require('./css.js');
var fs = require('fs');

module.exports = {
HTML: function(title, buttons, schedules, list){
       return`
        <!DOCTYPE html>
       <html lang="en">
           <head>
              <style>
              
              ${css.resetcss}
              ${css.style}
              ${css.banner}
              ${css.mainPage}
       
              </style>
              
              <meta charset="UTF-8">
              <title>${title} </title>
           </head>
       
           <body>
             <div class="frame">
                <a href="/">
                  <div class="banner">
                     <img id="bannerMainImg" src="https://media1.tenor.com/images/c03da72e43b08f4d41028410723a850d/tenor.gif?itemid=5555911">
                     <h1 class="banner-title">Did You Finish Your Day?</h1>
                  </div>
                </a>
       
                 <div class="frame--main-page">
                   <div class=main-page--contents>
                      <div class="controller"> 
                        <a class="create-button" href="/create"><span>Add Schedule</span></a>
                        ${buttons}
                      </div>

                      ${schedules}
       
                      <h1 class="todo-list__title">Left Schedule</h1>
                      
                      ${list}
       
                   </div>
       
                </div>
             </div>
           </body>
       
       </html>
       `
    },

list: function(filelist){
      var list = "<ul>";
      var i = 0;

         while(i < filelist.length){
            var tempList = fs.readFileSync(`./data/${filelist[i]}`, 'utf8')
            var dataObj = JSON.parse(tempList)
            list = list + `<li><a href="/?id=${filelist[i]}">${dataObj.title}</a></li>`;
            i = i + 1;
            };
      list = list + "<ul>";
      return list;
    }
}

