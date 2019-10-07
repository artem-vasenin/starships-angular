import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ShipService} from "../../ship.service";
import {IShip, IShipDetails} from "../../models";
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
  ship$: IShipDetails[];

  constructor(
    private route: ActivatedRoute,
    private shipService: ShipService
  ) {
    this.routeSubscription = route.params
      .subscribe(params => this.id = params['id']);
  }

  addDetailsItems(obj) {
    let items = [];
    for (let key in obj) {
      let value = null;
      if (Array.isArray(obj[key])
        || key === 'url'
        || key === 'films'
        || key === 'pilots') {
        continue;
      } else {
        value = obj[key];
      }
      items.push({name: key, value: value});
    }
    return items;
  };

  ngOnInit() {
    this.loading = true;
    this.sSub =  this.shipService
      .getShipById(`https://swapi.co/api/starships/${this.id}/`)
      .subscribe(data => {
        this.ship$ = this.addDetailsItems(data);
        this.loading = false;
      });
  }

  ngOnDestroy(): void {
    if (this.sSub) this.sSub.unsubscribe();
  }

}
