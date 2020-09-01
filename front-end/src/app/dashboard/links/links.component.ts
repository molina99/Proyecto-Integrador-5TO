import {Component, OnInit} from '@angular/core';
import {LinksService} from '../../services/links.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {

  links: any = []

  constructor(
    private linksService: LinksService
  ) {
  }

  ngOnInit() {
    this.getLinks();
  }

  getLinks() {
    return this.linksService.getLinks().subscribe(
      res => {
        console.log(res)
        this.links = res;
      },
      err => console.error(err)
    )
  }
}
