import { Person } from '../../shared/models/persons/person';
import { PersonResolverGuard } from './guards/person-resolver-guard';
import { PersonFormComponent } from './person-form/person-form.component';
import { PersonListComponent } from './person-list/person-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: PersonListComponent },
  {
    path: 'create',
    component: PersonFormComponent,
    resolve: {
      person: PersonResolverGuard
    }
  },
  {
    path: 'edit/:id',
    component: PersonFormComponent,
    resolve: {
      person: PersonResolverGuard
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule { }
