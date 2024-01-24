import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-inf-scroll',
  templateUrl: './inf-scroll.page.html',
  styleUrls: ['./inf-scroll.page.scss'],
})
export class InfScrollPage implements OnInit {

  data = Array(20);

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor() { }

  ngOnInit() {
  }
  
  loadData(event: any) {
    //console.log(event);

    setTimeout(() => {
      if (this.data.length > 50) {
        this.infiniteScroll.complete();
        this.infiniteScroll.disabled = true;
        return;
      }

      const nuevoArr = Array(20);
      this.data.push(...nuevoArr);

      //event.target.complete();
      this.infiniteScroll.complete();

    }, 1500);
  }

}
