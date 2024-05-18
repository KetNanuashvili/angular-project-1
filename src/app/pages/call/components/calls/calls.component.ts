import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CallsService } from '../../../../services/calls.service';

@Component({
  selector: 'app-calls',
  templateUrl: './calls.component.html',
  styleUrl: './calls.component.css'
})
export class CallsComponent implements OnInit {
  public data: any[]=[];
  constructor( private callsService: CallsService){

  }
  ngOnInit(): void{
    this.callsService.getData().subscribe((res)=>{
      this.data=res;
      console.log(this.data);
      
    })
  }

  // delete(item: { id: number; }){
  //   console.log(item);
  //   this.callsService.deleteItem(item.id).subscribe((res)=>{
  //     console.log(res);
      
  //   })
  // }

}
