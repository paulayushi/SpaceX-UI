import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Launch } from 'src/app/models/launch/launch';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  launch$= new BehaviorSubject<Launch>(null);
  pastLaunches$= new BehaviorSubject<Launch[]>(null);
  upcomingLaunches$= new BehaviorSubject<Launch[]>(null);

  constructor() { }

  setLaunchDetails(launch: Launch){
    this.launch$.next(launch);
  }

  setpastLaunches(pastLaunches: Launch[]){
    this.pastLaunches$.next(pastLaunches);
  }

  setupcomingLaunches(upcomingLaunches: Launch[]){
    this.upcomingLaunches$.next(upcomingLaunches);
  }
}
