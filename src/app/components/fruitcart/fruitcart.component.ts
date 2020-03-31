import { Component, OnInit } from '@angular/core';
import { UserWService } from "../../services/user-w.service";
import { DataApiService } from '../../services/data-api.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { TixInterface } from '../../models/tix-interface'; 

@Component({
  selector: 'app-fruitcart',
  templateUrl: './fruitcart.component.html',
  styleUrls: ['./fruitcart.component.css']
})
export class FruitcartComponent implements OnInit {

  constructor(
  	public _uw:UserWService,
  	private dataApi: DataApiService,
  	private router: Router,
  	private location: Location
  	) { }
   loadAPI = null;  
  url = "assets/assetsfruit/js/magnific-popup.min.js";
  url2 = "assets/assetsfruit/js/popper.min.js";
  url3 = "assets/assetsfruit/js/scripts.js";

  ngOnInit() {
  	 if(this._uw.numProd<1){
  	// this.router.navigate(['/']);

  }
	if (this._uw.loaded==true){
	    this.loadAPI = new Promise(resolve => {
        this.loadScript();
        this.loadScript2();
        this.loadScript3();
        });
      }
    this._uw.loaded=true;
  }
  public minus(index){
  	let id=index;
    if(this._uw.car[id].quantity>1){      
    this._uw.car[id].quantity=this._uw.car[index].quantity-1;
    this._uw.subTotal=this._uw.subTotal-(1*this._uw.car[id].globalPrice);
    }
  }
  public plus(index){
  	let id=index;
    this._uw.car[id].quantity=this._uw.car[index].quantity+1;
    this._uw.subTotal=this._uw.subTotal+(1*this._uw.car[id].globalPrice);
  }
    remove(i){
  this._uw.subTotal=this._uw.subTotal-(this._uw.car[i].quantity*this._uw.car[i].globalPrice);
  this._uw.car.splice(i, 1);
  this._uw.numProd=this._uw.numProd-1;
  if(this._uw.numProd<1){
  	this.router.navigate(['/']);

  }
}

  public loadScript() {
    let node = document.createElement("script");
    node.src = this.url;
    node.type = "text/javascript";
    node.async = true;
    node.charset = "utf-8";
    document.getElementsByTagName("head")[0].appendChild(node);
  }
  public loadScript2() {
    let node = document.createElement("script");
    node.src = this.url2;
    node.type = "text/javascript";
    node.async = true;
    node.charset = "utf-8";
    document.getElementsByTagName("head")[0].appendChild(node);
  }
  public loadScript3() {
    let node = document.createElement("script");
    node.src = this.url3;
    node.type = "text/javascript";
    node.async = true;
    node.charset = "utf-8";
    document.getElementsByTagName("head")[0].appendChild(node);
  }
}
