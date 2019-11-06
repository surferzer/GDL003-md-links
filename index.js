/*//import { fstat } from "fs";

module.exports = () => {
*/
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
//convertMd(readMd('./README.md'));



//BUSCAR LINKS EN EL HTML
const cheerio = require ('cheerio');

const htmlMd = convertMd(readMd('./README1.md'));
const fileUrlAcumulado=[];
const findLinksHtml=(htmlMd) => {
 // if((typeof htmlMd !== 'undefined')){
      let $ = cheerio.load(htmlMd);
      let anchorTag = $('a');
      //console.log(anchorTag);
      // Links
      $(anchorTag).each((i, a) =>{
         const fileUrl= $(a).attr('href');
       
         fileUrlAcumulado.push(fileUrl);
         
         //console.log(fileUrl);
      })
      return fileUrlAcumulado;
};
findLinksHtml(htmlMd);


//FUNCION VALIDAR PARA PRUEBAS

const axios = require ('axios');

const colors = require('colors');

var counter=0;
var counterE=0;
const allLinks= [];
const linkList=(fileUrlAcumulado)=>{  
  for(let i=0; i<fileUrlAcumulado.length; i++) {

  axios.get(
   fileUrlAcumulado[i]
 ).then((data) => {
   counter = counter + 1;
    console.log(fileUrlAcumulado[i] + "    Ok " + " ESTE LINK ESTA FUNCIONANDO ".blue, counter) + console.log("Total de links VALIDADOS ".rainbow, + (counter))
  })
  .catch(function (error) {
    counterE = counterE + 1;
    if (error.response) {
                // console.log(error.response.status);
          console.log(fileUrlAcumulado[i] + "    Fail " + " BROKEN LINK ".red, counterE) + console.log("Total de links FALLIDOS ".rainbow, + (counterE))   
        } else {
           console.log(fileUrlAcumulado[i] + "    Fail " + " BROKEN LINK ".red, counterE) + console.log("Total de links FALLIDOS ".rainbow, + (counterE));
    }
    //console.log(error.config);
    
  })


  }
  return allLinks;
 
};

   linkList(fileUrlAcumulado);



  module.exports = {
    readMd: readMd,
    thisFile : thisFile,
    convertMd : convertMd,
  findLinksHtml : findLinksHtml,
  linkList : linkList
  }
  
//console.log("ESTO ES EL ACUMULADO", fileUrlAcumulado);
//VALIDACION DE LINKS

//intento #1
//let thereAreLinks = findLinksHtml(htmlMd);
/*const http = require('http')
function getStatusCodeResult(website) {
  return new Promise((resolve, reject) => {
      http.get(website, (res) => {
          let statusCode = res.statusCode,
              error = statusCode >= 400 && statusCode <= 500 ? `error: ${website}`: null
          if (error) {
              reject(error)
          } else if (statusCode >= 200 && statusCode <= 300) {
              resolve(`Success: ${website}`)
            }
          }, 0)
      })
};

// LOOP PROMISES
const getAllStatusCodeResult = (websites) => {
  website.forEach((website) => {
      getStatusCodeResult(website)
          .then((result) => {
              console.log(result)
          })
          .catch(error => {
              console.log('error', error)
          })
  })
}
getAllStatusCodeResult(thereAreLinks); */
/*
//FUNCION PARA VALIDAR LINKS EXITOSA

const axios = require ('axios');

const allLinks= [];
const linkList=(fileUrlAcumulado)=>{  
  for(let i=0; i<fileUrlAcumulado.length; i++) 
axios.get(
   fileUrlAcumulado[i]
 ).then((data) => console.log(fileUrlAcumulado[i] + "    Ok " + " ESTE LINK ESTA FUNCIONANDO", counter++))
  .catch(function (error) {
    if (error.response) {
          // console.log(error.response.status);
          // console.log(fileUrlAcumulado[i] + "    Fail BROKEN LINK ")   
        } else {
           console.log(fileUrlAcumulado[i] + "    Fail BROKEN LINK ");
    }
    //console.log(error.config);
    
  }); 
  return allLinks;
};
   linkList(fileUrlAcumulado);

console.log(allLinks);
*/


/*
  //FUNCION CONTAR LINKS
  const notWorking=[];
  const working=[];
  const countW=0;
  const countNw=0;

  const counter=(linkList)=>{
    for(let n=0; n<allLinks.length; n++) {
  
      if(allLinks[n]===(fileUrlAcumulado[i] + "    Fail BROKEN LINK ")){
 notWorking=allLinks[n].push;
 countNw= countNw++;
  }else{
   console.log(working=allLinks[n].push);
   console.log(countW=countW++);
  }}};
console.log(counter(linkList));
*/