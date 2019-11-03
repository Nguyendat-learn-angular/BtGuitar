import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  product: any;
  cid: number;
  constructor(private data: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.data.getguitar().subscribe(data => {
      this.product = data;
    })
  }
}
