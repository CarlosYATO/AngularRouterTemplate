import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
    declarations: [
     
      HomePageComponent,
     
    ],
    imports: [
      CommonModule,
      RouterModule,
      BrowserAnimationsModule,
      HttpClientModule,
      ReactiveFormsModule,
      
    ],
    exports: [   
    ],
  })
  export class PagesModule {
  }