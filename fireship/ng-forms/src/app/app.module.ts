import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { ReactiveFormsModule } from '@angular/forms';

import { ContainerComponent } from './components/container/container.component';
import { NestedformComponent } from './pages/forms/nestedform/nestedform.component';
import { MaterialModule } from './components/material/material.module';

@NgModule({
  declarations: [AppComponent, IndexComponent, ContainerComponent, ContainerComponent, NestedformComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
