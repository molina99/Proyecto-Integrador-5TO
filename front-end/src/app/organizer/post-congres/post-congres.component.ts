import { Component, OnInit } from '@angular/core';
import { OrganizerService} from '../../servicio/organizer.service';


@Component({
  selector: 'app-post-congres',
  templateUrl: './post-congres.component.html',
  styleUrls: ['./post-congres.component.scss']
})
export class PostCongresComponent implements OnInit {
  congress: any = [];

  constructor(
    private organizerService: OrganizerService
  ) { }

  ngOnInit() {
  //  this.getCongress();
  }

  // getCongress(){
  //   return this.organizerService.getCongress().subscribe(
  //     res =>{
  //       this.congress = res;
  //       console.log(this.congress)
  //     },
  //     err => console.error(err)
  //   )
  // }

}


