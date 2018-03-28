import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule, MatTabsModule, MatInputModule } from '@angular/material';

import { GraphComponent } from './graphs/components/graph.component';
import { TableComponent } from './table/components/table.component';
import { InfoComponent } from './info/components/info.component';
import { LoginComponent } from './login/components/login.component';
import { TopNavBarComponent } from './topnavbar/topnavbar.component';
import { AppService } from './services/appservice.service';

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    TableComponent,
    InfoComponent,
    LoginComponent,
    TopNavBarComponent
  ],
  imports: [
    BrowserModule,
    MatTabsModule,
    MatInputModule,
    CommonModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    AppRoutingModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
