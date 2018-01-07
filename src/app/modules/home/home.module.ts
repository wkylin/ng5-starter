import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryPersonDbService } from '../../services/my-data/my-data';
import { PersonService } from './person.service';

@NgModule({
    imports: [
        CommonModule,
        // InMemoryWebApiModule.forFeature(InMemoryPersonDbService),
        HomeRoutingModule
    ],
    declarations: [HomeComponent],
    providers: [PersonService]
})
export class HomeModule {
}
