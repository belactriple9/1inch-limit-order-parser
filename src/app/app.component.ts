import { AfterViewInit, Component, ViewChild } from '@angular/core';

import * as ace from "ace-builds";

import { Parser } from 'src/assets/js/parser';
import { buildOutput } from 'src/assets/js/outputBuilder';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = '1inch Limit Order Parser';
  @ViewChild('editor') editor:any;

  parsedData: any = null;

  activeItemIndex = 0;

  tabs = [
    'Tab 1',
    'Tab 2',
  ];

  constructor() { }

  ngAfterViewInit() {
    let aceEditor = ace.edit(this.editor.nativeElement);
  }

  async onClick() {
    const aceEditor = ace.edit(this.editor.nativeElement);
    const text = aceEditor.getValue();

    this.parsedData = Parser(text);
  }
}
