import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { INet } from '../models/models';
import { NetsService } from '../services/nets.service';

@Component({
  selector: 'hamradio-club-angularnx-net-list',
  templateUrl: './net-list.component.html',
  styleUrls: ['./net-list.component.scss']
})
export class NetListComponent implements OnInit, OnDestroy {
  netList: INet[] = [];
  errorMessage = '';
  sub!: Subscription;

  constructor(private netsService : NetsService) { }

  ngOnInit(): void {
    this.sub = this.netsService.getNetList().subscribe(
      {next: r => this.netList = r,
      error: err => this.errorMessage = err}
    );
  }

  ngOnDestroy() : void {
    this.sub.unsubscribe();
  }

}
