import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';



const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'heroes', component: HeroesComponent},
    { path: 'about', component: AboutComponent},
    { path: 'heroe/:id', component: HeroeComponent},
    { path: 'buscar/:termino', component: BuscadorComponent},
    { path: '**', pathMatch: 'full' , redirectTo: 'home' },
];

// tslint:disable-next-line: variable-name
export const APP_ROUTING = RouterModule.forRoot(ROUTES);
