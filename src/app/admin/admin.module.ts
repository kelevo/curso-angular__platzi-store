import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './components/nav/nav.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TableComponent } from './components/table/table.component';

import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [ProductFormComponent, NavComponent, ProductsListComponent, DashboardComponent, TableComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    MaterialModule,
  ]
})
export class AdminModule { }
