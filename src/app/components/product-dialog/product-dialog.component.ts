import { Component, OnInit, Input } from '@angular/core';
import { ComponentRendering } from '@sitecore-jss/sitecore-jss-angular';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.css']
})
export class ProductDialogComponent implements OnInit {
  @Input() rendering: ComponentRendering;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    // remove this after implementation is done
    console.log('product-dialog component initialized with component data', this.rendering);
  }

  public closeDialog() {
    this.dialog.closeAll();
  }
}
