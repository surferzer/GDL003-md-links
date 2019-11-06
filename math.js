const math = {};

function add(x1, x2){
    return x1+x2;
  }
  
  function substract(x1, x2){
    return x1-x2;
  }
  
  function multiply(x1, x2){
    return x1*x2;
  } 
  
  function divide(x1, x2){
    if(x2 == 0){
      console.log('no se puede dividir entre 0');
    }else{
          return x1/x2;
    }
  };


  math.add = add;
  math.substract = substract;
  math.multiply = multiply;
  math.divide = divide;

  module.exports = math;


const math = require('./math.js');


const proyectoActual=4;
console.log(`El proyecto en el que estamos actualmente es el número: ${proyectoActual}!!!`);
const nombreProyectoActual= 'MD Links';
console.log(`El nombre del proyecto actual es: ${nombreProyectoActual}`);



/*console.log(math.add(40,30));
console.log(math.substract(40,20));
console.log(math.multiply(30,3));
console.log(math.divide(40, 20));
console.log(math.divide(40, 0));
*/
 console.log(math);


 //test
/*
const mdLinks= require('../);

it('should return true for a valid.md file', (mdLinks) =>{
    expect(mdLInks('../README.md').toBe(true);
})

*/