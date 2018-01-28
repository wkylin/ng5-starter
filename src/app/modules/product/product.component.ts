import { Component, HostBinding, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { FadeInAnimation } from '../../router-animations';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  animations: [FadeInAnimation]
})
export class ProductComponent implements OnInit {
  
  @HostBinding('@fadeInAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  
  sequentialFoods: any = {};
  movies: any = [];
  foods: any =[];
  books: any =[];
  
  constructor(private postsService: PostsService) {
  }
  
  ngOnInit() {
    // this.queryFoods();
    this.queryBooksAndFood();
    this.queryMovies();
    this.queryFoodsSeq();
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
  
   queryBooksAndFood() {
     this.postsService.parallelRequests().subscribe(
       res => {
         console.log(res);
         this.books = res[0];
         this.foods = res[1];
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
}
