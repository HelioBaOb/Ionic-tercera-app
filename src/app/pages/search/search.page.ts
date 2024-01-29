import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  albums: any[] = []; 
  textoBuscar = '';

  constructor( private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.getAlbums().subscribe( albums => {
      this.albums = albums;
    });
  }

  onSearchChange(event: any) {
    this.textoBuscar = event.detail.value;
  }

}
