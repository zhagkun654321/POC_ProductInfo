import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APIServiceService } from './apiservice.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchKeywordComponent } from './search-keyword/search-keyword.component';
import { HttpClientModule } from '@angular/common/http';
// import { Observable, Subscription } from 'rxjs/Rx';
import { Observable,of, from } from 'rxjs';
// import { Subscription } from 'rxjs';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {VirtualScrollerModule} from 'primeng/virtualscroller';
@NgModule({
  declarations: [
    AppComponent,
    SearchKeywordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DialogModule,
    ButtonModule,
    BrowserAnimationsModule,
    // VirtualScrollerModule
  ],
  providers: [APIServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
