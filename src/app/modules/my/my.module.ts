import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyRoutingModule } from './my-routing.module';
import { MyComponent } from './my.component';
import { SettingComponent } from './setting/setting.component';
import { IndexComponent } from './index/index.component';
import { SharedModule } from '../../modules/shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        MyRoutingModule
    ],
    declarations: [
        MyComponent,
        SettingComponent,
        IndexComponent
    ],
    providers: []
})
export class MyModule {
}
