/*

function longestWord(pal1, pal2, pal3){

   if(pal1.length === pal2.length && pal2.length === pal3.length){
         return "La longitud de las palabras es la misma";
        
  }if(pal1.length > pal2.length && pal1.length > pal3.length){
         return pal1;

  }if(pal2.length > pal1.length && pal2.length > pal3.length){
         return pal2;

  }if(pal3.length > pal1.length && pal3.length > pal2.length){
         return pal3};
};
console.log(longestWord("amarillo", "rojo", "verde"));






*/

//let words= ["amarillo", "verde", "azul", "rosa", "naranja", "rojo", "rojovioleta"]

/*
function compareStrings(words){
for(var i=0; words.length; i++)
    {if(words.length[0]> words.length[i]){
      return console.log(words[0])

     }else if(words.length[1]>words.length[i]){
            return console.log(words[1])

     }else if(words.length[2]>words.length[i]){
            return console.log(words[2])

     }else if(words.length[3]>words.length[i]){
            return console.log(words[3])

     }else if(words.length[4]>words.length[i]){
            return console.log(words[4])

     }else if(words.length[5]>words.length[i]){
            return console.log(words[5])

     }else{}
}
};

function compareStrings(words) {
       for (let i = 0; i < words.length; i = i + 1) {
              if (words[0].length > words[i].length) {
                     console.log(words[0]);
                     return words[0];
              } else if (words.length[1] > words.length[i]) {
                     console.log(words[0]);
                     return words[0];
              } else if (words) {
                     console.log(words[0]);
                     return words[0];
              }
       }
}
*/
/*
function compareStrings(words) {
   let longestWord = "";
   words.forEach(word => {
      if (word.length > longestWord.length) {
         longestWord = word;
      }
   });

   return longestWord;
}

console.log(compareStrings(words)); */
/*

function comparing() {

       let words = ["amarillo", "verde", "azul", "rosa", "naranja", "rojo", "rojovioleta"]
       let words1 = ["café", "morado", "gris", "blanco", "negrocongrisyazul"]

       let longestWord = words.concat(words1).reduce(function (longest, word) {
              if (word.length > longest.length)
                     return word;
              else
                     return longest;
       })
       return longestWord;
}
console.log(comparing());

*/











//RETO TECNICO

let names = ["maria", "juana", "alexandra", "ximena", "rosario", "ana"]

//nombre don el mayor numero de caracteres

/*

function words() {
       let longestWord ="";
       names.forEach(name => {
              if (name.length > longestWord.length)
                     longestWord = name;
       
       })
       return longestWord;
}

console.log(words());
*/



//nombre con el menor numero de caracteres
/*
function comparing() {
    

       let shortWord = names.reduce(function (shortest, word) {
              if (word.length < shortest.length)
                     return word;
              else
                     return shortest;
       })
       return shortWord;
}
console.log(comparing());
*/

/*
//segunda palabra mas larga

function words() {
       let longestWord = "";
       names.forEach(name => {
              if (name.length > longestWord.length)
                     longestWord = name;

       })
       for (var i = names.length; i--;) {
              if (names[i] === longestWord) {
                     names.splice(i, 1);
              }
       }
       array = names;
       let long = "";
       array.forEach(name => {
              if (name.length > long.length)
                     long = name;

       })
       return long;
}

console.log(words());
*/


//segunda palabra mas corta


function comparing() {
    

       let shortWord = names.reduce(function (shortest, word) {
              if (word.length < shortest.length)
                     return word;
              else
                     return shortest;
       })
       return shortWord;
}

console.log(comparing());
