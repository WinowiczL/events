import {Observable, Subject} from 'rxjs';
import {Injectable} from '@angular/core';
import {IEvent} from './event.model';

@Injectable()
export class EventService {

  events: IEvent[] = [
    {
      id: 1,
      name: 'Angular Connect',
      date: new Date('9/26/2036'),
      time: '8:00 am',
      price: 599.99,
      imageUrl: '/assets/images/shield./png',
      location: {
        address: '1057 DT',
        city: 'London',
        country: 'England',
      },
      sessions: [],
    },
    {
      id: 2,
      name: 'Angular ng',
      date: new Date('9/26/2036'),
      time: '10:00 am',
      price: 599.99,
      imageUrl: '/assets/images/shield./png',
      url: 'http:/angular.ng.com',
      sessions: [],
    },
    {
      id: 3,
      name: 'ng open',
      date: new Date('9/26/2036'),
      time: '8:00 am',
      price: 599.99,
      imageUrl: '/assets/images/shield./png',
      location: {
        address: '1057 DT',
        city: 'London',
        country: 'England',
      },
      sessions: [],
    },
    {
      id: 4,
      name: 'ng serve',
      date: new Date('9/26/2036'),
      time: '10:00 am',
      price: 599.99,
      imageUrl: '/assets/images/shield./png',
      location: {
        address: '1057 DT',
        city: 'London',
        country: 'England',
      },
      sessions: [],
    },
  ];

  getEvents(): Observable<IEvent[]> {
    const subject = new Subject<IEvent[]>();
    setTimeout(() => {
      subject.next(this.events);
      subject.complete();
    }, 100);
    return subject;
  }

  getEvent(id: number): IEvent {
    return this.events.find(event => event.id === id);
  }
}


