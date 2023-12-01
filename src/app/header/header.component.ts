import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink
  ],
  template: `
    <header>
      <h1 class="text-4xl cursor-pointer font-bold font py-4">ag.</h1>
      <ul>
        <li routerLink="home" class="cursor-pointer hover:underline underline-offset-8">home</li>
        <li routerLink="projects" class="cursor-pointer hover:underline underline-offset-8">projects</li>
        <li routerLink="contact" class="cursor-pointer hover:underline underline-offset-8">contact</li>
      </ul>
    </header>
  `,
  styles: ``
})
export class HeaderComponent {

}
