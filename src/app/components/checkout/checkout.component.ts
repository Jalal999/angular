import { Component, OnInit, Input } from '@angular/core';
import { ComponentRendering } from '@sitecore-jss/sitecore-jss-angular';
import { CartItemType } from '../../services/cart/cart.service';
import { CartService } from '../../services/cart/cart.service';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ThankDialogComponent } from '../thank-dialog/thank-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  @Input() rendering: ComponentRendering;
  public items: CartItemType[];
  public totalCost: number;
  private emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]+$/;
  public showDialog: boolean = false;

  constructor(private cartService: CartService, public thankDialog: MatDialog) { }

  ngOnInit() {
    // remove this after implementation is done
    console.log('checkout component initialized with component data', this.rendering);
    this.items = this.cartService.getCartItems();
    this.totalCost = this.cartService.getTotalCost();
  }

  checkoutForm = new FormGroup({
    email: new FormControl('', Validators.pattern(this.emailRegex)),
    confirmEmail: new FormControl('', Validators.required),
    nameSurname: new FormControl('', Validators.pattern("^([a-zA-Z]{2,}\\s[a-zA-Z]{1,}'?-?[a-zA-Z]{1,}\\s?([a-zA-Z]{1,})?)"))
  }, { validators: this.validateConfirmEmail });

  private validateConfirmEmail(ac: AbstractControl): Validators | null {
    if (ac.value['email'] === ac.value['confirmEmail']) {
      ac.get('confirmEmail')?.setErrors(null);
    }
    else {
      ac.get('confirmEmail')?.setErrors({ 'mismatch': true });
    }
    return null;
  }

  public hasError(errorKey: string): boolean {
    if (this.checkoutForm.controls['email'].hasError(errorKey) ||
      this.checkoutForm.controls['confirmEmail'].hasError(errorKey) ||
      this.checkoutForm.controls['nameSurname'].hasError(errorKey)) {
        return true;
    } else return false;
  }

  onSubmit() {
    this.thankDialog.open(ThankDialogComponent);
    this.cartService.cleanCart();
  }
}