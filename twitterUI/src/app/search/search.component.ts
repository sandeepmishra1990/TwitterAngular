import { Component, OnInit } from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  private TwitterUserId:any;

  constructor() { }

  ngOnInit() {
  }

}
