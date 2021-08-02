import { Person } from '../../models/persons/person';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { PersonFilterQuery } from '../../queries/perons/person-filter-query';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private api: string = `${environment.apiUrl}/persons`;

  constructor(private http: HttpClient) { }

  public save(command: Person): Observable<boolean> {
    if (!command)
      return of(false);

    if (command.id)
      return this.update(command);
    return this.create(command);
  }


  public create(command: Person): Observable<boolean> {
    return this.http.post<boolean>(`${this.api}`, command);
  }

  public update(command: Person): Observable<boolean> {
    return this.http.put<boolean>(`${this.api}`, command);
  }

  public delete(id: number): Observable<boolean> {
    return this.http.request<boolean>('DELETE', `${this.api}`, { body: { id: id } });
  }

  public filter(query: PersonFilterQuery) {
    return this.http.get<Person[]>(`${this.api}/filter`, {
      params: {
        minAge: query.minAge,
        maxAge: query.maxAge
      }
    });
  }

  public getById(id: number) {
    return this.http.get<Person>(`${this.api}/${id}`).pipe(take(1));
  }
}
