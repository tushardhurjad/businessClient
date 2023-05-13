import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { log } from 'console';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
  }
  userName = new FormControl('');
  pass = new FormControl(''); 
  responseArray=new Array<any>();
  arr:any[]=[];
  
  constructor(private loginService:LoginService){}



  loginValidation() {

    this.loginService.validate(this.userName.value,this.pass.value).subscribe(responce=>{  
      console.log(responce.title);    
    })
  }

}
