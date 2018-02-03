import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { LoadingModule } from 'ngx-loading';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

import { SignModule } from './modules/sign/sign.module';
import { SharedModule } from './modules/shared/shared.module';
import { AppCustomPreloading } from './common/my-preloading-strategy';
import { AuthGuard } from './guards/auth.guard';
import { GithubAuthInterceptor } from './services/githubauth.interceptor';
import { AuthService } from './services/auth.service';
import { PostsService } from './services/posts.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';


import { ButtonModule } from 'primeng/components/button/button';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';
import { ConfirmationService } from 'primeng/components/common/api';
import { CheckboxModule } from 'primeng/checkbox';

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
    AppRoutingModule,
    LoadingModule,
    LoadingBarRouterModule,
    ConfirmDialogModule,
  ],
  providers: [
    AppCustomPreloading,
    AuthService,
    PostsService,
    ConfirmationService,
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
