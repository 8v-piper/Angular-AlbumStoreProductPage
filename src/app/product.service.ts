import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Track } from "./track";
import { Album } from './album';

@Injectable()
export class ProductService {
  private _albumUrl = '../assets/album.json';
  constructor(private _http: Http) { } //good practice for injecting instances of a serivce into a class

  getAlbum( id: number): Observable<Album> {
    return this._http.get(this._albumUrl).map(response => <Album>response.json())
  }
}
