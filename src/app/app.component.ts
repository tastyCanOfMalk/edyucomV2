import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { TestComponent } from './components/test/test.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ProjectsComponent, FooterComponent, TestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
