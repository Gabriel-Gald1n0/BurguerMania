import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RoutingModule } from './routing.module';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { DetailsComponent } from './details/details.component';
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './order/order.component';

import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    DetailsComponent,
    ProductComponent,
    OrderComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    ComponentsModule,
    RoutingModule,
    FormsModule
  ],
  exports: [
    HomeComponent,
    MenuComponent,
    DetailsComponent,
    ProductComponent,
    OrderComponent
  ]
})

export class ViewsModule { }
