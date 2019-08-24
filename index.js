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

const htmlMd = convertMd(readMd('./README.md'));
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
      return console.log(fileUrlAcumulado);
};
findLinksHtml(htmlMd);

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

//intento #2 con axios

const axios = require ('axios');

 const linkList=()=>{ 
   axios.get(fileUrlAcumulado[2]) 
  .then((data) => console.log((data.status) + " OK " + " ESTE LINK ESTA FUNCIONANDO" ))

  .catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
     
      console.log(error.response.status);
    } else {
      // Something happened in setting up the request that triggered an Error
     console.log("404 BROKEN LINK " + '\n'+error.message);
    }
    console.log(error.config);
  }
  )};

  linkList();
  

  //INTENTO CON FETCH
  /*validateLinks = (fileUrlAcumulado) =>{
    fetch(fileUrlAcumulado)
    .then((response)=> console.log(response.status));
  }
    .catch(err){
      return err
    };
   
  */