"use strict";

/* 
   Memoration

   Usar optimizacion cuando hay datos que se van a repetir
*/

let cache =[];

const memorizer = func => {
   return e => {
      const index= e.toString()
         if(cache[index] == undefined) {
            cache[index] = func(e);
         }
         return cache[index];
   }
}



const hacerAlgo = num => {
   const a = 20;
   const b = 12;
   let c= 0;

   for (let i = num -1; i >= 0; i--) {
         for (let j = i -1; j >= 0; j--) {
            c+=a*b;
      }
   }
   return c;
}

console.log("Funcion sin memorizer");

const date1 = new Date();
hacerAlgo(60000)
console.log(new Date() - date1);

const date2 = new Date();
hacerAlgo(60000)
console.log(new Date() - date2);

const date3 = new Date();
hacerAlgo(60000)
console.log(new Date() - date3);

const date4 = new Date();
hacerAlgo(60000)
console.log(new Date() - date4);


console.log("Funcion con memorizer");

const memo = memorizer(hacerAlgo);

const date5 = new Date();
memo(60000);
console.log(new Date() - date5);

const date6 = new Date();
memo(70000);
console.log(new Date() - date6);

const date7 = new Date();
memo(60000);
console.log(new Date() - date7);

const date8 = new Date();
memo(70000);
console.log(new Date() - date8);
