import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZooComponent } from './zoo.component';
import { RouterModule } from '@angular/router';
const routes = [
  {
      path: '',
      component: ZooComponent
  },
  ];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ZooModule { }
