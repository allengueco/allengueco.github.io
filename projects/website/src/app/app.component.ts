import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <div class="container flex flex-col mx-auto">
      <app-header></app-header>
      <router-outlet #outlet=outlet></router-outlet>
<!--      <app-footer></app-footer>-->
    </div>`
})
export class AppComponent {

}
