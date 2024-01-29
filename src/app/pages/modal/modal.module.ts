import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalPageRoutingModule } from './modal-routing.module';

import { ModalPage } from './modal.page';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
    declarations: [ModalPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ModalPageRoutingModule,
        ComponentsModule
    ]
})
export class ModalPageModule {}
