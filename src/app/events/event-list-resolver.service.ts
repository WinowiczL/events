import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {EventService} from './shared/event.service';
import {map} from 'rxjs/operators';

@Injectable()
export class EventListResolverService implements Resolve<any> {

  constructor(private eventService: EventService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.eventService.getEvents().pipe(map(events => events));
  }

}
