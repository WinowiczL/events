import {Subject} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class EventService {

  events = [{
    id: 1,
    name: 'Angular Connect',
    date: '9/26/2036',
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
      date: '9/26/2036',
      time: '10:00 am',
      price: 599.99,
      imageUrl: '/assets/images/shield./png',
      url: 'http:/angular.ng.com',
      sessions: [],
    },
    {
      id: 3,
      name: 'ng open',
      date: '9/26/2036',
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
      date: '9/26/2036',
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

  getEvents() {
    const subject = new Subject();
    setTimeout(() => {
      subject.next(this.events);
      subject.complete();
    }, 100);
    return subject;
  }

  getEvent(id: number) {
    return this.events.find(event => event.id === id);
  }
}


