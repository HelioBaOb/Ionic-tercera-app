import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfScrollPage } from './inf-scroll.page';

const routes: Routes = [
  {
    path: '',
    component: InfScrollPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfScrollPageRoutingModule {}
