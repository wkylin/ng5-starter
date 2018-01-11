import {Component, HostBinding, OnInit} from '@angular/core';
import {FadeInAnimation} from '../../router-animations';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  animations: [FadeInAnimation]
})
export class ProductComponent implements OnInit {

  @HostBinding('@fadeInAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';

  constructor() {
  }

  ngOnInit() {
  }

}
