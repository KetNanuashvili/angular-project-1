import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { ServiceService } from '../../../../services/service.service';
interface dataInterface {
  id: number,
  img:string,
  title: string,
  longText: string
}
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
  public data: dataInterface[]=[];

  constructor(private serviceService: ServiceService){

  }

  ngOnInit(): void{
    this.data=this.serviceService.data;
    console.log(this.serviceService.data);
    
  }
  // public data: dataInterface[]=[
  //   {
  //     id:1,
  //     img: '../../../../../assets/burger.svg',
  //     title: 'interface design 1',
  //     longText: 'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the f Lorem Ipsum'
  //   },
  //   {
  //     id:2,
  //     img: '../../../../../assets/pizza.svg',
  //     title: 'interface design 2',
  //     longText: 'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the f Lorem Ipsum'
  //   },
  //   {
  //     id:3,
  //     img: '../../../../../assets/fries.svg',
  //     title: 'interface design 3',
  //     longText: 'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the f Lorem Ipsum'
  //   },
  //   {
  //     id:4,
  //     img: '../../../../../assets/ice-cream.svg',
  //     title: 'interface design 4',
  //     longText: 'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the f Lorem Ipsum'
  //   },
  //   {
  //     id:5,
  //     img: '../../../../../assets/spagetti.svg',
  //     title: 'interface design 5',
  //     longText: 'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the f Lorem Ipsum'
  //   },
  //   {
  //     id:6,
  //     img: '../../../../../assets/spagetti.svg',
  //     title: 'interface design 6',
  //     longText: 'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the f Lorem Ipsum'
  //   },
  // ] ;

}
