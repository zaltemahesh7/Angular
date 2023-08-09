import { Component } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  data = 'Code Step by step';
  len = 0;
  data1 = '';
  getValue(name: string) {
    this.len++;
    console.log(name);
    this.data1 = name;
  }
  count1 = 0;
  counter(type:string) {
    type === 'add' ? this.count1++ : this.count1--
  }
// ---------------------------------------------------

show = true;

// =====================================================
color='';
getColor(color1:string){
this.color = color1;
}
color2 = 'red';
}
