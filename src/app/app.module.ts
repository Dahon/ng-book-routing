import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ArtistsComponent } from './artists/artists.component';
import { AlbumsComponent } from './albums/albums.component';
import { TracksComponent } from './tracks/tracks.component';
import { SpotifyService } from './shared/services/spotify.service';

import {
  RouterModule,
  Routes
} from '@angular/router';
import {
  LocationStrategy,
  HashLocationStrategy,
  APP_BASE_HREF
} from '@angular/common';

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'artists/:id', component: ArtistsComponent },
  { path: 'tracks/:id', component: TracksComponent },
  { path: 'albums/:id', component: AlbumsComponent },
];
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistsComponent,
    AlbumsComponent,
    TracksComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes) // <-- routes
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
