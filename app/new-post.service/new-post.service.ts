/* 
 * Copyright (C) 2016 ikerllorens
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import {Injectable} from '@angular/core' 
import {Http, Response, Headers, RequestOptions} from '@angular/http'

import {Main} from '../main-app/main-app'
import {MainScreenService} from '../main-app.service/main-app.service'
import {CoralTypeResponse} from '../classes/PostObject.class/PostObject.class'

import { Subject }    from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable'
import '../rxjs-operators'


@Injectable() 

export class NewPostService {
  private coralTypesObservable: Subject<CoralTypeResponse> = new Subject < CoralTypeResponse>()
    coralTypesObservable$: Observable<CoralTypeResponse> = this.coralTypesObservable.asObservable()
    
    constructor(private http: Http, mainScreenService: MainScreenService) {
        
    }
    
    
    
    //TODO: hacer prototipo de funcion en MainScreenService
    private extractData(res: Response) {
        console.info('Response: ' + res.text())
        let responseJSON = res.json();    
        return responseJSON;
    }
    
     public getCoralTypes() {
       
        let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8'});
        let options = new RequestOptions({ headers: headers });
        
        this.http.get(Main.serverUrl + 'getTipCorales.php', options).map(this.extractData).subscribe(
        CoralTypes => {
          
            if(CoralTypes.success) {
                //console.info('CoralTypes.data: ' + CoralTypes.datos[0].text)
                this.coralTypesObservable.next(CoralTypes)
            } else {
                console.error("Could not fetch CoralTypes because: " + CoralTypes.reason)
            }
        });
    }
    
      

} 
