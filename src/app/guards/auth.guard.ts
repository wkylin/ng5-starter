import { Injectable } from '@angular/core';
import { CanLoad, CanActivate, CanActivateChild } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanLoad, CanActivate, CanActivateChild {

    constructor(private authService: AuthService) {
    }

    /**
     * 验证是否有权限加载一个异步模块
     */
    canLoad() {
        // 在真实的应用里面需要写一个Service到后端去验证权限
        return this.authService.canLoad();
    }

    /**
     * 验证路由是否可以激活
     */
    canActivate() {
        return this.authService.canActivate();
    }

    /**
     * 验证子路由是否可以激活
     */
    canActivateChild() {
        return true;
    }
}
