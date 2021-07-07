import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { DisplayResultComponent } from './display-result/display-result.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WithRatesComponent } from './with-rates/with-rates.component';
import { WithoutRatesComponent } from './without-rates/without-rates.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DisplayResultComponent,
    WithRatesComponent,
    WithoutRatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'', component: HomeComponent},
      {path:'home', component: HomeComponent},
      {path:'display-result', component: DisplayResultComponent},
      {path:'with-rates', component: WithRatesComponent},
      {path:'without-rates', component: WithoutRatesComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
