import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // <-- Import the module here
import { AppComponent } from './app.component';
import { BasketComponent } from './basket/basket.component';

@NgModule({
  declarations: [AppComponent, BasketComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
