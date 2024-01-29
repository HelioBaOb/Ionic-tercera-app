import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgressPageRoutingModule } from './progress-routing.module';

import { ProgressPage } from './progress.page';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
    declarations: [ProgressPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ProgressPageRoutingModule,
        ComponentsModule
    ]
})
export class ProgressPageModule {}
