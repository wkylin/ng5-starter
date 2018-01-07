import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PostsService {

  constructor(private http: HttpClient) {
  }

  queryPostsList() {
    return this.http.get('api/posts');
  }
}
