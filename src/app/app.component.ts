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
    'Json input',
    'Hash input',
    'Address input',
  ];


  ngDoCheck() {
    if(this.activeItemIndex === 0)
    {
      this.initEditor();
    }
  }

  ngAfterViewInit() {
    this.initEditor();
  }

  initEditor(){
    // let garbage = ace.edit(this.editor.nativeElement);
    
    const maybeEditor = document.getElementById('app-ace-editor');
    if(maybeEditor!=null)
    {
      const aceEditor = ace.edit(maybeEditor);
    }
  }

  async jsonDecode() {
    const aceEditor = ace.edit(this.editor.nativeElement);
    const text = aceEditor.getValue();

    this.parsedData = await Parser(text);

  }

  onKeyUp(event: any) {
    // get the input value from the textarea
    const maybeInput = document.getElementById('textarea-input');
    if(maybeInput!=null)
    {
      const input = maybeInput.innerText;
      if(input.length == 40)
      {
        this.parsedData = Parser(input);
      }
    }
  }

}
