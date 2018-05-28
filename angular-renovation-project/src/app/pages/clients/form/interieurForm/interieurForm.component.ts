import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  templateUrl: './interieurForm.component.html',
  styleUrls: ['./interieurForm.component.css']
})
export class InterieurFormComponent implements OnInit {

    public  budgetTable = new Array();
    public budget = 0;

  public ngOnInit(): void {
    this.fillTable();
}
  public fillTable() {
    $(document).ready(function() {
      for (let i = 0; i <= 100 ; i++) {
      this.budget = 500 * i;
     $('#budget').append('<option>' + this.budget + '</option>');
     }
     });
  }
}
