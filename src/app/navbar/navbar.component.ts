import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  click = true;

  constructor() {}

  ngOnInit(): void {}

  setHamburgerActive() {
    this.click = !this.click;
  }
}
