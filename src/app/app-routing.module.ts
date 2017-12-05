import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SignComponent } from './modules/sign/sign.component';
import { HomeComponent } from './modules/home/home.component';
// import { ProductComponent } from './modules/product/product.component';
// import { FindComponent } from './modules/find/find.component';
// import { MyComponent } from './modules/my/my.component';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full', data: {title: 'Home', isShowTabbar: true}},
    {path: 'about', component: AboutComponent, data: {title: 'About', isShowTabbar: true}},
    {path: 'sign', component: SignComponent, data: {title: 'Sign', isShowTabbar: true}},
    // {path: 'home', component: HomeComponent, data: {title: 'Home', isShowTabbar: true}},
    {
        path: 'home', data: {title: 'Home', isShowTabbar: true},
        loadChildren: './modules/home/home.module#HomeModule'
    },
    // {path: 'product', component: ProductComponent, data: {title: 'Product', isShowTabbar: true}},
    {
        path: 'product', data: {title: 'Product', isShowTabbar: true},
        loadChildren: './modules/product/product.module#ProductModule'
    },
    // {path: 'find', component: FindComponent, data: {title: 'Find', isShowTabbar: true}},
    {
        path: 'find', data: {title: 'Find', isShowTabbar: true},
        loadChildren: './modules/find/find.module#FindModule'
    },
    {
        path: 'my', data: {title: 'My', isShowTabbar: true},
        loadChildren: './modules/my/my.module#MyModule'
    },

    {path: '**', component: NotFoundComponent, data: {title: 'Not Found', isShowTabbar: true}}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {enableTracing: true, preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
