import {Component, OnInit} from '@angular/core';
import {PersonService} from '../services/person.service';
import {Person} from '../models/person';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-assistant',
  templateUrl: './register-assistant.component.html',
  styleUrls: ['./register-assistant.component.scss']
})
export class RegisterAssistantComponent implements OnInit {

  viewPassword = true;
  person: Person = {
    rol: 'Asistente',
    names: '',
    last_names: '',
    email: '',
    password: '',
    status: true,
  }

  constructor(
    private personService: PersonService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  postPerson() {
    if (this.person.names && this.person.last_names && this.person.email && this.person.password) {
      let dataPerson = {
        person: this.person
      }
      let pathEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
      let pathOnlyLetters = /^[ñA-Za-z _]*[ñA-Za-z][ñA-Za-z _]*$/
      let validateEmail = pathEmail.test(dataPerson.person.email)
      let validateNames = pathOnlyLetters.test(dataPerson.person.names)
      let validateLastNames = pathOnlyLetters.test(dataPerson.person.last_names)
      if (validateNames && validateLastNames) {
        if (validateEmail) {
          this.personService.postPerson(dataPerson)
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
            icon: 'warning',
            title: 'Por favor, ingrese un correo válido',
            showConfirmButton: false,
            timer: 1500
          });
        }
      } else {
        Swal.fire({
          position: 'top-end',
          icon: 'warning',
          title: 'Por favor, ingresar solo letras en nombres y apellidos',
          showConfirmButton: false,
          timer: 1500
        });
      }
    } else {
      Swal.fire({
        position: 'top-end',
        icon: 'warning',
        title: 'Debes completar todos los datos',
        showConfirmButton: false,
        timer: 1500
      });
    }
  }

}
