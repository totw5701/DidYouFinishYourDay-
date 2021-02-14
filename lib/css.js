module.exports = {
    resetcss:`
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
  }`,
  banner:`
  
  .banner {
    margin-top:30px;
    background-color: white;
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
  `,
  
  style:`
  .frame {
    height:100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color:#EAD9AD;
  }`,
  
  mainPage:`
  .main-page--contents {
    background-color: #c9c8c8;
    border-radius: 10px;
    padding: 20px;
    width: 500px;
    margin-top: 40px;
  }
  
  .controller{
    display: flex;
    justify-content: space-between;
  }

  .create-button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25px;
    width: 150px;
    background-color: #7c7c7c;
    border-radius: 5px;
    font-size: 17px;
    font-weight: 900;
    color: #ffffff;
    padding: 5px;
    margin: 5px;
    text-align: center;
  }

  .upDate-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    background-color: teal;
    border-radius: 5px;
    font-size: 17px;
    font-weight: 900;
    color: #ffffff;
    padding: 5px;
    margin: 5px;
    text-align: center;
  }

  .Delete-button {
    width: 150px;
    background-color: tomato;
    border-radius: 5px;
    font-size: 17px;
    font-weight: 900;
    color: #ffffff;
    padding: 5px;
    margin: 5px;
    text-align: center;
  }
  
  .todo-list__title {
    font-size: 20px;
    font-weight: 900;
    color: #303030;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  
  .schedule {
    display: flex;
    flex-direction: column;
    background-color: #ffac40;
    border-radius: 15px;
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

  .schedule__time{
    margin-top:10px;
  }
  
  .create__description{
    height: 220px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .schedule__create-form{
    display: flex;
    flex-direction: column;
  }

  li{
    margin-top: 10px;
  }

  li>a{
    font-weight: 900;
    color: #555555;
  }

  `
  
  }