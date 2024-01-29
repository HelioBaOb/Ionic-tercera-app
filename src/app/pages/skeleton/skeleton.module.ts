import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SkeletonPageRoutingModule } from './skeleton-routing.module';

import { SkeletonPage } from './skeleton.page';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SkeletonPageRoutingModule,
    PipesModule
  ],
  declarations: [SkeletonPage]
})
export class SkeletonPageModule {}
