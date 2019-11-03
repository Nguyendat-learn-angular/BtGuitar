import { Component } from '@angular/core';
import {DataService} from './services/data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Guitar World';
  danhmuc:any;
  constructor(private data:DataService) { }

  ngOnInit() {
    this.data.getCategires().subscribe(data=>{
      this.danhmuc=data;
    })
    
  }
  
}
