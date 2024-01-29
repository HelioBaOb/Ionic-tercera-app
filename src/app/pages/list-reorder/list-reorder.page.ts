import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {
  
  disable: boolean = true;

  superheroes = [
    {
      name:'Aquaman',
      icon: 'water-outline',
      class: 'Aquaman'
    },
    {
     name: 'Superman',
     icon: 'barbell-outline',
     class: 'Superman'
    },
    {
      name: 'Batman',
      icon: 'moon-outline',
      class: 'Batman'
    },
    {
      name: 'Wonder Woman',
      icon: 'bonfire-outline',
      class: 'WonderWoman'
    },
    {
      name: 'Flash',
      icon: 'flash-outline',
      class: 'Flash'
    }
  ];


  constructor() { }

  ngOnInit() {
  }

  doReorder(event: any) {
    console.log(event);
    const itemMover = this.superheroes.splice(event.detail.from, 1)[0];
    this.superheroes.splice(event.detail.to, 0, itemMover);
    event.detail.complete();
    console.log(this.superheroes);
  }

  // onToggle(){
  //   this.disable = !this.disable;
  // }

}
