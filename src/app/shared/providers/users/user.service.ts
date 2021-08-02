import { User } from './../../models/users/user';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserFilterQuery } from '../../queries/users/user-filter-query';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private api: string = `${environment.apiUrl}/users`;

  constructor(private http: HttpClient) { }

  public create(command: User): Observable<boolean> {
    return this.http.post<boolean>(`${this.api}`, command);
  }

  public update(command: User): Observable<boolean> {
    return this.http.put<boolean>(`${this.api}`, command);
  }

  public delete(id: number): Observable<boolean> {
    return this.http.request<boolean>('DELETE', `${this.api}`, { body: { id: id } });
  }

  public filter(query: UserFilterQuery) {
    return this.http.get<User[]>(`${this.api}/filter`, {
      params: {
        minAge: query.minAge,
        maxAge: query.maxAge
      }
    });
  }

  public getById(id: number) {
    return this.http.get<User>(`${this.api}/${id}`).pipe(take(1));
  }
}
