import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [CommonModule],
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  socials: { iconName: string; link: string }[] = [
    {
      iconName: 'pi-github',
      link: 'https://github.com/allengueco',
    },
    {
      iconName: 'pi-linkedin',
      link: 'https://linkedin.com/in/allengueco',
    },
    {
      iconName: 'pi-code',
      link: 'https://stackoverflow.com/users/10374250/agueco',
    },
  ];
}
