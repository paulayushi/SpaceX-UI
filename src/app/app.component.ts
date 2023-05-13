import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SpaceX-UI';

  constructor(private authSvc: AuthService, private router: Router, private toastrSvc: ToastrService){}
  
  ngOnInit(): void {    
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        if(event.url == '/'){
          localStorage.removeItem('token');
       }
    }});
  }

  loggedIn(): boolean {
    return this.authSvc.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['home']);
    this.toastrSvc.info('Logged out successfully.');
  }
}
