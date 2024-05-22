import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CallsService } from '../../../../services/calls.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { text } from 'express';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-calls',
  templateUrl: './calls.component.html',
  styleUrl: './calls.component.css'
})
export class CallsComponent implements OnInit, OnDestroy{
  public data: any[]=null;
  public form: FormGroup;
  subscription: Subscription = new Subscription();

  constructor( private callsService: CallsService, private fb:FormBuilder){

  }
  ngOnInit(): void{
 this.getData();
 this.form=this.fb.group({

  text:['', []]
 })
  }

  delete(item: { id: number; }){
    this.subscription.add(
   // console.log(item);
   this.callsService.deleteItem(item.id).subscribe((res)=>{
    // console.log(res);
      
      this.getData();
      // console.log(this.getData);
  })
    )
 
  }
  getData(){
    this.callsService.getData().subscribe((res)=>{
      this.data=res.data;
      console.log(this.data);
      
  });
}
activatedItem(item: any){
  this.subscription.add(
    this.callsService.activateItem(item).subscribe((res)=>{
      console.log(res);
      if(res.status==='ok'){
        this.getData();
        
      }
    })
  )

}

deactivatedItem(item: any){
  this.subscription.add(
    this.callsService.deactivateItem(item).subscribe((res)=>{
      console.log(res);
      if(res.status==='ok'){
        this.getData();
        
      }
    })
  )

}

trackByFn(index: any){
  return index
}

sebmetedForm(form: FormGroup){
  console.log(form);
  if(form.valid){
    console.log(form.value);
    this.callsService.createItem(form.value).subscribe((res)=>{
      console.log(res);
      if(res.status==='ok'){
        this.getData();
        this.form.reset();
      }
    })
  }
  
}

ngOnDestroy(): void{
  this.subscription.unsubscribe();
}

}
