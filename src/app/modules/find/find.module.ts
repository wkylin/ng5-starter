import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FindComponent } from './find.component';
import { FindRoutingModule } from './find-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FindRoutingModule
    ],
    declarations: [FindComponent]
})
export class FindModule {
}
