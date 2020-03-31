import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }  from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { TixInterface } from '../models/tix-interface';
import { InfoInterface } from '../models/info-interface';
import { UserWService } from "./user-w.service";

@Injectable({
  providedIn: 'root'
})
export class DataApiService {
	info: Observable<any>;
	tixs: Observable<any>;
	tix: Observable<any>;
  constructor(
  	public _uw:UserWService,
  	private http: HttpClient, 
  	private authService:AuthService
  	) {}
  	headers : HttpHeaders = new HttpHeaders({
  		"Content-Type":"application/json",
  		Authorization: this.authService.getToken()
  		});
	getAllTixs(){
		const url_api = 'http://192.168.1.2:3025/api/tixes?filter[where][status]=activated';
		return this.http.get(url_api);
	}
	getInfo(){
		const url_api=`http://192.168.1.2:3025/api/infos/`;
		this.info = this.http.get(url_api);
		return (this.info);
	}
}