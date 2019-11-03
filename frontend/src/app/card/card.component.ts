import { Component, Input, OnInit } from '@angular/core';
import { Clue } from '../models/clue';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() clue: Clue;
  isMobile = false;

  ngOnInit() {
    if (window.screen.width === 360) { // 768px portrait
      this.isMobile = true;
    }
  }
}
