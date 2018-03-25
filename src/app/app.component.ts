import { Component } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  balance = 0;
  form:FormGroup;
  constructor(public formBuiler:FormBuilder){
    this.form = this.formBuiler.group({
      number:['',[Validators.required]],
      type:['',[Validators.required]]
    });
  }

  onSubmit(){
    let type = this.form.controls.type.value;
    let number = this.form.controls.number.value;
    if(type == "income"){
      this.balance = this.balance + number;
    }else if(type == "expense"){
      this.balance = this.balance - number;
    }
    
  }
}
