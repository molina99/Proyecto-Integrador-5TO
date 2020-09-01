import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrganizerService } from '../servicio/organizer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Organizer } from '../models/organizer';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.scss']
})
export class OrganizerComponent implements OnInit {
  congress: any;
  createOrganizerForm: FormGroup

  // congress: Organizer = {
  //   name: '',
  //   address_web: '',
  //   start_date: 12 - 12 - 2020,
  //   end_date: 13 - 12 - 2020,
  //   logo: '',
  //   publicity_image: '',
  //   limit_speaker_time: 12.30,
  //   politics: '',
  //   capacity_speakers: 24,
  //   capacity_participants: 24,
  //   status_congress: true
  // }

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private organizerService: OrganizerService
  ) {

  }

  ngOnInit(): void {
    this.createOrganizerForm = this.formBuilder.group({
      name: [''],
      address_web: [''],
      start_date: [12 - 12 - 2020],
      end_date: [13 - 12 - 2020],
      logo: [''],
      publicity_image: [''],
      limit_speaker_time: [12.30],
      politics: [''],
      capacity_speakers: [24],
      capacity_participants: [24],
      status_congress: [true]
    })
  }

  // putOrganize() {
  //   return this.organizerService.putCongress(this.id, this.congress).subscribe(
  //     res =>{
  //       this.congress = res;
  //       console.log(this.congress)
  //     },
  //     err => console.log(err)
  //   )
  // }

  putOrganize(): void {
    let name = this.createOrganizerForm.get('name').value;
    let address_web = this.createOrganizerForm.get('address_web').value;
    let start_date = this.createOrganizerForm.get('start_date').value;
    let end_date = this.createOrganizerForm.get('end_date').value;
    let logo = this.createOrganizerForm.get('logo').value;
    let publicity_image = this.createOrganizerForm.get('publicity_image').value;
    let limit_speaker_time = this.createOrganizerForm.get('limit_speaker_time').value;
    let politics = this.createOrganizerForm.get('politics').value;
    let capacity_speakers = this.createOrganizerForm.get('capacity_speakers').value;
    let capacity_participants = this.createOrganizerForm.get('capacity_participants').value;
    let status_congress = this.createOrganizerForm.get('status_congress').value;
    if (this.createOrganizerForm.invalid) {
      console.log(this.createOrganizerForm)
    } else {
      let dato = {
        data: {
          name,
          address_web,
          start_date,
          end_date,
          logo,
          publicity_image,
          limit_speaker_time,
          politics,
          capacity_speakers,
          capacity_participants,
          status_congress
        },
      };
      let organizer = this.organizerService.putCongress(this.congress.id, this.congress)
      if(organizer) {
        console.log(this.congress.id)
        console.log(dato)
      }
    }
  }
}
