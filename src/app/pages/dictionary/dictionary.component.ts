import { Component, OnInit } from '@angular/core';
import { DictionaryService } from './dictionary.service';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss'],
})
export class DictionaryComponent implements OnInit {
  word$ = this.service.listValue$;

  constructor(public service: DictionaryService) {}

  ngOnInit(): void {}
}
