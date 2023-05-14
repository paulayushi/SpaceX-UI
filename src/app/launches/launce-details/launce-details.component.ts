import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Launch } from 'src/app/models/launch/launch';
import { SharedService } from 'src/app/services/common/shared.service';
import { LaunceService } from 'src/app/services/launches/launce.service';

@Component({
  selector: 'app-launce-details',
  templateUrl: './launce-details.component.html',
  styleUrls: ['./launce-details.component.css']
})
export class LaunceDetailsComponent implements OnInit {
  launchDetails: Launch;

  constructor(private sharedSvc: SharedService, private launchSvc: LaunceService,
    private route: ActivatedRoute, private toastr: ToastrService) { }

  ngOnInit(): void {
    if(this.sharedSvc.launch$.getValue()){
      this.sharedSvc.launch$.subscribe(launch => {
        this.launchDetails = launch;
      })
    }
    
    else{
      this.launchSvc.getLaunchByFlightNumber(+this.route.snapshot.paramMap.get('id')).subscribe({
        next: (response: Launch) => {
          this.launchDetails = response;
          this.sharedSvc.setLaunchDetails(response)
        },
        error: () => this.toastr.error("Sometime went wrong, please try later.")
      });
    }
  }
}
