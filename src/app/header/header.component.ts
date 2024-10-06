import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from "@angular/router";
import { MenubarModule } from 'primeng/menubar';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    MenubarModule,
    ButtonComponent
  ],
  templateUrl: 'header.component.html'
})
export class HeaderComponent {
  items: MenuItem[] = [
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
