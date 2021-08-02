import { UserFilterQuery } from './../../../shared/queries/users/user-filter-query';
import { UserViewModel } from './../../../shared/viewModels/users/user-viewmodel';
import { User } from './../../../shared/models/users/user';
import { UserService } from './../../../shared/providers/users/user.service';
import { Component, OnInit } from '@angular/core';
import { UserSelectOptions } from 'src/app/shared/queries/users/user-select-options';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public query: UserFilterQuery;
  public users: UserViewModel[];

  public options = UserSelectOptions;

  constructor(private userService: UserService) {
    this.query = new UserFilterQuery();
    this.users = [];
  }

  ngOnInit(): void {
    this.filterUsers();
  }

  public filterUsers() {
    this.userService.filter(this.query)
      .subscribe(response => { this.users = response.map(model => UserViewModel.createFromModel(model)) });
  }

  public editUser(id: number) {

  }

  public deleteUser(user: User) {
    if (confirm(`Deseja excluir o usuário ${user.name}`)) {
      this.userService.delete(user.id)
        .subscribe(response => {
          if (response)
            this.filterUsers();
        });
    }
  }
}
