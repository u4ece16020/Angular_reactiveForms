import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angForms';
  UserForms;
  data:Array<Object>=[];
  keyData:Array<string>=[];
  key;
  constructor(){
    this.UserForms=new FormGroup({
      'firstname':new FormControl('',Validators.required),
      'lastname':new FormControl('',Validators.required),
      'gender':new FormControl('',Validators.required),
      // 'gender':new FormControl('',Validators.required),
      'email':new FormControl('',[Validators.required,Validators.email]),
      'address1':new FormControl('',Validators.required),
      'address2':new FormControl('',Validators.required),
      'city':new FormControl('',Validators.required),
      'state':new FormControl('',Validators.required),
      'pin':new FormControl('',Validators.required)
    })
  };
  SubmitData(){
    this.data.push(this.UserForms.value);
    this.data.forEach((element)=>{
      this.key=Object.keys(element);
    });
    this.UserForms.reset();
    console.log(this.data);
    console.log(this.key);
  }
}
