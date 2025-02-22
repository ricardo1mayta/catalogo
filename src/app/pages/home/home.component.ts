import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from '../../shared/side-menu/side-menu.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SideMenuComponent, FooterComponent, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
