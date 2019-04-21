import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// ...other imports
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'http://localhost:4444', options: {} };
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DocumentListComponent } from './document-list/document-list.component';
import { DocumentComponent } from './document/document.component';

@NgModule({
  declarations: [
    AppComponent,
    DocumentListComponent,
    DocumentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
