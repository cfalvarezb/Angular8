
// (function(){  // se puede colocar asi o
( () => {        // asi
    
  console.log('Inicio');
  
  const prom1 = new Promise( (resolve, reject) =>{

    setTimeout(()=>{
        resolve('Resolve se termino el timeout perrito');
    },1000);

  } );  

  const prom2 = new Promise( (resolve,reject) =>{
      setTimeout(()=>{
            reject('Reject se termino el timeout 2 perrillo');
      },2000);
  } );

  prom1
      .then(mensaje => console.log(mensaje))
      .catch(err => console.log(err));
  
  prom2
      .then(mensaje => console.log(mensaje))
      .catch(err => console.log(err));


  console.log('Fin');

})();
