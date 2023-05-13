import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { AuthGuard } from './guards/auth-guard';
import { UpcomingLauncesComponent } from './launches/upcoming-launces/upcoming-launces.component';
import { AllLauncesComponent } from './launches/all-launces/all-launces.component';
import { LaunceDetailsComponent } from './launches/launce-details/launce-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'launches', component: AllLauncesComponent },
      { path: 'launch-details', component: LaunceDetailsComponent }
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
