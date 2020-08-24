import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {WebService} from './web.service';
import {Observable} from 'rxjs';
import {Data} from '../models/data';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private url: string;

  constructor(
    private http: HttpClient,
    private server: WebService,
  ) {
    this.url = this.server.obtainUrl();
  }

  login(dataLogin: { person: { password: any; email: any; }; }): Observable<Data> {
    return this.http.post<Data>(`${this.url}/login`, dataLogin);
  }

  postPerson(person: object) {
    return this.http.post(`${this.url}/postPerson`, person);
  }

  getUsers() {
    return this.http.get(`${this.url}/getPersons`)
  }
}
