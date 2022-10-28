import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { VehicleData } from 'src/app/model/VehicleData';
import { VehicleDataService } from 'src/app/service/vehicle-data.service';

@Component({
  selector: 'app-form-vehicle',
  templateUrl: './form-vehicle.component.html',
  styleUrls: ['./form-vehicle.component.css'],
})
export class FormVehicleComponent implements OnInit {
  vehicleForm = this.fb.nonNullable.group({
    vehicleType: ['', Validators.required],
    brand: ['', Validators.required],
    model: ['', Validators.required],
    cc: ['', Validators.required],
    carType: ['', Validators.required],
    doors: ['', Validators.required],
  });

  vehicleTypes: string[] = [];
  brands: string[] = [];
  models: string[] = [];

  constructor(
    private fb: FormBuilder,
    private vehicleDataService: VehicleDataService
  ) {}

  ngOnInit(): void {
    this.fetchVehicleType();
  }

  public fetchVehicleType() {
    this.vehicleDataService.getVehiclyType().subscribe(
      (response) => {
        this.vehicleTypes = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public fetchBrands(type: any) {
    console.log(type);
    this.vehicleDataService.getBrands(type).subscribe(
      (response) => {
        console.log(response);
        this.brands = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public fetchModels(brand: any) {
    console.log(brand);
    this.vehicleDataService.getModels(brand).subscribe(
      (response) => {
        this.models = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
