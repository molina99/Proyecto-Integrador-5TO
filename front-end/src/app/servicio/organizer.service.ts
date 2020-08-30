import { Injectable } from '@angular/core';
import { WebServiceService } from './web-service.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrganizerService {
  private url: string;

  constructor(
    private http: HttpClient,
    private server: WebServiceService
  ) { 
    this.url = this.server.getUrl();
  }

  putCongress(id: string, congress: object){
    return this.http.put(`${this.url}/putCongress/${id}`, congress)
  }

  getCongress(){
    return this.http.get(`${this.url}/getCongress`)
  }
}
