import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes';  // URL to web api

  constructor( private http: HttpClient, private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    /** Get heroes from the server */
    /** We extend the observable results with the pipe() method and give it a catchError() operator which 
     will allow us the "pipe" the observable result from http.get() through an RxJS catchError() operator.
     
     The handleError() method reports the error and then returns an innocuous result so that the application 
     keeps working. */

    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }

  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified "id' always exists .
    // Error handling will be added in the next step of the tutorial .
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroServices: fetched hero ${id}`);
    return of(hero);
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroServices: ${message}`);

  }

/**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  
}
