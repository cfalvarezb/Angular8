
// (function(){  // se puede colocar asi o
( () => {        // asi
   
  class Avenger{
      nombre: string;
      equipo: string;
      nombreReal: string;

      puedePelear?: boolean;
      peleasGanadas?: number;

    constructor(nombre: string, 
                equipo: string, 
                nombreReal: string){

                    this.nombre = nombre;
                    this.equipo = equipo;
                    this.nombreReal = nombreReal;

                }

  }
  
  const antMan: Avenger = new Avenger('antMan','Tony','kdkdk');
  
  class AvengerMejorado{
      constructor(public nombre: string,
                  public equipo: string,
                  public nombreReal: string,
                  public puedePelear?: boolean,
                  public peleasGanadas: number = 0){};
  }

  const thorMejorado = new AvengerMejorado('Thor mejorado','Hulk y demas','thor jajaj'); 
    
  console.log(antMan);
  console.log(thorMejorado);
  
})();
