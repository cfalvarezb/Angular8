
// (function(){  // se puede colocar asi o
( () => {        // asi
   
  const sumar = ( a: number, b: number): number => a + b;

  const nombre = () => 'Hola perrito';

  const obtenerSalario = (): Promise<string> => {

      return new Promise( ( resolve , reject ) => {
        resolve('Hola perrito');
      });

  }

  obtenerSalario().then( a => console.log(a) ); 
  
})();
