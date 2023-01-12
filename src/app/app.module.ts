import { AlmacenServiceService } from './service/almacen-service.service';
import { CompAsinc17Module } from './comp-asinc17/comp-asinc17.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CompAsinc17Module
  ],
  providers: [AlmacenServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
