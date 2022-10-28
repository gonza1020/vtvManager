import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Person } from 'src/app/model/Person';
import { InspectorService } from 'src/app/service/inspector.service';

@Component({
  selector: 'app-form-inspector',
  templateUrl: './form-inspector.component.html',
  styleUrls: ['./form-inspector.component.css']
})
export class FormInspectorComponent implements OnInit {

  inspectorForm = this.fb.nonNullable.group({
    dni: [''],
    name: [''],
    lastName: [''],
    email: [''],
    phoneNumber: [''],
    });

  constructor(private inspectorService: InspectorService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const formValue = this.inspectorForm.value;

    const inspector = {
      dni: formValue.dni,
      name: formValue.name,
      lastName: formValue.lastName,
      email: formValue.email,
      phoneNumber: formValue.phoneNumber,
    };

    this.saveInpsector(inspector);

    console.log({
      dni: inspector.dni,
      name: inspector.name,
      lastName: inspector.lastName,
      email: inspector.email,
      phoneNumber: inspector.phoneNumber,
    });
  }

  public saveInpsector(inspector: Person): void {
    this.inspectorService.saveInspector(inspector).subscribe(
      (response) => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }


}
