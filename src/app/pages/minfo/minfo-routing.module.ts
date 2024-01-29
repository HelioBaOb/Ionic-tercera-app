import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MinfoPage } from './minfo.page';

const routes: Routes = [
  {
    path: '',
    component: MinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MinfoPageRoutingModule {}
