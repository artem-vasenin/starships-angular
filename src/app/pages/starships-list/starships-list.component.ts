import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
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
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.scss']
})
export class StarshipsListComponent implements OnInit, OnDestroy {
  search: string;
  private routeSubscription: Subscription;
  ships$: IShip[];
  loading: boolean = false;
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

  constructor(
    private shipService: ShipService,
    private route: ActivatedRoute,
  ) {
    this.routeSubscription = this.route.paramMap
      .subscribe(params => {
        this.search = params.get('search');
        this.searchShips(this.search);
      });
  }

  static getShipId(url) {
    const segments = url.split('/');
    return Number(segments[segments.length - 2]);
  }

  changePage(url) {
    this.loading = true;
    this.pNextSub = this.shipService.changePage(url)
      .subscribe(data => {
        this.ships$ = data.results.map(item => {
          return {
            ...item,
            id: StarshipsListComponent.getShipId(item.url),
          }
        });
        this.next = data.next;
        this.previous = data.previous;
        this.loading = false;
      });
  }

  searchShips(search) {
    this.sSub =  this.shipService.getAllShips(search)
      .subscribe(data => {

        this.ships$ = data.results.map(item => {
          return {
            ...item,
            id: StarshipsListComponent.getShipId(item.url),
          }
        });
        this.next = data.next;
        this.previous = data.previous;
      });
  }

  ngOnInit() {
    this.searchShips('null');
  }

  ngOnDestroy(): void {
    if (this.sSub) this.sSub.unsubscribe();
    if (this.pNextSub) this.pNextSub.unsubscribe();
  }

}
