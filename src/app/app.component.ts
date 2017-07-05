import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';

  onSubmit(data: NgForm){  //the word data here is inconsequential- could be anything
  console.log(data.value)  //the word data here needs to match the above data word
  }

}
