import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ReportListAllMoviesComponent} from "./report-list-all-movies/report-list-all-movies.component";

export const routes: Routes = [
  {path: 'report', component: ReportListAllMoviesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
