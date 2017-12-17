import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyComponent } from './my.component';
import { IndexComponent } from './index/index.component';
import { SettingComponent } from './setting/setting.component';
import { NotFoundComponent } from '../../components/not-found/not-found.component';

const routes: Routes = [
    {
        path: '', component: MyComponent, data: {title: 'My', isShowTabbar: true},
        children: [
            {path: '', redirectTo: 'index', pathMatch: 'full'},
            {
                path: 'index', component: IndexComponent, data: {title: 'MyHome', isShowTabbar: true}
            },
            {path: 'setting', component: SettingComponent, data: {title: 'Setting'}},
            {path: '**', component: NotFoundComponent, data: {title: 'Not Fund'}}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MyRoutingModule {
}
