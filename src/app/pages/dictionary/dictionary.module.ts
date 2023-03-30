import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DictionaryRoutingModule } from './dictionary-routing.module';
import { DictionaryComponent } from './dictionary.component';
import { CardModule } from 'primeng/card';
import { DictionaryService } from './dictionary.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [DictionaryComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    CardModule,
    DictionaryRoutingModule,
  ],
  providers: [DictionaryService],
})
export class DictionaryModule {}
