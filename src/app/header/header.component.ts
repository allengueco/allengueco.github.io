import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from "@angular/router";
import { MenubarModule } from 'primeng/menubar';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    MenubarModule,
  ],
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'header.component.html'

})
export class HeaderComponent {
  items: MenuItem[] = [
    {
      label: 'home',
      routerLink: 'home',
      icon: PrimeIcons.HOME
    },
    {
      label: 'projects',
      routerLink: 'projects',
      icon: PrimeIcons.CODE,
    },
    {
      label: 'contact',
      routerLink: 'contact',
      icon: PrimeIcons.ENVELOPE
    }
  ]
}
