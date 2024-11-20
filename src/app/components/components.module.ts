import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { ContainerImgComponent } from './container-img/container-img.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    ButtonComponent,
    CardComponent,
    ContainerImgComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ButtonComponent,
    CardComponent,
    ContainerImgComponent,
    HeaderComponent
  ]
})
export class ComponentsModule { }
