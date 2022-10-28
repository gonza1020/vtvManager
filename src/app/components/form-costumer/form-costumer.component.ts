import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Person } from 'src/app/model/Person';
import { CostumerService } from 'src/app/service/costumer.service';

@Component({
  selector: 'app-form-costumer',
  templateUrl: './form-costumer.component.html',
  styleUrls: ['./form-costumer.component.css'],
})
export class FormCostumerComponent implements OnInit {
  costumerForm = this.fb.nonNullable.group({
    dni: ['', Validators.pattern('[0-9]{8}')],
    name: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    costumerType: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private costumerService: CostumerService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    const formValue = this.costumerForm.value;

    const costumer = {
      dni: formValue.dni,
      name: formValue.name,
      lastName: formValue.lastName,
      email: formValue.email,
      phoneNumber: formValue.phoneNumber,
      costumerType: formValue.costumerType,
    };

    this.saveCostumer(costumer);
    alert(`CLiente ${costumer.name} guardado correctamente!`);
  }

  public saveCostumer(costumer: Person): void {
    this.costumerService.createCostumer(costumer).subscribe(
      (response) => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }
}
