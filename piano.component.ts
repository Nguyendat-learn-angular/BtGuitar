import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-piano',
    templateUrl: './piano.component.html',
    styleUrls: ['./piano.component.css']
})
export class PianoComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }



    piano = {
        "id": 2,
        "productname": "Boston GP-156 PE",
        "price": 735000000,
        "description": "Đàn Piano Boston GP-156 PE âm thanh tao nhã dành cho những con người tinh te",
        "newfeature": [
            {
                "text": "Giao hàng trong phạm vi 6 km trị giá 60,000 VNĐ"
            },
            {
                "text": "Tặng 2 phím đàn trị giá 20,000 VNĐ."
            },
            {
                "text": "Tặng ty chỉnh cần trị giá 10,000 VNĐ."
            }
        ],
        "cid": 2,
        "img": "piano.jpg",
        "text1": "Giao hàng trong phạm vi 6 km trị giá 60,000 VNĐ",
        "text2": "Tặng 2 phím đàn trị giá 20,000 VNĐ.",
        "text3": "Tặng ty chỉnh cần trị giá 10,000 VNĐ."
    }

}
