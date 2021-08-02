import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Person } from 'src/app/shared/models/persons/person';
import { PersonService } from 'src/app/shared/providers/persons/person.service';

@Injectable({
  providedIn: 'root'
})
export class PersonResolverGuard implements Resolve<Person> {
  constructor(private service: PersonService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Person> {
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
