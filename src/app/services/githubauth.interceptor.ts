import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse} from '@angular/common/http';

import {Observable} from 'rxjs/observable';

@Injectable()
export class GithubAuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      // https://github.com/settings/tokens
      // https://scotch.io/@kashyapmukkamala/using-http-interceptor-with-angular2
      // https://github.com/mpalourdio/ng-http-loader
      headers: req.headers.set('Authorization', 'token aa4ab3841083a479cbf05d4e01e762a4a8562abf')
    });
    const started = Date.now();
    return next.handle(authReq).do(
      event => {
        if (event instanceof HttpResponse) {
          const elapsed = Date.now() - started;
          console.log(`Request for ${req.urlWithParams} took ${elapsed} ms.`);
        }
      },
      (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            console.log('401');
          }
        }
      })
      .catch((err: HttpErrorResponse) => {
        if (err.status >= 200 && err.status < 300) {
          const res = new HttpResponse({
            body: null,
            headers: err.headers,
            status: err.status,
            statusText: err.statusText,
            url: err.url
          });
          return Observable.of(res);
        } else {
          return Observable.throw(err);
        }
      });
  }
}
