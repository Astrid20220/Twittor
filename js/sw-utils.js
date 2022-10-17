// Guardar en el cache dinamico
function actualizaCacheDinamico(dynamiCache, res, req){

    if(res.ok){

       return caches.open(dynamiCache).then(cache =>{

            cache.put(req, res.clone());
            return res.clone();
        });
    }else{
        return res;

    }

}