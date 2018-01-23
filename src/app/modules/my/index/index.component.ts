import { Component, OnInit, HostBinding } from '@angular/core';
import { SlideInOutAnimation } from '../../../router-animations';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../../../services/auth.service';

interface UserResponse {
  login: string;
  bio: string;
  company: string;
}

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  animations: [SlideInOutAnimation]
})
export class IndexComponent implements OnInit {
  @HostBinding('@slideInOutAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  
  userInfo: UserResponse;
  
  isLogin: boolean;
  
  constructor(private http: HttpClient, private authService: AuthService) {
  }
  
  ngOnInit() {
    
    this.isLogin = this.authService.isAuthenticated();
    console.log(this.isLogin);
    if (this.isLogin) {
      this.getUserResponse();
    }
    
  }
  signIn(){
    console.log('sign in');
    this.authService.login();
  }
  getUserResponse() {
    // noinspection JSIgnoredPromiseFromCall
    this.http.get<UserResponse>('https://api.github.com/users/wkylin').subscribe(
      (data) => {
        this.userInfo = data;
        console.log('login: ' + data.login);
        console.log('bio: ' + data.bio);
        console.log('company: ' + data.company);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Client-side Error occured', err.error.message);
        } else {
          console.log('Server-side Error occured', err.status);
        }
      });
  }
}
