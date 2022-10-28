import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { VehicleInspection } from 'src/app/model/VehicleInspection';
import { VehicleInspectionService } from 'src/app/service/vehicle-inspection.service';

@Component({
  selector: 'app-vehicle-inspection',
  templateUrl: './vehicle-inspection.component.html',
  styleUrls: ['./vehicle-inspection.component.css'],
})
export class VehicleInspectionComponent implements OnInit {
  public inspections: VehicleInspection[] = [];

  constructor(private vehicleInspectionService: VehicleInspectionService) {}

  ngOnInit(): void {
    this.getInspections();
  }

  public getInspections(): void {
    this.vehicleInspectionService.getVehicleInspection().subscribe(
      (response: VehicleInspection[]) => {
        this.inspections = response;
      },
      (error: HttpErrorResponse) => {
        alert(error);
      }
    );
  }
}
