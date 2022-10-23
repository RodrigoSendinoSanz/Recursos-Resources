"use strict";

/* 
   Cache

   add()
   addAll()
   delete()
   keys()
   match()
   matchAll()
   put()
*/


caches.open('archivos-estaticos').then(cache =>{
   console.log(cache);
   cache.add('index.html');
   cache.addAll(['index.html','codigo.js']);
   cache.match('index.html').then(arch =>{
      console.log(arch);
   });
   //matchAll() nos da un array de respuestas

   // fetch('index.html').then(res =>{
   //    cache.put('index.html',res)
   // })

   cache.delete('codigo.js');

   cache.keys().then(res =>{
          console.log(res);
   })
})