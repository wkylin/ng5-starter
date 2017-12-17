import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    constructor() {
    }

    canLoad(): boolean {
        // Http调用后端的服务检查授权
        return true;
    }

    canActivate(): boolean {
        // Http调用后端的服务检查授权
        return true;
    }
}
