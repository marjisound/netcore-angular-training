import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


// Note: when a new component is created, 
// it needs to be imported and included inthe app module as well
@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  // property values of type any
  values: any;
  // inject httpclient service 
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getValues();
  }

  getValues(){
    this.http.get('http://localhost:60130/api/values').subscribe(response => {
      this.values = response;
    }, error => {
      console.log(error);
    });
  }
}


