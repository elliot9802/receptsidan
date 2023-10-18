import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ReceptlistanComponent } from './receptlistan/receptlistan.component';
import { ReceptsidorComponent } from './receptsidor/receptsidor.component';

@NgModule({
  declarations: [AppComponent, ReceptlistanComponent, ReceptsidorComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
