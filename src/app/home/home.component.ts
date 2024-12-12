import { Component } from '@angular/core';
import { ExperienceComponent } from '../experience/experience.component';

@Component({
    selector: 'app-home',
    imports: [ExperienceComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {}
