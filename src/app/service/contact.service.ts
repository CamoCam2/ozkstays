import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpClient: HttpClient) { }

  public sendEmail(data: FormData) {
    this.httpClient.post('https://api.emailjs.com/api/v1.0/email/send-form', data)
      .pipe(
        catchError(this.handleError())
      );
  }

  private handleError() {
    return function(p1: any, p2: Observable<string>) {
      console.log(p1, p2);
      return undefined;
    };
  }
}
