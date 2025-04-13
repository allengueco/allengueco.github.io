import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: 'main.component.html',
  imports: [HomeComponent, RouterOutlet, RouterLink, RouterLinkActive],
  styles: ``,
})
export class MainComponent {}
