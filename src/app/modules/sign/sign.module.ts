import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SignRoutingModule} from './sign-routing.module';

import {SignComponent} from './sign.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    SignRoutingModule
  ],
  declarations: [SignComponent, LoginComponent, RegisterComponent]
})
export class SignModule {
}
