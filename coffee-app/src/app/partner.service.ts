import { Injectable } from '@angular/core';
import { Partners } from './interfaces/partners';
import { PARTNERS } from './data/mock_partners';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  constructor() { }

  getPartners(): Observable<Partners[]>{
    return of(PARTNERS);
  }
}
