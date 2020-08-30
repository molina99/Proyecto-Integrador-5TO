import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebServiceService {
  private url: string;

  constructor() { this.url = 'http://localhost:3500/api/'}

  getUrl(): string {
    return this.url;
  }
}
