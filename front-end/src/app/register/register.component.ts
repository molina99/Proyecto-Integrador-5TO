import {Component, OnInit} from '@angular/core';
import {PersonService} from '../services/person.service';
import {Person} from '../models/person.interface';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-reviewer',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  viewPassword = true;
  person: Person = {
    rol: 'Ponente',
    type_dni: '',
    dni: '',
    names: '',
    last_names: '',
    level_academic: '',
    speciality: '',
    phone: '',
    email: '',
    password: '',
    status: true,
  }

  constructor(private personService: PersonService, private router: Router) {
  }

  ngOnInit() {
  }

  postPerson() {
    if (this.person) {
      console.log(this.person);
      this.personService.postPerson(this.person)
        .subscribe(
          res => {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Registro exitoso',
              showConfirmButton: false,
              timer: 1500
            });
            this.router.navigate(['/login']);
          },
          err => {
            console.error(err);
          }
        );
    } else {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Debes completar todos los datos',
        showConfirmButton: false,
        timer: 1500
      });
    }
  }
}
