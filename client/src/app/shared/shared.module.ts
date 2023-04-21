import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PaginationHeaderComponent } from './pagination-header/pagination-header.component';
import { PaginationNavigationComponent } from './pagination-navigation/pagination-navigation.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [PaginationHeaderComponent, PaginationNavigationComponent],
  imports: [CommonModule, PaginationModule.forRoot(), CarouselModule.forRoot()],
  exports: [
    PaginationModule,
    PaginationHeaderComponent,
    PaginationNavigationComponent,
    CarouselModule
  ],
})
export class SharedModule {}
