import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.page.html',
  styleUrls: ['./skeleton.page.scss'],
})
export class SkeletonPage implements OnInit {

  superHeroes: Observable<any>;
  segment: string = '';

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.superHeroes = this._dataService.getSuperHeroes();
  }

  segmentChanged(event:any) {
    this.segment = event.detail.value;
  }

}
