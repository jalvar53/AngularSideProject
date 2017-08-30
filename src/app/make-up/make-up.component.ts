import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-make-up',
  templateUrl: './make-up.component.html',
  styleUrls: ['./make-up.component.css']
})
export class MakeUpComponent implements OnInit {

  makeups = [
    { link: 'makeup1.jpg',
      name: 'Maquillaje #1' },
    { link: 'makeup2.jpg',
      name: 'Maquillaje #2' },
    { link: 'makeup3.jpg',
      name: 'Maquillaje #3' },
    { link: 'makeup4.jpg',
      name: 'Maquillaje #4' },
    { link: 'makeup5.jpg',
      name: 'Maquillaje #5' },
    { link: 'makeup6.jpg',
      name: 'Maquillaje #6' },
    { link: 'makeup7.jpg',
      name: 'Maquillaje #7' },
    { link: 'makeup8.jpg',
      name: 'Maquillaje #8' },
    { link: 'makeup9.jpg',
      name: 'Maquillaje #9' },
    { link: 'makeup10.jpg',
      name: 'Maquillaje #10' },
    { link: 'makeup11.jpg',
      name: 'Maquillaje #11' }
  ];

  itemsPerRow = 3;
  rows = Array.from(
    Array(Math.ceil(this.makeups.length / this.itemsPerRow)).keys()
  )

  constructor() { }

  ngOnInit() {
  }

}
