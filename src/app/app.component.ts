import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {ToolbarComponent} from "./toolbar/toolbar.component";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbar} from "@angular/material/toolbar";
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarComponent, MatSidenavModule, MatToolbar, RouterLink, MatNavList, MatListItem, MatIconButton, MatIcon],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-movies';
}
