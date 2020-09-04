import {Component, OnInit} from '@angular/core';
import {PersonService} from '../../../services/person.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.scss']
})
export class ParticipantsComponent implements OnInit {

  photo: any = '';
  users: any = [];
  status: boolean;

  constructor(
    private personService: PersonService
  ) {
  }

  ngOnInit() {
    this.getUsers()
  }

  getUsers() {
    return this.personService.getUsers().subscribe(
      res => {
        this.users = res;
      },
      err => console.error(err)
    );
  }

  disableEnableUser(id: string, status: boolean) {
    let dataPerson = {
      status: status
    }
    this.personService.disableEnablePerson(id, dataPerson).subscribe(
      res => {
        if (status == true) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Usuario habilitado',
            showConfirmButton: false,
            timer: 1500
          });
        } else {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Usuario inhabilitado',
            showConfirmButton: false,
            timer: 1500
          });
        }
      }
    );
  }
}
