import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ExperienceComponent } from './experience/experience.component';
import { HomeComponent } from './home/home.component';

@Component({
    selector: 'app-root',
    imports: [
        CommonModule,
        RouterOutlet,
        HomeComponent,
        FooterComponent,
        ExperienceComponent,
    ],
    templateUrl: 'app.component.html'
})
export class AppComponent {}
