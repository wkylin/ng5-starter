import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { SignModule } from './modules/sign/sign.module';
// import { HomeModule } from './modules/home/home.module';
// import { ProductModule } from './modules/product/product.module';
// import { FindModule } from './modules/find/find.module';
// import { MyModule } from './modules/my/my.module';

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        SignModule,
        // HomeModule,
        // ProductModule,
        // FindModule,
        // MyModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
