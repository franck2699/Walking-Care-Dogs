import { Component, OnInit } from '@angular/core';
import{ NavController } from '@ionic/angular';
import { RegisterPage } from '../register/register.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public navCtrl: NavController, private router:Router) { }
  email:string;
  password:string;
  ngOnInit() {
  }
  gologin(){
    console.log("Username: " + this.email);
    console.log("Password: " + this.password);
    

        this.router.navigateByUrl('/home');
    
  
    
  }
}
