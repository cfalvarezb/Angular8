
// (function(){  // se puede colocar asi o
( () => {        // asi
    
  const avenger = {
      nombre: 'Tony',
      clave : 'Iron Man',
      poder : 'Ing. Sistemas'
  }
  
  const extraer = ( {  nombre, poder }: any ) => { // Se puede desestructurar en los parametros del metodo propio
    
    //const {nombre, clave, poder} = avenger // esto es desestructuracion del objetos para que se autoasignen a una variable propia. se pueden omitir atributos 
    
    console.log (nombre);  
    // console.log (clave);
    console.log (poder);

  }

  extraer(avenger);

  const extraerArreglo = ( [arana, sistemas] : string [] ) => {
    console.log(sistemas);
    console.log(arana);
  }

  const avengers: string[] = ['Thor','Iron Man','Spider Man'];
//   const [ /* se deja solo la coma para decir que este indice no se debe mapear a variable  */  , sistemas, arana ] = avengers;

  extraerArreglo(avengers);

})();
