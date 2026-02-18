import { Component } from '@angular/core';
import { PsuCardComponent } from './psu-card/psu-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PsuCardComponent],
  template: '<app-psu-card></app-psu-card>'
})
export class AppComponent {}
