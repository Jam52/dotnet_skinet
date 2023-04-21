import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class BusyService {
  busyRequsyCount = 0

  constructor(private spinnerService: NgxSpinnerService) { }

  busy() {
    this.busyRequsyCount ++
    this.spinnerService.show(undefined, {
      type: 'timer',
      bdColor: 'rgba(255,255,255,0.7)',
      color: '#333333'
    })
  }

  idle() {
    this.busyRequsyCount--
    if (this.busyRequsyCount <= 0 ) {
      this.busyRequsyCount = 0
      this.spinnerService.hide()
    }
  }
}
