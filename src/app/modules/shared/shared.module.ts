import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from '../../components/not-found/not-found.component';
import { EventBusService } from '../../services/event-bus.service';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [NotFoundComponent],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NotFoundComponent
  ],
  providers: [
    EventBusService
  ],
  entryComponents: []
})
export class SharedModule {
}
