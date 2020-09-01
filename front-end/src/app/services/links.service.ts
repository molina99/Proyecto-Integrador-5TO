import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {WebService} from './web.service';

@Injectable({
  providedIn: 'root'
})
export class LinksService {
  private url: string;

  constructor(
    private http: HttpClient,
    private server: WebService
  ) {
    this.url = server.obtainUrl();
  }

  getLinks() {
    return this.http.get(`${this.url}/getLinks`, this.server.obtainHeaders());
  }
}
