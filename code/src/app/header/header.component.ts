import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  homeLink: boolean;

  constructor(private location: Location) { }

  ngOnInit() {
    this.homeLink = true;
    this.determineActiveLink();
  }

  determineActiveLink() {
    const endPoint=this.location.path().split('/');
    if (endPoint.includes('about')) {
      this.homeLink=false;
    } else {
      this.homeLink=true;
    }
  }

}
