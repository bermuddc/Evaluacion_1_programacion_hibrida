import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';

export const routes: Routes = [
  {
    path: 'home',
    component: HomePage // Solo el componente, no loadChildren
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];