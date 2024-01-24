import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfScrollPageRoutingModule } from './inf-scroll-routing.module';

import { InfScrollPage } from './inf-scroll.page';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
    declarations: [InfScrollPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        InfScrollPageRoutingModule,
        ComponentsModule
    ]
})
export class InfScrollPageModule {}
