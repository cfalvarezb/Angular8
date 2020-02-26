
// (function(){  // se puede colocar asi o
( () => {        // asi
   
  interface Xmen{
      nombre: string,
      edad  : number,
      poder? : string
  }  

  const wolwerine = {
      nombre: 'Logan',
      edad: 1000
  }  

  const enviarMision = ( xmen: Xmen) => {
      console.log(`Enviado a ${ xmen.nombre } a la mision`);
  }

  const regresarAlCuartel= ( xmen: Xmen) =>{
      console.log(`${xmen.nombre} regresa al cuartel`);
  }

  enviarMision(wolwerine);
  regresarAlCuartel(wolwerine);

})();
