import {Component, HostBinding, OnInit} from '@angular/core';
import {SlideInOutAnimation} from '../../../router-animations';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
  animations: [SlideInOutAnimation]
})
export class SettingComponent implements OnInit {

  @HostBinding('@slideInOutAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';

  constructor() {
  }

  ngOnInit() {
  }

  hasChanges() {
    return false;
  }

}
