import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  brand = 'Gaudí';
  slogan = 'Calidad Impresa';

  constructor() { }

  ngOnInit() {
  }

}
