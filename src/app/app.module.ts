import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import {CustomMaterialModule} from "./core/material.module";
import { MatGridListModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { TheGridComponent } from './the-grid/the-grid.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TheGridComponent,
    AboutMeComponent
  ],
  imports: [
    MatGridListModule ,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CustomMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
