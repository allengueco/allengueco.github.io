import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from "@angular/router";
import { ButtonComponent } from '../button/button.component';

@Component({
    selector: 'app-header',
    imports: [
        RouterLink,
        ButtonComponent
    ],
    templateUrl: 'header.component.html'
})
export class HeaderComponent {

}
