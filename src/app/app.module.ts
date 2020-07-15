import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; 
import { RouterModule,Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EventsComponent } from './events/events.component';
import { FooterComponent } from './footer/footer.component';
import { ExpressionComponent } from './expression/expression.component';
import { PhotoComponent } from './photo/photo.component';


const routes:Routes=[
    {path:'',component:EventsComponent},
    {path:'expression',component:ExpressionComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    EventsComponent,
    FooterComponent,
    ExpressionComponent,
    PhotoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
