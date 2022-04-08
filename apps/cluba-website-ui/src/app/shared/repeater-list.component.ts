import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IRepeater } from '../models/models';
import { RepeatersService } from '../services/repeaters.service';

@Component({
  selector: 'hamradio-club-angularnx-repeater-list',
  templateUrl: './repeater-list.component.html',
  styleUrls: ['./repeater-list.component.scss']
})
export class RepeaterListComponent implements OnInit, OnDestroy {
  repeaterList: IRepeater[] = [];
  errorMessage = '';
  sub!: Subscription;

  constructor(private repeatersService: RepeatersService) { }

  ngOnInit(): void {
    this.sub = this.repeatersService.getRepeaterList().subscribe(
      {next: r => this.repeaterList = r,
      error: err => this.errorMessage = err}
    );
  }

  ngOnDestroy() : void {
    this.sub.unsubscribe();
  }

}
