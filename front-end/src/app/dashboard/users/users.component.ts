import {Component, OnInit} from '@angular/core';
import {PersonService} from '../../services/person.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  photo: any = ''
  users: any = [];

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

}
