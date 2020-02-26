
(function(){

    const nombre  : string = "Cristian";
    const apellido: string = "Alvarez";
    const edad    : number = 25;
    
    //Para imprimir el literal asi Cristian Alvarez ( Edad 25 )
    //  const salida : string = nombre + " " + apellido + " ( " + edad + " ) "; Forma antigua
    const salida = ` ${ nombre } ${ apellido } ( Edad ${ edad } ) `; // Template literal. Los {} sirven para colocar codigo nativo de javascript
    console.log(salida);

})();
