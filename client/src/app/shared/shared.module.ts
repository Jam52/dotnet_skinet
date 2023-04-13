import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PaginationHeaderComponent } from './pagination-header/pagination-header.component';
import { PaginationNavigationComponent } from './pagination-navigation/pagination-navigation.component';

@NgModule({
  declarations: [
    PaginationHeaderComponent,
    PaginationNavigationComponent
  ],
  imports: [CommonModule, PaginationModule.forRoot()],
  exports: [PaginationModule, PaginationHeaderComponent, PaginationNavigationComponent],
})
export class SharedModule {}
