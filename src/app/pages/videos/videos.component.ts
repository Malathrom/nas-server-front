import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
})
export class VideosComponent implements OnInit {

  constructor() { }

  videoFiles = [
    {
      title: '♂ EZ4Van ♂',
      name: 'vivon.mp4',
    },
  ];

  baseUrl = '/assets/videos/';

  ngOnInit() {
    this.setUrl(this.videoFiles);
  }

  setUrl(array) {
    for (let i = 0; i < array.length; i++) {
      const item = array[i];
      item.url = this.baseUrl + item.name;
    }
  }

}
