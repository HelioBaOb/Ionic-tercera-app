import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-pop-over-info',
  templateUrl: './pop-over-info.component.html',
  styleUrls: ['./pop-over-info.component.scss'],
})
export class PopOverInfoComponent  implements OnInit {

  items = Array(7);

  constructor(private popOverCtrl: PopoverController) { }

  ngOnInit() {}

  onClick( valor: number ) {
    
    this.popOverCtrl.dismiss({
      item: valor
    });
    console.log('Hijo:', valor);
  }

}
