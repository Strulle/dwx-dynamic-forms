import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadiogroupComponent } from './radiogroup/radiogroup.component';
import { PropertiesPipe } from './modifiers/form-properties.pipe';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    ReactiveFormsModule,
  ],
  declarations: [
    InputComponent,
    CheckboxComponent,
    RadiogroupComponent,
    PropertiesPipe,
  ],
  exports: [
    InputComponent,
    CheckboxComponent,
    RadiogroupComponent,
    PropertiesPipe,
  ],
})
export class DynamicFormsModule {}
