import { Component, OnInit } from '@angular/core';
import { PARTNERS } from '../data/mock_partners';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  partners = PARTNERS;

  constructor() { }

  ngOnInit(): void {
  }

}
