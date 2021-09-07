import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import  { CONTENT_ROUTES } from './shared/routes/content-layout.routes';
import { ContentLayoutComponent } from './Layouts/content-layout/content-layout.component';

const routes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent,
    children: CONTENT_ROUTES
  },
  // Fallback when no prior routes is matched
  { path: '**', redirectTo: '/content', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
