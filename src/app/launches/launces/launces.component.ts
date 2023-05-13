import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Launch } from 'src/app/models/launch/launch';
import { SharedService } from 'src/app/services/common/shared.service';
import { LaunceService } from 'src/app/services/launches/launce.service';

@Component({
  selector: 'app-launces',
  templateUrl: './launces.component.html',
  styleUrls: ['./launces.component.css']
})
export class LauncesComponent implements OnInit {
  @Input() launches: Launch[];
  constructor(private launchSvc: LaunceService, private toastr: ToastrService,
    private router: Router, private sharedSvc: SharedService) { }

  ngOnInit(): void {
  }

  getLaunchDetails(flight_number: number) {
    this.launchSvc.getLaunchByFlightNumber(flight_number).subscribe({
      next: (response: Launch) => {
        this.sharedSvc.setLaunchDetails(response)
        this.router.navigate(['launch-details']);
      },
      error: () => this.toastr.error("Sometime went wrong, please try later.")
    });
  }
}
