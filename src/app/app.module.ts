import {NgModule} from '@angular/core';
import { MoviesService } from './services/movies.service';

import {AppComponent} from "./app.component";
@NgModule({
  declarations: [],
  imports: [
    AppComponent,
  ],
  providers: [
    MoviesService
  ],
})
export class AppModule {
}
