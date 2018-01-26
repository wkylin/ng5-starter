import { Component, HostBinding, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { PostsService } from './posts.service';
import { MyAnimation, ListAnimation } from './item.animations';
import { FadeInAnimation } from '../../router-animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [MyAnimation, ListAnimation, FadeInAnimation]
})
export class HomeComponent implements OnInit {

  posts: any = [];
  state = 'small';
  number = '';
  food: any = {};
  sequentialFoods: any = {};
  movies: any = [];

  @HostBinding('@fadeInAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';

  constructor(private postsService: PostsService) {
  }

  ngOnInit() {
    /*this.queryPosts();*/
    // this.queryFoods();

    this.queryPostsAndFood();
    this.queryMovies();

    this.queryFoodsSeq();
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

  queryFoods() {
    this.postsService.queryFoodList().subscribe(
      event => {
        console.log('event', event);
        console.log(event['name']);
        /*if (event['type'] === HttpEventType.DownloadProgress) {
          console.log("Download progress event", event);
        }
        if (event['type']=== HttpEventType.UploadProgress) {
          console.log("Upload progress event", event);
        }
        if (event['type'] === HttpEventType.Response) {
          console.log("response received...", event['body']);
        }*/
      },
      err => {
        console.log(err);
      },
      () => {
        console.log('completed');
      });
  }

  queryPostsAndFood() {
    this.postsService.parallelRequests().subscribe(
      res => {
        console.log(res);
        this.posts = res[0]['data'];
        this.food = res[1];
      },
      err => {
        console.log(err);
      },
      () => {
        console.log('completed');
      });
  }

  queryMovies() {
    this.postsService.queryMoviesList().subscribe(
      res => {
        console.log(res);
        this.movies = res;
      },
      err => {
        console.log(err);
      },
      () => {
        console.log('completed');
      });
  }

  queryFoodsSeq() {
    this.postsService.sequentialRequests().subscribe(
      res => {
        console.log(res);
        this.sequentialFoods = res;
      },
      err => {
        console.log(err);
      });
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
}
