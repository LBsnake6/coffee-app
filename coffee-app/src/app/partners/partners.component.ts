import { Component, OnInit } from '@angular/core';
import { PARTNERS } from '../data/mock_partners';
@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {

  partners = PARTNERS;
  
  constructor() { }

  ngOnInit(): void {
  }

}
