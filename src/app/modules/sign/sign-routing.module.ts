import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignComponent } from './sign.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from '../../components/not-found/not-found.component';

const routes: Routes = [
    {
        path: 'sign', component: SignComponent, data: {title: 'Sign'},
        children: [
            {path: 'login', component: LoginComponent, data: {title: 'Login'}},
            {path: 'register', component: RegisterComponent, data: {title: 'Register'}},
            {path: '', redirectTo: 'login', pathMatch: 'full'},
            {path: '**', component: NotFoundComponent, data: {title: 'Not Found'}}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SignRoutingModule {
}
