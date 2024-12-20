import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DasboardComponent } from './dasboard.component';
import { RouterModule } from '@angular/router';
const routes = [
  {
      path: '',
      component: DasboardComponent
  },
  ];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DasboardModule { }
