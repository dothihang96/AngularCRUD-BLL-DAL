import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudComponent } from './Controller/crud/crud.component';
import { ObjectAddComponent } from './Controller/object-add/object-add.component';
import { ObjectUpdateComponent } from './Controller/object-update/object-update.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ObjectService } from './ObjectService/object-service';
import { ObjectBLO } from './Model/BLL/object-blo';
import { ObjectDAO } from './Model/DAL/object-dao';


@NgModule({
  declarations: [
    AppComponent,
    CrudComponent,
    ObjectAddComponent,
    ObjectUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [ObjectService,ObjectBLO,ObjectDAO],
  bootstrap: [AppComponent]
})
export class AppModule { }
