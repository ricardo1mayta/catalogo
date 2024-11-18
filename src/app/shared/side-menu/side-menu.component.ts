import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
})
export class SideMenuComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
