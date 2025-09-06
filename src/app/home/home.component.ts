
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [],
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  socials: { icon: string; link: string }[] = [
    {
      icon: 'pi-github',
      link: 'https://github.com/allengueco',
    },
    {
      icon: 'pi-linkedin',
      link: 'https://linkedin.com/in/allengueco',
    },
    {
      icon: 'pi-code',
      link: 'https://stackoverflow.com/users/10374250/agueco',
    },
  ];
}
