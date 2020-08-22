import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {PermissionsService} from '../services/permissions.service';
import {PersonService} from '../services/person.service';
import {Data} from '../models/data';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  viewPassword = true;
  loginData: FormGroup;

  constructor(
    private personServices: PersonService,
    private permissions: PermissionsService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.loginData = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  login(): void {
    let email = this.loginData.get('email').value;
    let password = this.loginData.get('password').value;
    let dataLogin = {
      person: {
        password,
        email
      }
    };
    if (dataLogin.person.email != '' && dataLogin.person.password != '') {
      this.personServices.login(dataLogin).subscribe((data: Data) => {
        if (data.ok) {
          if (this.permissions.decodeToken(data.token)) {
            this.router.navigate(['/home']);
          } else {
            email = '';
            password = '';
            console.log('Error')
          }
        } else {
          Swal.fire({
            position: 'top-end',
            icon: 'warning',
            title: 'Correo o contraseña incorrectas',
            showConfirmButton: false,
            timer: 1500
          });
        }
      });
    }
  }
}
