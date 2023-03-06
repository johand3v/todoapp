import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  registerForm:FormGroup = new FormGroup({});

  constructor(){}

  ngOnInit(): void {
  this.registerForm = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    name: new FormControl('',[Validators.required, Validators.minLength(5)]),
    lastName: new FormControl('',[Validators.required, Validators.minLength(5)]),
    phone: new FormControl('',[Validators.required, Validators.minLength(5)]),
    aboutMe: new FormControl('',[Validators.required, Validators.minLength(5)]),

    //password: new FormControl('', [Validators.required,Validators.minLength(5)]),
    //passwordConfirm: new FormControl('',[Validators.required, Validators.minLength(5)])

      },
      {
       validators:passwordMatchValidator
      }
    )
  }






}

function passwordMatchValidator(formCurrent:AbstractControl | FormGroup):any {
  const valuePassword = formCurrent.get('password')?.value;
  const valuePasswordConfirm = formCurrent.get('passwordConfirm')?.value;
  return (valuePassword === valuePasswordConfirm) ? null : {'mismatch': true};
}

