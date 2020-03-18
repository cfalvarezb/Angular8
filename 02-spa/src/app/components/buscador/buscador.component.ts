import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {
  
  heroesSerarched: any[];
  termino: string;
  

  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.heroesSerarched = this._heroesService.searchHeroes( params['termino'] );
      this.termino =  params['termino'];
    });
  }

  verHeroe(index: number) {
    this.router.navigate( ['/heroe', index] );
  }

}
