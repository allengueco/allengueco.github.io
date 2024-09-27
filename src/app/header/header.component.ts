import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink
  ],
  template: `
    <header>
      <h1>ag.</h1>
      <ul>
        <li routerLink="home">home</li>
        <li routerLink="projects">projects</li>
        <li routerLink="contact">contact</li>
      </ul>
    </header>
  `,
  styles: ``
})
export class HeaderComponent {

}
