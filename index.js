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

console.log(readMd('./README.md'));


//BUSCAR LINKS EN EL MD
const marked = require('marked');

const convertMd=(file)=>{
const tokens = marked.lexer(file);
console.log(tokens);

const html = marked.parser(tokens);
console.log(html);
};
convertMd(readMd('./README.md'));
