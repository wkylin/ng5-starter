import {Component, VERSION, OnInit, Renderer2, ElementRef} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import {RouterAnimation} from './router-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [RouterAnimation]
})
export class AppComponent implements OnInit {
  angular: string;
  isShowTabbar = true;

  // router跳转动画所需参数
  routerState = true;
  routerStateCode = 'active';

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private titleService: Title) {
    this.angular = `Angular! v${VERSION.full}`;
  }

  ngOnInit() {
    this.router.events.filter(event => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      })
      .filter(route => route.outlet === 'primary')
      .mergeMap(route => route.data)
      .subscribe((event) => {
        this.titleService.setTitle(event['title']);
        if (!event['isShowTabbar']) {
          this.isShowTabbar = false;
        } else {
          this.isShowTabbar = true;
        }

        this.routerState = !this.routerState;
        this.routerStateCode = this.routerState ? 'active' : 'inactive';
      });
  }
}
