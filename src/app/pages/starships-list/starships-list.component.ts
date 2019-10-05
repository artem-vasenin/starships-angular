import {Component, OnDestroy, OnInit} from '@angular/core';
import {ShipService} from "../../ship.service";
import {Subscription} from "rxjs";
import {
  faSpaceShuttle,
  faRocket,
  faExchangeAlt,
  faCalendarAlt,
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';
import {IShip} from "../../models";

@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.scss']
})
export class StarshipsListComponent implements OnInit, OnDestroy {
  ships$: IShip;
  next: string;
  previous: string;
  sSub: Subscription;
  pNextSub: Subscription;
  faSpaceShuttle = faSpaceShuttle;
  faRocket = faRocket;
  faExchangeAlt = faExchangeAlt;
  faCalendarAlt = faCalendarAlt;
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;

  constructor(private shipService: ShipService) { }

  changePage(url) {
    this.pNextSub = this.shipService.changePage(url)
      .subscribe(data => {
        this.ships$ = data.results;
        this.next = data.next;
        this.previous = data.previous;
      });
  }

  ngOnInit() {
    this.sSub =  this.shipService.getAllShips()
      .subscribe(data => {
        this.ships$ = data.results;
        this.next = data.next;
        this.previous = data.previous;
      });
  }

  ngOnDestroy(): void {
    if (this.sSub) this.sSub.unsubscribe();
    if (this.pNextSub) this.pNextSub.unsubscribe();
  }

}
