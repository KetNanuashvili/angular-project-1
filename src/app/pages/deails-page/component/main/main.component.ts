import { Component } from '@angular/core';

interface dataInterface {
  id: number,
  img:string,
  title: string
}
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  public data: dataInterface[]=[
    {
      id:1,
      img: '../../../../../assets/burger.svg',
      title: 'interface design 1'
    },
    {
      id:2,
      img: '../../../../../assets/pizza.svg',
      title: 'interface design 2'
    },
    {
      id:3,
      img: '../../../../../assets/fries.svg',
      title: 'interface design 3'
    },
    {
      id:4,
      img: '../../../../../assets/ice-cream.svg',
      title: 'interface design 4'
    },
    {
      id:4,
      img: '../../../../../assets/spagetti.svg',
      title: 'interface design 4'
    },
    {
      id:4,
      img: '../../../../../assets/spagetti.svg',
      title: 'interface design 4'
    },
    
  ]
}
