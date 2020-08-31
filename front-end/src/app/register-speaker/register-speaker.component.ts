import {Component, OnInit} from '@angular/core';
import {PersonService} from '../services/person.service';
import {Person} from '../models/person';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-speaker',
  templateUrl: './register-speaker.component.html',
  styleUrls: ['./register-speaker.component.scss']
})
export class RegisterSpeakerComponent implements OnInit {

  viewPassword = true;
  person: Person = {
    rol: 'Ponente',
    type_dni: '',
    dni: '',
    names: '',
    last_names: '',
    level_academy: '',
    specialty: '',
    phone: '',
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

  postPerson(ci) {
    if (this.person.type_dni && this.person.dni && this.person.names && this.person.last_names && this.person.level_academy && this.person.specialty && this.person.phone && this.person.email && this.person.password) {
      let dataPerson = {
        person: this.person
      }
      let pathEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
      let pathOnlyLetters = /^[ñA-Za-z _]*[ñA-Za-z][ñA-Za-z _]*$/
      let pathOnlyIntegers = /^[0-9]{2}[0-9]{8}$/
      let validateEmail = pathEmail.test(dataPerson.person.email)
      let validateNames = pathOnlyLetters.test(dataPerson.person.names)
      let validateLastNames = pathOnlyLetters.test(dataPerson.person.last_names)
      let validateIntegers = pathOnlyIntegers.test(dataPerson.person.phone)
      let validateCI = this.validationDniCI(ci)
      if (validateNames && validateLastNames) {
        if (validateIntegers) {
          if (validateEmail) {
            if (this.person.type_dni == 'Cédula') {
              if (validateCI) {
                this.personService.postPerson(dataPerson)
                  .subscribe(
                    res => {
                      Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Registro Exitoso',
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
                  title: 'Por favor, ingrese una cédula válida',
                  showConfirmButton: false,
                  timer: 1500
                });
              }
            } else if (this.person.type_dni == 'Pasaporte') {
              this.personService.postPerson(dataPerson)
                .subscribe(
                  res => {
                    Swal.fire({
                      position: 'top-end',
                      icon: 'success',
                      title: 'Registro Exitoso',
                      showConfirmButton: false,
                      timer: 1500
                    });
                    this.router.navigate(['/login']);
                  },
                  err => {
                    console.error(err);
                  }
                );
            }
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
            title: 'Por favor, ingrese un teléfono válido',
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
        title: 'Por favor, completar todos los datos',
        showConfirmButton: false,
        timer: 1500
      });
    }
  }

  validationDniCI(ci) {
    if (ci.length === 10) {
      const digitRegion = ci.substring(0, 2);
      if (digitRegion >= String(0) && digitRegion <= String(24)) {
        const latestDigit = Number(ci.substring(9, 10));
        const pairs = Number(ci.substring(1, 2)) + Number(ci.substring(3, 4)) + Number(ci.substring(5, 6)) + Number(ci.substring(7, 8));

        let numberOne: any = ci.substring(0, 1);
        numberOne = (numberOne * 2);
        if (numberOne > 9) {
          numberOne = (numberOne - 9);
        }

        let numberThree: any = ci.substring(2, 3);
        numberThree = (numberThree * 2);
        if (numberThree > 9) {
          numberThree = (numberThree - 9);
        }

        let numberFive: any = ci.substring(4, 5);
        numberFive = (numberFive * 2);
        if (numberFive > 9) {
          numberFive = (numberFive - 9);
        }

        let numberSeven: any = ci.substring(6, 7);
        numberSeven = (numberSeven * 2);
        if (numberSeven > 9) {
          numberSeven = (numberSeven - 9);
        }

        let numberNine: any = ci.substring(8, 9);
        numberNine = (numberNine * 2);
        if (numberNine > 9) {
          numberNine = (numberNine - 9);
        }

        const odds = numberOne + numberThree + numberFive + numberSeven + numberNine;
        const sumTotal = (pairs + odds);
        const firstDigitSum = String(sumTotal).substring(0, 1);
        const ten = (Number(firstDigitSum) + 1) * 10;
        let digitValidator = ten - sumTotal;
        if (digitValidator === 10) {
          digitValidator = 0;
        }
        if (digitValidator === latestDigit) {
          console.log('Cédula válida')
          return true;
        } else {
          return false;
        }
      } else {
        console.log('Cédula no válida')
        return false;
      }
    } else {
      console.log('Cédula con más de 10 dígitos')
      return false;
    }
  }
}
