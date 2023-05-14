import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IAlbum } from 'src/models/album.model';
import { IPhoto } from 'src/models/photo.model';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent {
  albumList: IAlbum[] = [];
  photoList: IPhoto[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<IAlbum[]>('https://jsonplaceholder.typicode.com/albums')
      .subscribe(this.handleResponse.bind(this));
  }

  handleResponse(response: IAlbum[]) {
    this.albumList = response;
  }

  onAlbumChanged(event: any): void {
    const {
      target: { value },
    } = event;

    if (!value) {
      this.photoList = [];
      return;
    }

    this.http
      .get<IPhoto[]>(
        `https://jsonplaceholder.typicode.com/photos?albumId=${value}`
      )
      .subscribe(this.handlePhotosResponse.bind(this));
  }

  handlePhotosResponse(response: IPhoto[]) {
    this.photoList = response;
  }
}
