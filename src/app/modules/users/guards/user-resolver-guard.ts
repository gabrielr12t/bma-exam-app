import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/shared/models/users/user';
import { UserService } from 'src/app/shared/providers/users/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolverGuard implements Resolve<User> {
  constructor(private service: UserService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    if (route.params && route.params['id']) {
      return this.service.getById(route.params['id']);
    }

    return of({
      id: 0,
      name: '',
      age: 0,
      gender: '',
      height: 0,
      weight: 0
    });
  }
}
