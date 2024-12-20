import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DasboardComponent } from './Dashboard/dasboard/dasboard.component';
import { ZooComponent } from './zoo/zoo.component';


@NgModule({
  declarations: [
    AppComponent,
    DasboardComponent,
    ZooComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
