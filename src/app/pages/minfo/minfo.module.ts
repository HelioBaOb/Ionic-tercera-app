import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinfoPageRoutingModule } from './minfo-routing.module';

import { MinfoPage } from './minfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MinfoPageRoutingModule
  ],
  declarations: [MinfoPage]
})
export class MinfoPageModule {}
