import { Component, OnInit, HostBinding } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { SlideInOutAnimation } from '../../../router-animations';

interface UserResponse {
  login: string;
  bio: string;
  company: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [SlideInOutAnimation]
})
export class LoginComponent implements OnInit {
  
  @HostBinding('@slideInOutAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  
  userInfo: UserResponse;
  
  constructor(private http: HttpClient) {
  }
  
  ngOnInit() {
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
    
    this.http.post('https://jsonplaceholder.typicode.com/posts', {
        title: 'foo',
        body: 'bar',
        userId: 1
      }).subscribe((res) => {
        console.log('Response: ',res);
      },
      (err) => {
        console.log('Error occured:', err);
      });
  }
}
