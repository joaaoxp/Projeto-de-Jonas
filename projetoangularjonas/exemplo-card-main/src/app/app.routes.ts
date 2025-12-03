import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListCardComponent } from './components/list-card/list-card.component';
import { Pagina2Component } from './pages/pagina2/pagina2.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '', component: HomeComponent,
     children: [
      { path: 'home', component: ListCardComponent },
      { path: 'pagina2', component: Pagina2Component },

    ]
  }

];
