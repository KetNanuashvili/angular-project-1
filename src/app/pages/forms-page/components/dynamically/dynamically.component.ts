import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators , FormArray } from '@angular/forms';

@Component({
  selector: 'app-dynamically',
  templateUrl: './dynamically.component.html',
  styleUrl: './dynamically.component.css'
})
export class DynamicallyComponent {
  orderForm: FormGroup;
  items: FormArray;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.orderForm = this.fb.group({
      items: this.fb.array([ this.createItem() ])
    });
    console.log(this.orderForm);
    
  }

  createItem(): FormGroup {
    return this.fb.group({
      name: '',
      description: '',
      price: ''
    });
  }

  addItem(): void {
    this.items = this.orderForm.get('items') as FormArray;
    this.items.push(this.createItem());
    console.log(this.orderForm);
    
  }
}
