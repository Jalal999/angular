import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
// import { StyleguideSpecimenComponent } from './shared/styleguide-specimen/styleguide-specimen.component';
import { JssModule } from '@sitecore-jss/sitecore-jss-angular';

/*
  This module is imported by the generated app-components.module.ts.
  You can use this module to provide shared Angular components that are not
  JSS components, etc to the generated module.

  Don't want code generation? See ./.gitignore for instructions to turn it off.
*/
@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    JssModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
    // StyleguideSpecimenComponent
  ],
  declarations: [
    // StyleguideSpecimenComponent
  ],
})
export class AppComponentsSharedModule { }
