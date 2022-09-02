import { Component, Input } from '@angular/core';
import { ComponentRendering } from '@sitecore-jss/sitecore-jss-angular';
// import { Router } from '@angular/router';
// import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() rendering: ComponentRendering;
  public logoName = 'BookStore'

  // constructor(private link: Router, private path: Location ) { }

  // public isOnHomepage(): boolean {
  //   return this.link.url === '/' || this.link.url === '' ? true : false;
  // }

  // public goBack() {
  //   this.path.back()
  // }
}
