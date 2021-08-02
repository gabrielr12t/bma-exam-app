import { PersonListComponent } from './person-list/person-list.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PersonRoutingModule } from './person-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { PersonFormComponent } from './person-form/person-form.component';

@NgModule({
  imports: [
    CommonModule,
    PersonRoutingModule,
    HttpClientModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],

  declarations: [
    PersonFormComponent,
    PersonListComponent
  ],
})
export class PersonModule { }
