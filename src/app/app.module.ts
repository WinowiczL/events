import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EventsListComponent} from './events/events-list.component';
import {EventThumbnailComponent} from './events/event-thumbnail.component';
import {NavbarComponent} from './nav/navbar.component';
import {EventService} from './events/shared/event.service';
import {ToastrService} from './common/toastr.service';
import {EventDetailComponent} from './events/event-detail/event-detail.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from '../routes';
import {CreateEventComponent} from './events/create-event.component';
import {Error404Component} from './errors/404.component';
import {EventListResolverService} from './events/event-list-resolver.service';
import {AuthService} from './user/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    CreateEventComponent,
    Error404Component,
    EventDetailComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [EventService, ToastrService, EventListResolverService, {
    provide: 'canDeactivateCreateEvent', useValue: checkDirtyState,
  }, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {
}

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?');
  }
  return true;
}
