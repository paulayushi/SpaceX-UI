import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './home/login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PastLauncesComponent } from './launches/past-launces/past-launces.component';
import { UpcomingLauncesComponent } from './launches/upcoming-launces/upcoming-launces.component';
import { LaunceDetailsComponent } from './launches/launce-details/launce-details.component';
import { JwtInterceptor } from './interceptors/jwt-interceptor';
import { LauncesComponent } from './launches/launces/launces.component';
import { AllLauncesComponent } from './launches/all-launces/all-launces.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PastLauncesComponent,
    UpcomingLauncesComponent,
    LaunceDetailsComponent,
    LauncesComponent,
    AllLauncesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BsDatepickerModule.forRoot(),
    JwtModule.forRoot({
      config: {
      }
   })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
