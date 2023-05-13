import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Launch } from 'src/app/models/launch/launch';
import { SharedService } from 'src/app/services/common/shared.service';
import { LaunceService } from 'src/app/services/launches/launce.service';

@Component({
  selector: 'app-past-launces',
  templateUrl: './past-launces.component.html',
  styleUrls: ['./past-launces.component.css']
})
export class PastLauncesComponent implements OnInit {
  pastLaunches: Launch[];

  constructor(private launchSvc: LaunceService, private toastr: ToastrService,
    private sharedSvc: SharedService) { }

  ngOnInit(): void {
    if(this.sharedSvc.pastLaunches$.getValue()){
      this.pastLaunches = this.sharedSvc.pastLaunches$.getValue();
    }
    else{
      this.getPastLaunches();
    }
  }

  getPastLaunches() {
    this.launchSvc.getPastLaunches().subscribe({
      next: (response: Launch[]) => {
        this.pastLaunches = response;
        this.sharedSvc.setpastLaunches(response);
      },
      error: () => this.toastr.error("Sometime went wrong, please try later.")
    });
  }
}
