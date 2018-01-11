import {Component, HostBinding, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PostsService} from './posts.service';
import {MyAnimation, ListAnimation} from './item.animations';
import {FadeInAnimation} from '../../router-animations';

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

  @HostBinding('@fadeInAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';

  constructor(private http: HttpClient, private postsService: PostsService) {
  }

  ngOnInit() {
    this.postsService.queryPostsList().subscribe(
      (data) => {
        this.posts = data;
      },
      (err) => {
        console.log(err);
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
}
