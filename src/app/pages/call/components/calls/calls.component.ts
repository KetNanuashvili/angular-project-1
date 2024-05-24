import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CallsService } from '../../../../services/calls.service';

@Component({
  selector: 'app-calls',
  templateUrl: './calls.component.html',
  styleUrls: ['./calls.component.css']
})
export class CallsComponent implements OnInit, OnDestroy {
  public data: any[] = null;
  public form: FormGroup;
  subscription: Subscription = new Subscription();

  constructor(
    private callsService: CallsService,
    private fb: FormBuilder,
    private route: ActivatedRoute  // შემოგვაქვს როუტერი
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      text: ['', []]
    });
this.getData();
    // აქ გამოიყენება დატა
  
    this.route.data.subscribe(data => {
      this.data = data.resolvedData;
      console.log(this.data);
      
    });
  }

  delete(item: { id: number }) {
    this.subscription.add(
      this.callsService.deleteItem(item.id).subscribe(() => {
        this.getData();
      })
    );
  }

  getData() {
    this.callsService.getData().subscribe(res => {
      this.data = res.data;
    });
  }

  activatedItem(item: any) {
    this.subscription.add(
      this.callsService.activateItem(item).subscribe(res => {
        if (res.status === 'ok') {
          this.getData();
        }
      })
    );
  }

  deactivatedItem(item: any) {
    this.subscription.add(
      this.callsService.deactivateItem(item).subscribe(res => {
        if (res.status === 'ok') {
          this.getData();
        }
      })
    );
  }

  trackByFn(index: any) {
    return index;
  }

  submitForm(form: FormGroup) {
    if (form.valid) {
      this.callsService.createItem(form.value).subscribe(res => {
        if (res.status === 'ok') {
          this.getData();
          this.form.reset();
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
