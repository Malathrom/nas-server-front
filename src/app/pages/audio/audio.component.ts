import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.scss'],
})
export class AudioComponent implements OnInit {

  constructor() { }

  audioFiles = [
    {
      title: 'Joey Diaz on his friend bonehead - Joe Rogan 803',
      name: 'joey-diaz-his-friend-bonehead-from-joe-rogan-experience-803.mp3',
    },
    {
      title: 'Tool - The Pot',
      name: 'tool-the-pot.mp3',
    },
  ];

  baseUrl = '/assets/audio/';

  ngOnInit() {
    this.setUrl(this.audioFiles);
  }

  setUrl(array) {
    for (let i = 0; i < array.length; i++) {
      const item = array[i];
      item.url = this.baseUrl + item.name;
    }
  }

}
