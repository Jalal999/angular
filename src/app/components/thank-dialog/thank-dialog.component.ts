import { Component, OnInit, Input } from '@angular/core';
import { ComponentRendering } from '@sitecore-jss/sitecore-jss-angular';

@Component({
  selector: 'app-thank-dialog',
  templateUrl: './thank-dialog.component.html',
  styleUrls: ['./thank-dialog.component.css']
})
export class ThankDialogComponent implements OnInit {
  @Input() rendering: ComponentRendering;

  constructor() { }

  ngOnInit() {
    // remove this after implementation is done
    console.log('thank-dialog component initialized with component data', this.rendering);
  }
}
