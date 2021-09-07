import { Component } from '@angular/core';
import { freeAPiService } from './services/freeapi.service';
import { Countries } from './modules/countires';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "List of countries"
  listCountries: Countries[] | undefined;
  constructor(private _freeAPiService: freeAPiService) {}
  ngOnInit(){
    this._freeAPiService.getCountries()
    .subscribe
      ( 
        data=>{
        this.listCountries = data;
      }
    );
  }
}



