"use strict";
// (function(){  // se puede colocar asi o
(() => {
    class Avenger {
        constructor(nombre, equipo, nombreReal) {
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
        }
    }
    const antMan = new Avenger('antMan', 'Tony', 'kdkdk');
    class AvengerMejorado {
        constructor(nombre, equipo, nombreReal, puedePelear, peleasGanadas = 0) {
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
            this.puedePelear = puedePelear;
            this.peleasGanadas = peleasGanadas;
        }
        ;
    }
    const thorMejorado = new AvengerMejorado('Thor mejorado', 'Hulk y demas', 'thor jajaj');
    console.log(antMan);
    console.log(thorMejorado);
})();
