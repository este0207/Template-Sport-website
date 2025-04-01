import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainPageComponent } from "./main-page/main-page.component";
import { DescriptionPageComponent } from "./description-page/description-page.component";
import { ContactComposentComponent } from "./contact-composent/contact-composent.component";
import { CitationComponent } from './citation/citation.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, MainPageComponent, DescriptionPageComponent, ContactComposentComponent, CitationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'sport-site';
}
