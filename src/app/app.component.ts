import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, MainComponent],
  templateUrl: 'app.component.html',
})
export class AppComponent {}
