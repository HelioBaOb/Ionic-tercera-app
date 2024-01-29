import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SegmentPageRoutingModule } from './segment-routing.module';

import { SegmentPage } from './segment.page';
import { ComponentsModule } from "../../components/components.module";
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
    declarations: [SegmentPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SegmentPageRoutingModule,
        ComponentsModule,
        PipesModule
    ]
})
export class SegmentPageModule {}
