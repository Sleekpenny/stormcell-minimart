import { Routes } from '@angular/router';

export const routes: Routes = [ 
  {
    path: '',
    loadComponent: () => import('./shared/layouts/master-layout/master-layout.component').then((m) => m.MasterLayoutComponent),
    loadChildren: () => import('./modules/routes').then((m) => m.routes),
}
];
