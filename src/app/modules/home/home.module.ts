import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeComponent} from './home.component';
import {HomeRoutingModule} from './home-routing.module';

// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryPersonDbService } from '../../services/my-data/my-data';
import {PostsService} from './posts.service';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {NumberFormatDirective} from './number-format.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    // InMemoryWebApiModule.forFeature(InMemoryPersonDbService),
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    NumberFormatDirective
  ],
  providers: [PostsService]
})
export class HomeModule {
}
