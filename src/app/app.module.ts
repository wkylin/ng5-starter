import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {GithubAuthInterceptor} from './services/githubauth.interceptor';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {AboutComponent} from './components/about/about.component';

import {SignModule} from './modules/sign/sign.module';
import {SharedModule} from './modules/shared/shared.module';
import {AppCustomPreloading} from './common/my-preloading-strategy';
import {AuthGuard} from './guards/auth.guard';
import {AuthService} from './services/auth.service';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

// import { NotFoundComponent } from './components/not-found/not-found.component';
// import { HomeModule } from './modules/home/home.module';
// import { ProductModule } from './modules/product/product.module';
// import { FindModule } from './modules/find/find.module';
// import { MyModule } from './modules/my/my.module';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SignModule,
    SharedModule,
    // HomeModule,
    // ProductModule,
    // FindModule,
    // MyModule,
    AppRoutingModule
  ],
  providers: [
    AppCustomPreloading,
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GithubAuthInterceptor,
      multi: true
    },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
