import { Component, OnInit, HostBinding } from '@angular/core';
import {SlideInOutAnimation} from '../../../router-animations';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  animations: [SlideInOutAnimation]
})
export class IndexComponent implements OnInit {
  @HostBinding('@slideInOutAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  constructor() { }

  ngOnInit() {
  }

}
