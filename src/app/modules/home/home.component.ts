import { Component, HostBinding, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { PostsService } from '../../services/posts.service';
import { MyAnimation, ListAnimation } from './item.animations';
import { FadeInAnimation } from '../../router-animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [MyAnimation, ListAnimation, FadeInAnimation]
})
export class HomeComponent implements OnInit {


  @HostBinding('@fadeInAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';

  environmentName: string;
  apiBase: string;
  state = 'small';

  posts: any = [];
  persons: any;


  constructor(private postsService: PostsService) {
    this.environmentName = environment.envName;
    this.apiBase = environment.apiBase;
  }

  ngOnInit() {
    this.queryPosts();
  }

  queryPosts() {
    this.postsService.queryPostsList().subscribe(
      (res) => {
        console.log('data:', res);
        // this.posts = res.body['data'];
        this.posts = res['data'];
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('An error occurred:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      },
      () => {
        console.log('completed');
      }
    );
  }


  pushItem() {
    this.posts.push({
      'id': 1,
      'title': 'Hey this is an item',
      'author': 'wkylin'
    });

    this.state = (this.state === 'small' ? 'large' : 'small');
  }

  removeItem() {
    this.posts.pop();
  }


  queryPersons() {
    this.postsService.queryPersonList().subscribe(
      res => function () {
        console.log(res);
        this.persons = res;
      });
  }
}
