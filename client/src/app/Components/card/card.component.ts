import { Component, OnInit, Input } from '@angular/core';
import User from 'src/app/models/User';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

@Input() userData: any;

  constructor() { }

  ngOnInit(): void {
  }

}
