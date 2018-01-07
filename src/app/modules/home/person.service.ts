import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PersonService {

  constructor(private http: HttpClient) {
  }

  queryPersonList() {
    return this.http.get('posts');
  }
}
