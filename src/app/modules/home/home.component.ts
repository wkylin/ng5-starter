import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PostsService} from './posts.service';
import {ItemAnimations} from './item.animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: ItemAnimations
})
export class HomeComponent implements OnInit {

  posts: any = [];
  state = 'small';

  values = '';

  number = '';

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

  onKey(event: KeyboardEvent) { // with type info
    // this.values += (<HTMLInputElement>event.target).value + ' | ';
    if (/^\d+\.?\d{0,2}$/.test((<HTMLInputElement>event.target).value)) {
      this.values = (<HTMLInputElement>event.target).value;
    } else {
      this.values = this.values.substring(0, (<HTMLInputElement>event.target).value.length - 1);
    }
  }

  // formatFixed(number) {
  formatFixed(event) {
    let numF = event.value.toString();
    if (numF.indexOf('.') !== -1) {
      numF = numF.substring(0, numF.indexOf('.') + 3);
      const temArray = numF.split('.');
      const temLast = temArray[1];
      let tem = '';
      if (temLast.indexOf('.') !== -1) {
        tem = temLast.substring(0, temLast.indexOf('.'));
      } else {
        tem = temLast;
      }
      numF = temArray[0] + '.' + tem;
    }
    numF = parseFloat(numF).toFixed(3);
    if (numF === 'NaN') {
      return '';
    }
    if (numF.indexOf('.') === -1) {
      numF = numF + '.00';
    } else if (numF.substr(-2, 1) === '.') {
      numF = numF + '0';
    } else if (numF.substr(-3, 1) === '.') {
      numF = numF;
    } else {
      numF = numF.substring(0, numF.length - 1);
    }
    // return numF;
    this.values = numF;
  }
}
