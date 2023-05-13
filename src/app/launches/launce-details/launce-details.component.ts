import { Component, OnInit } from '@angular/core';
import { Launch } from 'src/app/models/launch/launch';
import { SharedService } from 'src/app/services/common/shared.service';

@Component({
  selector: 'app-launce-details',
  templateUrl: './launce-details.component.html',
  styleUrls: ['./launce-details.component.css']
})
export class LaunceDetailsComponent implements OnInit {
  launchDetails: Launch;

  constructor(private sharedSvc: SharedService) { }

  ngOnInit(): void {
    this.sharedSvc.launch$.subscribe(launch => {
      this.launchDetails = launch;
    })
  }
}
