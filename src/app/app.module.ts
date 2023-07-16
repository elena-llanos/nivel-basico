import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';
import { OneWayBindingComponent } from './components/one-way-binding/one-way-binding.component';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { TwoWayDataBindingComponent } from './components/two-way-data-binding/two-way-data-binding.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { NgForThomannComponent } from './components/ng-for-thomann/ng-for-thomann.component';
import { EstrellasLikesComponent } from './components/estrellas-likes/estrellas-likes.component';
import { CorazonComponent } from './components/corazon/corazon.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    OneWayBindingComponent,
    PropertyBindingComponent,
    NgStyleComponent,
    EventBindingComponent,
    NgClassComponent,
    TwoWayDataBindingComponent,
    NgIfComponent,
    NgForComponent,
    NgForThomannComponent,
    EstrellasLikesComponent,
    CorazonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
