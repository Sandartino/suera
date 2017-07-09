import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FilteringComponent } from './filtering/filtering.component';
import { FilteringDirective } from './filtering/filtering.directive';
import { ResultComponent } from './filtering/result/result.component';
import { DataService } from './data.service';
import { ResultDetailComponent } from './filtering/result/result-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilteringComponent,
    FilteringDirective,
    ResultComponent,
    ResultDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

