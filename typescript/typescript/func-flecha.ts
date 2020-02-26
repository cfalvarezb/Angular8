
(function(){
    
    //Funcion asignada a una variable
    const miFunction = function( a : string){
        return a;
    }
    
    //Funcion tradicional
    function miFunction2( a : string){
        return a;
    }

    //Funcion Flecha
    const miFuntionF = ( a : string ) => {
        return a;
    }

    const miFuntionF2 = ( a : string ) => a.toUpperCase;

    const sumarN = function( a:number , b:number ){
        return a + b;
    }

    const sumarNF = ( a: number, b: number ) => a + b;
    
    const hulk = {
        nombre: 'Hulk',
        smash(){
            setTimeout(() => { // La funciones de flecha no modifican el apuntamiento del this por eso si se coloca function() si genera error por que estaria en el contexto de funcion anonima
                console.log(`${ this.nombre } smash!!!!! `);
            },1000);
            
        }
    };

    console.log(hulk.smash);

})();
