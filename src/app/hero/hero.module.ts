import { HeroComponent } from './hero.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HeroComponent],
  imports: [CommonModule],
  exports: [HeroComponent],
})
export class HeroModule {}
