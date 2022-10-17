import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from '.e:/FrontEnd/angular/AngularTs/AngularTasks/AngularTasks/src/Product/Product.component';

@NgModule({
  declarations: [	
    AppComponent,
      ProductComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
