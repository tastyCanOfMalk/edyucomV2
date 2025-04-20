import { Component } from '@angular/core';
import { LucideAngularModule, Moon, Sun } from 'lucide-angular';
@Component({
  selector: 'app-footer',
  imports: [LucideAngularModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear(); // Calculate the current year
  readonly moonIcon = Moon; // Assign the moon icon to a readonly property
  readonly sunIcon = Sun; // Assign the moon icon to a readonly property
}
