import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer class="justify-self-end">
    {{ this }}
      <p>footer</p>
    </footer>
  `,
  styles: ``
})
export class FooterComponent {

}
