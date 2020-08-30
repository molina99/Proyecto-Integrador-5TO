import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WebServiceService } from '../servicio/web-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';
import { DataRx } from '../models/data-rx';
import { NgxSpinnerService } from 'ngx-spinner';
//import {} '';

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.scss']
})
export class OrganizerComponent implements OnInit {
  crearteOrganizer: FormGroup;
  navigationSubcription;

  constructor(
    // private router: Router,
    // private spinner: NgxSpinnerService,
    // private http: HttpClient
  ) {

  }

  ngOnInit() {
  }

  createOrganize(): void {
    let name = this.crearteOrganizer.get('name').value;
    let address_web = this.crearteOrganizer.get('address_web').value;
    let start_date = this.crearteOrganizer.get('start_date').value;
    let end_date = this.crearteOrganizer.get('end_date').value;
    let limit_speaker_time = this.crearteOrganizer.get('limit_speaker_time').value;
    let capacity_speakers = this.crearteOrganizer.get('capacity_speakers').value;
    let capacity_participants = this.crearteOrganizer.get('capacity_participants').value;
    let status_congress = this.crearteOrganizer.get('status_congress').value;
  }
}
