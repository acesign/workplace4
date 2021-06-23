import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {enableProdMode} from '@angular/core';
enableProdMode();

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  dataComing: string
  constructor(private http: HttpClient) { 
    this.dataComing = '';
  }

  ngOnInit(): void {

      this.http.get<any>('https://workplace.acesignco.com/apiv2/inventory/count')
      .subscribe(data => {
        this.dataComing = (JSON.stringify(data));
        console.log(this.dataComing);
      });

  }

}