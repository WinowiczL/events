import {Component, OnInit} from '@angular/core';
import {EventService} from './shared/event.service';
import {ToastrService} from '../common/toastr.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  template: `
      <div>
          <h1>Upcoming Angular Events</h1>
          <hr/>
          <app-event-thumbnail *ngFor="let event of events" [event]="event" class="col-md-5"
                               (click)="handleThumbnailClick(event.name)"></app-event-thumbnail>
      </div>
  `,
})

export class EventsListComponent implements OnInit {

  events: any;

  constructor(private eventService: EventService, private  toastrService: ToastrService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.events = this.route.snapshot.data.events;
  }

  handleThumbnailClick(eventName) {
    this.toastrService.success(eventName);
  }


}
