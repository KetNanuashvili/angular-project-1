import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
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
export class MainComponent implements OnInit{

  public data: dataInterface[] = [];
  public item: dataInterface | undefined;
  public id: number | undefined;

  constructor(private route: ActivatedRoute,private serviceService: ServiceService){

  }

  ngOnInit(): void {
    this.data = this.serviceService.data;
    console.log(this.serviceService.data);
    
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      console.log(this.id);
      this.item = this.data.find(item => item.id === this.id);
    });
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
    
  // ]
  //   public printData:any =null;

  // constructor(private router: ActivatedRoute) {

  // }
  // ngOnInit(): void {
  //   const iD: number=parseFloat( this.router.snapshot.params.id);
  //   this.printData = this.data.find(item =>item.id=== iD);
  //   console.log(this.printData, iD);
    
  // }
}
// function predicate(value: dataInterface, index: number, obj: dataInterface[]): value is any {
//   throw new Error('Function not implemented.');
// }

