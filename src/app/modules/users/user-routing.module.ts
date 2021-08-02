import { User } from './../../shared/models/users/user';
import { UserResolverGuard } from './guards/user-resolver-guard';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: UserListComponent },
  {
    path: 'create',
    component: UserFormComponent,
    resolve: {
      user: UserResolverGuard
    }
  },
  {
    path: 'edit/:id',
    component: UserFormComponent,
    resolve: {
      user: UserResolverGuard
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
