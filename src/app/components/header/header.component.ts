import { Component, OnInit } from '@angular/core';
import {headerImages} from '../../../assets';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public images = headerImages;

  constructor() { }

  ngOnInit(): void {
  }

}
