import { Component, OnInit } from '@angular/core';

import {footerImages} from '../../../assets';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public images = footerImages;

  constructor() { }

  ngOnInit(): void {
  }

}
