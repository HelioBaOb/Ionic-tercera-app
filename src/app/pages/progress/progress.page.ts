import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {

  porcentaje = 0.05; // 5%  

  constructor() { }

  ngOnInit() {
  }

  rangeChange( event:any ) {
    console.log(event.detail.value);
    this.porcentaje = event.detail.value / 100;
  }

}
