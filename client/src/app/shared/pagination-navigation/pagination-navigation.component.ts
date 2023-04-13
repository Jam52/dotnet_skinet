import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination-navigation',
  templateUrl: './pagination-navigation.component.html',
  styleUrls: ['./pagination-navigation.component.scss']
})
export class PaginationNavigationComponent {
  @Input() totalCount?: number
  @Input() pageSize?: number
  @Output() pageChanged = new EventEmitter<number>()

  onPageChanged(event: any) {
    this.pageChanged.emit(event.page)
  }
}
