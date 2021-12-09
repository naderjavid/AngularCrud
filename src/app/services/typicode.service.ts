import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Post } from '../models/post';
import { Observable } from 'rxjs';
import * as API from '../constants/Uris';

@Injectable({
  providedIn: 'root'
})
export class TypicodeService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(API.API_POSTS);
  }
}
