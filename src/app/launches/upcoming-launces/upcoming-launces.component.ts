import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Launch } from 'src/app/models/launch/launch';
import { SharedService } from 'src/app/services/common/shared.service';
import { LaunceService } from 'src/app/services/launches/launce.service';

@Component({
  selector: 'app-upcoming-launces',
  templateUrl: './upcoming-launces.component.html',
  styleUrls: ['./upcoming-launces.component.css']
})
export class UpcomingLauncesComponent implements OnInit {

  upcomingLaunches: Launch[];

  constructor(private launchSvc: LaunceService, private toastr: ToastrService, 
        private sharedSvc: SharedService) { }

  ngOnInit(): void {
    if(this.sharedSvc.upcomingLaunches$.getValue()){
      this.upcomingLaunches = this.sharedSvc.upcomingLaunches$.getValue();
    }
    else{
      this.getUpcomingLaunches();
    }
  }

  getUpcomingLaunches() {
    this.launchSvc.getUpcomingLaunches().subscribe({
        next : (response: Launch[]) => {
          this.upcomingLaunches = response;
          this.sharedSvc.setupcomingLaunches(response);
        },
        error: () => this.toastr.error("Sometime went wrong, please try later.")
      });
  }
}
