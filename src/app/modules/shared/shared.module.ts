import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {NotFoundComponent} from '../../components/not-found/not-found.component';

@NgModule({
  imports: [
    RouterModule
  ],
  declarations: [NotFoundComponent],
  exports: [
    NotFoundComponent
  ],
  providers: [],
  entryComponents: []
})
export class SharedModule {
}
