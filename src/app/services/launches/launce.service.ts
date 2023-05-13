import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Launch } from 'src/app/models/launch/launch';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LaunceService {

  baseUrl = environment.baseUrl;

  constructor(private httpSvc: HttpClient) { }

  getPastLaunches(): Observable<Launch[]> {
    return this.httpSvc.get<Launch[]>(this.baseUrl + 'spacex/api/launches/past-launches');
  }

  getUpcomingLaunches(): Observable<Launch[]> {
    return this.httpSvc.get<Launch[]>(this.baseUrl + 'spacex/api/launches/upcoming-launches');
  }

  getLaunchByFlightNumber(flight_number: number): Observable<Launch[]> {
    return this.httpSvc.get<Launch[]>(this.baseUrl + `spacex/api/launches/past-launches/${flight_number}`);
  }
}
