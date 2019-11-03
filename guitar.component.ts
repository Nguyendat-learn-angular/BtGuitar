import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-guitar',
  templateUrl: './guitar.component.html',
  styleUrls: ['./guitar.component.css']
})

export class GuitarComponent implements OnInit {
  so: any;
  gid: number;


  constructor(private data: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.data.getguitar().subscribe(data => {
      this.so = data;
    })
  }

  guitar = {
    "id": 1,
    "productname": "Caravan HS-4140",
    "price": 116000,
    "description": "Guitar Caravan HS-4140 là dòng sản phẩm guitar acoustic được thiết kế tinh tế cùng với âm thanh đanh, rõ nét rất thích hợp để chơi đệm hát và dòng nhạc trẻ trung.",
    "newfeature": [
      {
        "text1": "Giao hàng trong phạm vi 6 km trị giá 60,000 VNĐ"
      },
      {
        "text": "Tặng 2 phím đàn trị giá 20,000 VNĐ."
      },
      {
        "text": "Tặng ty chỉnh cần trị giá 10,000 VNĐ."
      }
    ],
    "cid": 1,
    "img": "./guitar.jpg",
    "text1": "Giao hàng trong phạm vi 6 km trị giá 60,000 VNĐ",
    "text2": "Tặng 2 phím đàn trị giá 20,000 VNĐ.",
    "text3": "Tặng ty chỉnh cần trị giá 10,000 VNĐ."
  }





}
