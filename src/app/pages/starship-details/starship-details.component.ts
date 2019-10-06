import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ShipService} from "../../ship.service";
import {IShip} from "../../models";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-starship-details',
  templateUrl: './starship-details.component.html',
  styleUrls: ['./starship-details.component.scss']
})
export class StarshipDetailsComponent implements OnInit, OnDestroy {
  private id: number;
  private routeSubscription: Subscription;
  loading: boolean = false;
  sSub: Subscription;
  ship$: IShip;

  constructor(
    private route: ActivatedRoute,
    private shipService: ShipService
  ) {
    this.routeSubscription = route.params
      .subscribe(params => this.id = params['id']);
  }

  ngOnInit() {
    this.loading = true;
    this.sSub =  this.shipService.getShipById(
      `https://swapi.co/api/starships/${this.id}/`
    )
      .subscribe(data => {
        for (let key in data) {
          if (key === 'url' || key === 'films' || key === 'pilots') {
            delete data[key];
          }
        }
        this.ship$ = { ...data };
        this.loading = false;
      });
  }

  ngOnDestroy(): void {
    if (this.sSub) this.sSub.unsubscribe();
  }

}
