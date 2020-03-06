import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';



const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'heroes', component: HeroesComponent},
    { path: 'about', component: AboutComponent},
    { path: '**', pathMatch: 'full' , redirectTo: 'home' },
];

// tslint:disable-next-line: variable-name
export const APP_ROUTING = RouterModule.forRoot(ROUTES);
