import { Component } from '@angular/core';
import { ExperienceComponent } from '../experience/experience.component';

@Component({
  selector: 'website-home',
  standalone: true,
  imports: [ExperienceComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
