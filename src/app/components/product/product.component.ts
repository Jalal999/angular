import { Component, OnInit, Input } from '@angular/core';
import { ComponentRendering } from '@sitecore-jss/sitecore-jss-angular';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() rendering: ComponentRendering;

  constructor() { }

  ngOnInit() {
    // remove this after implementation is done
    console.log('product component initialized with component data', this.rendering);
  }
}
