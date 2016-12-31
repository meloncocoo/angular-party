import { Component, OnInit }  from '@angular/core';

import { LiveService, QrCode } from './live.service';

@Component({
  selector: 'check-in',
  templateUrl: 'check-in.component.html'
})
export class CheckInComponent implements OnInit {
  public qrCode: QrCode;

  constructor(private liveService: LiveService) { }

  ngOnInit() {
    this.getQrCodeUrl(1);
  }

  getQrCodeUrl(id: number) {
    this.liveService.getQrCode(id).then(qrCode => {
      this.qrCode = qrCode;
    }, err => {
      alert(err);
    });
  }
}