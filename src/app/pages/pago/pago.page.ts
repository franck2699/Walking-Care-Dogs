import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.page.html',
  styleUrls: ['./pago.page.scss'],
})
export class PagoPage implements OnInit {
pag;
  constructor(public router:Router) { }
  
  btnclick() {
    this. router.navigateByUrl('/'+this.pag);
  }
  ngOnInit() {
  }  

}
