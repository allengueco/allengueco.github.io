import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    MenubarModule,
  ],
  template: `<p-menubar [model]="items" />`,
})
export class HeaderComponent {
  items: MenuItem[] = [
    {
      label: 'home',
      routerLink: 'home'
    },
    {
      label: 'projects',
      routerLink: 'projects'
    },
    {
      label: 'contact',
      routerLink: 'contact'
    }
  ]
}