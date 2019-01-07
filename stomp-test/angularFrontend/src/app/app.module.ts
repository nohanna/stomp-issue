import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RxStompService, InjectableRxStompConfig } from '@stomp/ng2-stompjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StompService } from './services/stomp.service';
import { FileService } from './services/file.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    RxStompService,
    InjectableRxStompConfig,
    StompService,
    FileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
