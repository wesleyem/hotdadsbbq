import { Routes } from '@angular/router';
import { AboutUsComponent } from './sections/about-us/about-us.component';
import { EventsComponent } from './sections/events/events.component';
import { GalleryComponent } from './sections/gallery/gallery.component';
import { ContactComponent } from './sections/contact/contact.component';
import { AwardsComponent } from './sections/awards/awards.component';

export const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: AboutUsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'awards', component: AwardsComponent },
];
