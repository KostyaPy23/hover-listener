import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';

import { Preset } from '../../models/preset.model';

@Injectable({
  providedIn: 'root'
})
export class PresetsService {
  private readonly presetsAPI= 'https://60816d9073292b0017cdd833.mockapi.io/modes';

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  public getPresets(): Observable<Preset[]> {
    return this.httpClient
      .get<Preset[]>(this.presetsAPI)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }


  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
