import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CallsService } from '../../../../services/calls.service';

@Injectable({
  providedIn: 'root'
})
export class CallsResolver implements Resolve<any> {
  constructor(private callsService: CallsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.callsService.getData();
  }
}
