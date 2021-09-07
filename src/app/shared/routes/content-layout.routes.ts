import { Routes } from '@angular/router';

export const CONTENT_ROUTES: Routes = [
  {
    path: 'saisie',
    loadChildren: () => import('../../features/saisie/saisie.module').then(m => m.SaisieModule)
  },
];
