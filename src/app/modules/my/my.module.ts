import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyRoutingModule} from './my-routing.module';
import {MyComponent} from './my.component';
import {SettingComponent} from './setting/setting.component';
import {IndexComponent} from './index/index.component';

@NgModule({
  imports: [
    CommonModule,
    MyRoutingModule
  ],
  declarations: [MyComponent, SettingComponent, IndexComponent]
})
export class MyModule {
}
