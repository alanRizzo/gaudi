import { Component, OnInit } from '@angular/core';
import { FaqService } from '../../../services/faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html'
})
export class FaqComponent implements OnInit {

  faq: any[] = [];

  constructor(private _faq: FaqService) {

  }

  ngOnInit() {
    this.faq = this._faq.getFAQ();
  }

}
