import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { StarshipDetailsComponent } from './pages/starship-details/starship-details.component';
import { StarshipsListComponent } from './pages/starships-list/starships-list.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StarshipDetailsComponent,
    StarshipsListComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'starships-list', component: StarshipsListComponent },
      { path: 'starship-detail/:id', component: StarshipDetailsComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
