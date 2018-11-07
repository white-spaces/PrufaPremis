import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css', './responsive-front-page.css']
})
export class FrontPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showMobileNav: boolean = false;

  toggleMobileNav(){
    // Check if Nav is toggled
    if (this.showMobileNav === false) {
      this.showMobileNav = true;
    } else {
      this.showMobileNav = false;
    }
  }

  disableMobileNav(){
    this.showMobileNav = false;
  }

 arrowFunction(){
    // Ör sem scrollar að efni
    $(".down-arrow").click(function(){
      $("html, body").animate({
        scrollTop: $(".frettir-container").offset().top
      }, 600);
    })
  }
}
