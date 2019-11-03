import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trong',
  templateUrl: './trong.component.html',
  styleUrls: ['./trong.component.css']
})
export class TrongComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  trong = {
    "id": 3,
    "productname": "Cymbal Meinl BCS141620",
    "price": 735000000,
    "description": "Roland V-Drum nổi tiếng khắp thế giới do âm thanh khác biệt và giàu cảm xúc. Và bây giờ, gia đình V-Drum bổ sung một sự thú vị mới với bộ trống HD-3 thế hệ mới, mở rộng khái niệm chơi trống. Bộ trống nhỏ gọn với công cụ đủ mạnh mẽ và truyền cảm mang lại sự thích thú và đủ thân thiện cho người mới chơi, các tay chơi trống và những người đam mê giải trí tại gia. Bạn không cần phải là một tay trống vẫn có thể thưởng thức trọn vẹn thiết bị thú vị, cực chất cho mọi nhà này.",
    "newfeature": [
      {
        "text": "Thiết bị V-Drum nhỏ gọn, thú vị cho tất cả các cấp độ của tay trống, và những người đam mê giải trí tại gia."
      },
      {
        "text": "Cloth-head toms giúp cảm thụ chơi nhạc tốt hơn và tăng thiết kế."
      },
      {
        "text": "Dual-trigger pads cho snare và crash/ ride để tăng khả năng chơi nhạc."
      },
      {
        "text": "Metronome với những âm thanh có thể lựa chọn và tempo có thể điều chỉnh."
      }
    ],
    "cid": 3,
    "img": "trong.jpg",
    "text1": "Thiết bị V-Drum nhỏ gọn, thú vị cho tất cả các cấp độ của tay trống, và những người đam mê giải trí tại gia.",
    "text2": "Cloth-head toms giúp cảm thụ chơi nhạc tốt hơn và tăng thiết kế.",
    "text3": "Dual-trigger pads cho snare và crash/ ride để tăng khả năng chơi nhạc.",
    "text4": "Metronome với những âm thanh có thể lựa chọn và tempo có thể điều chỉnh."
  }

}