
(function(){

    function activar(quien : string,                 //Parametro requerido
                     lugar? : string,                //El simbolo ? significa opcional, parametro opcional
                     objeto : string = 'Batiseñal Deault',  //Parametro por defecto
                     ){ 
        if (lugar){
            console.log(`${ quien } Activo el objeto ${ objeto } en el lugar ${ lugar }.`);
        }else{
            console.log(`${ quien } Activo el objeto ${ objeto }.`);
        }
        
    }

    activar('Gordon');
    activar('Gordon','Turquia');
    activar('Gordon','Colombia','Avion');

})();
