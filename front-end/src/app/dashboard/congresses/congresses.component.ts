import {Component, OnInit} from '@angular/core';
import {CongressService} from '../../services/congress.service';

@Component({
  selector: 'app-congresses',
  templateUrl: './congresses.component.html',
  styleUrls: ['./congresses.component.scss']
})
export class CongressesComponent implements OnInit {

  congress: any = []

  constructor(
    private congressService: CongressService
  ) {
  }

  ngOnInit() {
    this.getCongress();
  }

  getCongress() {
    return this.congressService.getCongress().subscribe(
      res => {
        this.congress = res;
      },
      err => console.error(err)
    )
  }
}
