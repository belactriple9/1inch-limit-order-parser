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

  constructor() { }

  ngAfterViewInit() {
    let aceEditor = ace.edit(this.editor.nativeElement);


  }

  async onClick() {
    let aceEditor = ace.edit(this.editor.nativeElement);
    let text = aceEditor.getValue();
    let data = Parser(text);
    let output = await buildOutput(data);
    // write output to the box-output
    const outputBox = document.getElementById('json-output');
      if(outputBox!=null)
      {
          outputBox.innerHTML = output;
      }


  }
}


// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })


// export class AppComponent implements AfterViewInit {
//   title = '1inch Limit Order Parser';

//   @ViewChild("editor") private editor:any;

//   ngAfterViewInit() {
//     var editor = ace.edit(this.editor.nativeElement);
//     Parser(editor);
//   }
// }

