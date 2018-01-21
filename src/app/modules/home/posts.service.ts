import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class PostsService {
  
  // headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
  headers = new HttpHeaders({'Content-Type': 'application/json'});
  getParams = new HttpParams().set('a', '1').set('b', '2');
  
  
  constructor(private http: HttpClient) {
  }
  
  // http request
  queryMoviesList() {
    return this.http.request('get', 'api/movies');
  }
  
  // http get 
  queryPostsList() {
    // let httpGet = this.http.get('api/posts', {observe: 'response'}); // 完整的响应信息
    let getPosts = this.http.get('api/posts', {
      headers: this.headers,
      observe: 'body',
      params: this.getParams,
      responseType: 'json',
      withCredentials: true
    }); // 只有响应体
    return getPosts.shareReplay(); // 避免重复请求
  }
  
  // http post
  queryFoodList() {
    let postFood = this.http.post('/api/food', {'id': '4', 'name': 'cake'}, {
      headers: this.headers,
      observe: 'body',
      reportProgress: true,
      responseType: 'json',
      withCredentials: true
    }); // 只有响应体
    return postFood;
  }
  
  // 并行发送多个请求
  parallelRequests() {
    return Observable.forkJoin(
      this.http.get('api/posts'),
      this.http.post('/api/food', {'id': '4', 'name': 'Noodle'})
    )
  }
  
  // 顺序发送 Http 请求
  sequentialRequests() {
    let swq$ = this.http.get('api/movies').mergeMap(posts => {
      posts[0]['title'] += ' Sequential';
      return this.http.post('/api/food', {'name': posts[0]['title']})
    })
    return swq$;
  }
}
