import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {Router} from "@angular/router";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  faSearch = faSearch;
  search = '';

  constructor(private route: Router) { }

  submit() {
    this.route.navigate([`/starships-list/${this.search ? this.search : 'null'}`]);
    this.search = '';
  }

  ngOnInit() { }
}
