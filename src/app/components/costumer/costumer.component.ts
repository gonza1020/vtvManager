import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Costumer } from 'src/app/model/Costumer';
import { CostumerService } from 'src/app/service/costumer.service';

@Component({
  selector: 'app-costumer',
  templateUrl: './costumer.component.html',
  styleUrls: ['./costumer.component.css']
})
export class CostumerComponent implements OnInit {

  public costumers: Costumer[] = [];

  constructor(private costumerService: CostumerService) {}

  ngOnInit(): void {
    this.getCostumers();
  }

  public getCostumers(): void {
    this.costumerService.getCostumers().subscribe(
      (response: Costumer[]) => {
        this.costumers = response;
      },
      (error: HttpErrorResponse) => {
        alert(error);
      }
    );
  }
}
