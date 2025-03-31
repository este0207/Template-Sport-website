import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainPageComponent } from "./main-page/main-page.component";
import { DescriptionPageComponent } from "./description-page/description-page.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, MainPageComponent, DescriptionPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'sport-site';
}
