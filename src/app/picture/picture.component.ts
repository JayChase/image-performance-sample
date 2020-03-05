import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss']
})
export class PictureComponent implements OnInit {
  formats = ['webp', 'jpg'];

  breakpoints: [string, number][] = [
    ['(max-width: 599.99px)', 300],
    ['(min-width: 1920px)', 600],
    ['(min-width: 960px) and (max-width: 1279.99px)', 960],
    ['(min-width: 1280px) and (max-width: 1919.99px)', 1280]
  ];

  src = '';

  constructor() {}

  ngOnInit(): void {}
}
