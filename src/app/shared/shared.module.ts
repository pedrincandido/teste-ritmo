import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InputComponent } from './input/input.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { SelectComponent } from './select/select.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    InputComponent,
    NavbarComponent,
    SelectComponent,
    RadioButtonComponent,
    FooterComponent,
  ],
  imports: [CommonModule],
  exports: [
    InputComponent,
    NavbarComponent,
    SelectComponent,
    RadioButtonComponent,
    FooterComponent,
  ],
})
export class SharedModule {}
