import { MatIconModule } from '@angular/material/icon';
import { FeaturedComponent } from './featured.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CardModule } from '../card/card.module';

@NgModule({
  declarations: [FeaturedComponent],
  imports: [CommonModule, MatIconModule, HttpClientModule, CardModule],
  exports: [FeaturedComponent],
})
export class FeaturedModule {}
