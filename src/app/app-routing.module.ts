import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'Dashboard', pathMatch: 'full' },
  {
   path: 'zoo',
    loadChildren: () => import('./zoo/zoo.module').then(m => m.ZooModule)
  },
  {
    path: 'Dashboard',
    loadChildren: () => import('./Dashboard/dasboard/dasboard.module').then(m => m.DasboardModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
