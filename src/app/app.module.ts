import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { OverlayModule } from '@angular/cdk/overlay';

import { InfoButtonComponent } from './info-popup/info-button/info-button.component';
import { InfoComponent } from './info-popup/info/info.component';
import { InfoPopupDirective } from './info-popup/info-popup.directive';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    InfoButtonComponent,
    InfoComponent,
    InfoPopupDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    OverlayModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [InfoComponent]
})
export class AppModule { }
