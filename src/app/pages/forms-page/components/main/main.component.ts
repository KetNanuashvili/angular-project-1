import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
   myForm:FormGroup;

   constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }


  onSubmit(form: FormGroup){
    // console.log('valid?', this.myForm.valid);
    // console.log('name', this.myForm.value.firstName);
    // console.log('email', this.myForm.value.email);
    // console.log('message', this.myForm.value.message);
console.log(form, this.myForm);

    
  }
}
