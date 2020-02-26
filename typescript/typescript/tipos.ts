
(function(){

    let mensaje : string  = 'Hola';
    let numero  : number  = 12345;
    let booleano: boolean = true; //false
    let hoy     : Date    = new Date();

    let cualquierCosa;  //: string | number | boolean -> este es otro tipo de any pero reducido a tipos
    cualquierCosa = mensaje;
    cualquierCosa = numero;
    cualquierCosa = booleano;
    cualquierCosa = hoy

    let ironMan = {
        nombre : "Tony",
        edad   : 30
    };


})();
