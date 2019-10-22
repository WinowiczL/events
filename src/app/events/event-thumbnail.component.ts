import {Component, Input} from '@angular/core';
import {IEvent} from './shared/event.model';

@Component({
  selector: 'app-event-thumbnail',
  template: `
      <div [routerLink]="['/events',  event.id]" class="well hoverwell thumbnail">
          <h2>{{event?.name}}</h2>
          <div>Date: {{event?.date}}</div>
          <div>Time: {{event?.time}}</div>
          <div [ngStyle]="getStartTimeStyle()" [ngSwitch]="event?.time">
              <span *ngSwitchCase='"8:00 am"'>Early Start</span>
              <span *ngSwitchCase='"10:00 am"'>Later Start</span>
              <span *ngSwitchDefault>Normal Start</span>
          </div>
          <div>Price: \${{event?.price}}</div>
          <div *ngIf="event?.location">
              <span>Location: {{event.location.address}}</span>
              <span class="pad-left">{{event.location.city}}, {{event.location.country}}</span>
          </div>
          <div *ngIf="event?.url">
              <span>Url: {{event.url}}</span>
          </div>
      </div>
  `,
  styles: [`
      .thumbnail {
          min-heigth: 210px;
      }

      .pad-left {
          margin-left: 10px;
      }

      .well div {
          color: #bbb;
      }
  `],
})
export class EventThumbnailComponent {

  @Input()
  event: IEvent;

  getStartTimeStyle() {
    const isEarlyStart = this.event && this.event.time === '8:00 am';
    if (isEarlyStart) {
      return {color: '#003300', 'font-weight': 'bold'};
    }
    return {};
  }
}
