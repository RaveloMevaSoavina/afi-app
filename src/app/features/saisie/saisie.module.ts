import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { SaisieComponent } from './saisie.component';

import { DropdownModule } from 'primeng/dropdown';
import { PanelModule } from 'primeng/panel'
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';

const routes: Routes = [
  {
    path: '',
    component: SaisieComponent
  }
];


@NgModule({
  declarations: [
    SaisieComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    PanelModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    DropdownModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SaisieModule { }
