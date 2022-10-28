import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { VehicleDto } from 'src/app/model/VehicleDto';
import { VehicleService } from 'src/app/service/vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css'],
})
export class VehicleComponent implements OnInit {
  public vehicles: VehicleDto[] = [];

  constructor(private vehicleService: VehicleService) {}

  ngOnInit(): void {
    this.getVehicles();
  }

  public getVehicles(): void {
    this.vehicleService.getVehicles().subscribe(
      (response: VehicleDto[]) => {
        this.vehicles = response;
      },
      (error: HttpErrorResponse) => {
        alert(error);
      }
    );
  }
}
