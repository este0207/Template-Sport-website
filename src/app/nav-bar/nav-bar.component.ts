import { Component } from '@angular/core';
import { NavLinksComponent } from "../nav-links/nav-links.component";
import { NavSocialsComponent } from "../nav-socials/nav-socials.component";

@Component({
  selector: 'app-nav-bar',
  imports: [NavLinksComponent, NavSocialsComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

}
