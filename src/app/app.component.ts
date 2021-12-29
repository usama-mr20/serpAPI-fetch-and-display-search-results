import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public fetchedResults: any = [];
  constructor(private _appService: AppService) {}

  searchString: string = '';
  isLoading = false;

  ngOnInit(): void {}

  title = 'serpapi-fetch-and-display';

  handleSearchInput(inputStr: string) {
    this.searchString = inputStr;
  }

  handleSearchBtn() {
    this.isLoading = true;
    this._appService.getResult(this.searchString).subscribe((data) => {
      if (data) {
        this.isLoading = false;
      }
      this.fetchedResults = data;
    });
  }
}
