import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ClientEventComponent } from './client-event/client-event.component';
import * as $ from 'jquery';
import { ElementHelperService } from './element-helper.service';

@NgModule({
    declarations: [AppComponent, ClientEventComponent],
    imports: [BrowserModule, FormsModule, HttpModule],
    providers: [ElementHelperService],
    bootstrap: [AppComponent]
})
export class AppModule {}
