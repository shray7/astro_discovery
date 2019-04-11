import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCheckboxModule, MatCardModule, MatTableModule, MatToolbarModule, MatIconModule, MatFormFieldModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatSliderModule} from '@angular/material/slider';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatTableModule, MatSlideToggleModule, MatButtonToggleModule, MatFormFieldModule,MatInputModule,
    MatToolbarModule, MatIconModule, MatTooltipModule, BrowserAnimationsModule, MatMenuModule, MatSliderModule],
  exports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatTableModule, MatSlideToggleModule,MatButtonToggleModule, MatFormFieldModule,MatInputModule,
     MatToolbarModule, MatIconModule, MatTooltipModule, BrowserAnimationsModule, MatMenuModule, MatSliderModule],
})
export class MaterialModule { }
