//import { fstat } from "fs";

//module.exports = () => {
  // ...
//};
const fs = require('fs');
const path= require('path');

//QUE EL ARCHIVO SEA .MD
const thisFile=(filePath)=>{
  if (path.extname(filePath)==='.md')
{return true;
}else{
  return false;
}
};

//console.log(thisFile("./README.md"));

//LEER ARCHIVO MD

const readMd =(filePath)=>{
 let openMd= fs.readFileSync(filePath)
  return openMd.toString();
};
//console.log(readMd('./README.md'));


//CONVERTIR MD A HTML
const marked = require('marked');

const convertMd=(file)=>{
const tokens = marked.lexer(file);
//console.log(tokens);

const html = marked.parser(tokens);
//console.log(html);
return html
};
convertMd(readMd('./README.md'));


//BUSCAR LINKS EN EL HTML
const cheerio = require ('cheerio');

let htmlMd = convertMd(readMd('./README.md'));

const findLinksHtml=(htmlMd) => {
  if((typeof findLinksHtml !== 'undefined')){
      let $ = cheerio.load(htmlMd);
      let anchorTag = $('a');
      //console.log(anchorTag);
      // Links
      $(anchorTag).each((i, a) =>{
         let fileUrl= $(a).attr('href');
         console.log(fileUrl);
      })
    }else{
      console.log('error');
    };
};
findLinksHtml(htmlMd);
