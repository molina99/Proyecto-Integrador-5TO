import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) {
  }

  postPerson(person: object) {
    return this.http.post(`${environment.API_URL}/postPerson`, person);
  }

}
