
// (function(){  // se puede colocar asi o
( () => {        // asi
    
  const retirarDinero = ( montoRetirar : number ): Promise<number> => {

        let dineroActual = 2000;

        return new Promise( (resolve, reject) => {

            if (montoRetirar > dineroActual){
                reject('No se posee suficientes fondos para retirar');
            }else{
                dineroActual -= montoRetirar;
                resolve(dineroActual);
            }

        });

  }

  retirarDinero(200)
          .then( (message) =>{
                console.log(`Le queda ${ message } en la cuenta `);
          })
          .catch( (message) => {
            console.log(message);
          });

})();
