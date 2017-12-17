import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from '../../components/not-found/not-found.component';

@NgModule({
    imports: [
        RouterModule,
        CommonModule
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
