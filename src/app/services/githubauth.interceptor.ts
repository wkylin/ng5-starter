import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs/observable';

@Injectable()
export class GithubAuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      // https://github.com/settings/tokens
      headers: req.headers.set('Authorization', 'token aa4ab3841083a479cbf05d4e01e762a4a8562abf')
    });
    const started = Date.now();
    return next.handle(authReq)
      .do(event => {
      if (event instanceof HttpResponse) {
        const elapsed = Date.now() - started;
        console.log(`Request for ${req.urlWithParams} took ${elapsed} ms.`);
      }
    });
  }
}
