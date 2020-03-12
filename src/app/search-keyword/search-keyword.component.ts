import { Component, OnInit } from '@angular/core';
// import { apiservice} from './apiservice';
import { APIServiceService } from '../apiservice.service';

@Component({
  selector: 'app-search-keyword',
  templateUrl: './search-keyword.component.html',
  styleUrls: ['./search-keyword.component.css']
})
export class SearchKeywordComponent implements OnInit {

  constructor(private apiservice: APIServiceService) {

  }

  ngOnInit(): void {

  }

  searchButton(){
    // this.apiservice.searchAPI();
    
  }
}
