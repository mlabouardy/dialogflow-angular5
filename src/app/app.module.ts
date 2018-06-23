import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { DialogflowService } from '@app/services';
import { MessageListComponent, MessageFormComponent, MessageItemComponent } from '@app/components';
import { DynamicModule } from 'ng-dynamic-component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import { AppConfig } from './app.config';
import { APP_INITIALIZER } from '@angular/core';

export function initializeApp(appConfig: AppConfig) {
  return () => appConfig.load();
}

@NgModule({
  declarations: [
    AppComponent,
    MessageListComponent,
    MessageFormComponent,
    MessageItemComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CardModule,
    TableModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    DynamicModule.withComponents([MessageItemComponent, MessageFormComponent])
  ],
  providers: [
    DialogflowService,
    AppConfig,
       { provide: APP_INITIALIZER,
         useFactory: initializeApp,
         deps: [AppConfig], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
