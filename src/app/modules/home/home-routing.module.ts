import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';


const routes: Routes = [
    {
        path: 'home', component: HomeComponent, data: {title: 'MyHome', isShowTabbar: true}
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {
}
