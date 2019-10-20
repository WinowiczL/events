import {EventsListComponent} from './app/events/events-list.component';
import {EventDetailComponent} from './app/events/event-detail/event-detail.component';
import {Routes} from '@angular/router';
import {CreateEventComponent} from './app/events/create-event.component';
import {Error404Component} from './app/errors/404.component';
import {EventRouteActivatorService} from './app/events/event-detail/event-route-activator.service';
import {EventListResolverService} from './app/events/event-list-resolver.service';
import {UserModule} from './app/user/user.module';

export const appRoutes: Routes = [
  {path: '404', component: Error404Component},
  {path: 'events', component: EventsListComponent, resolve: {events: EventListResolverService}},
  {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
  {path: 'events/:id', component: EventDetailComponent, canActivate: [EventRouteActivatorService]},
  {path: '', redirectTo: '/events', pathMatch: 'full'},
  {path: 'user', loadChildren: () => UserModule},
];
