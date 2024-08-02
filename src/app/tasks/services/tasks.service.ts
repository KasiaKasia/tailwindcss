import { inject, Injectable } from '@angular/core';
import { catchError, concatMap, map, Observable, tap } from 'rxjs';
import { tasks } from './data/tasks';
import { HttpClient } from '@angular/common/http';
import { TasksStore } from '../store/tasks.store';


@Injectable({
  providedIn: 'root'
})
export class TasksService {
  protected readonly tasksStore = inject(TasksStore);
  private readonly firstTask = tasks[0];

  private URL = `https://geocoding-api.open-meteo.com/v1/search?name=${this.firstTask.location}&count=10&language=pl&format=json`; 

  constructor(private http: HttpClient) {}

  
  fetchLatitudeLongitude(): Observable<any> {
    return this.http.get<any>(this.URL).pipe(
      map(res => res.results[0]),
      catchError(err => {
        throw 'Error in source. Details: ' + err;
      })
    )
  }
 
  fetchTemperature(latitude: number, longitude: number): Observable<any> {
    return this.http.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m`);
  }
 
  fetchDataSequentially(): Observable<any> {
    return this.fetchLatitudeLongitude().pipe(
      concatMap((dataLatLon) => { 
        if (dataLatLon && dataLatLon.latitude && dataLatLon.longitude) {
          this.updateFirstTask(dataLatLon.latitude, dataLatLon.longitude);
         
        }
        return this.fetchTemperature(dataLatLon.latitude, dataLatLon.longitude);
      }),
      tap((temperatureData) => this.updateTemperatureInFirstTask(temperatureData))
    );
  }
  updateFirstTask(latitude: number, longitude: number): void {
    if (tasks.length > 0 && this.tasksStore.tasks().length > 0) {
      tasks[0].latitude = latitude;
      tasks[0].longitude = longitude;

      this.tasksStore.tasks()[0].latitude = latitude;
      this.tasksStore.tasks()[0].longitude = longitude;
    }
  }

  updateTemperatureInFirstTask(temperatureData: any): void {
    if ( this.tasksStore.tasks().length > 0 && temperatureData) {
      const temp = temperatureData.current.temperature_2m;
      const tempUnit = temperatureData.current_units.temperature_2m;
      tasks[0].temperature = `${temp} ${tempUnit}`;
      this.tasksStore.tasks()[0].temperature = `${temp} ${tempUnit}`;
    }
  }

}
