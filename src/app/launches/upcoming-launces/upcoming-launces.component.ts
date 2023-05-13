import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Launch } from 'src/app/models/launch/launch';
import { LaunceService } from 'src/app/services/launches/launce.service';

@Component({
  selector: 'app-upcoming-launces',
  templateUrl: './upcoming-launces.component.html',
  styleUrls: ['./upcoming-launces.component.css']
})
export class UpcomingLauncesComponent implements OnInit {

  upcomingLaunches: Launch[];

  constructor(private launchSvc: LaunceService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getUpcomingLaunches();
  }

  getUpcomingLaunches() {
    this.launchSvc.getUpcomingLaunches().subscribe({
        next : (response: Launch[]) => this.upcomingLaunches = response,
        error: () => this.toastr.error("Sometime went wrong, please try later.")
      });
  }
}
