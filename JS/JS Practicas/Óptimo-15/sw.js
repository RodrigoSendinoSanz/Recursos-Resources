const version ="v2";

self.addEventListener('install', e =>{
    console.log('Instalado service worker');
    caches.open(version).then(cache=>{
        cache.add("index.html").then(res => {
            console.log('Informacion cacheada');
        }).catch(err =>{
            console.log(err);
        })
    })
})


self.addEventListener('activate', () =>{
    console.log('Activo service worker');
    caches.keys().then(key =>{
        return Promise.all(
            key.map(cache => {
                if(cache !== version){
                    console.log("cache antiguo borrado")
                    return caches.delete(cache); 
                }
            })
        );
    })
})

//self.addEventListener('error',...)


self.addEventListener('fetch',e =>{
    console.log('Service worker inteceptando peticion');
    e.respondWith(async e => {
        const respuestaEnCache = await caches.match(e.request);
        if (respuestaEnCache) return respuestaEnCache;
        return e.request;
    })
})




self.addEventListener('message',e =>{
    console.log('Se ha recibido del navegador siguiente mensaje: '+ e.data);
    e.source.postMessage("Holaaa!!")
})

