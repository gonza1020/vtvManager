import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CostumerComponent } from './components/costumer/costumer.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { InspectorComponent } from './components/inspector/inspector.component';
import { VehicleInspectionComponent } from './components/vehicle-inspection/vehicle-inspection.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormVehicleComponent } from './components/form-vehicle/form-vehicle.component';
import { FormCostumerComponent } from './components/form-costumer/form-costumer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormInspectorComponent } from './components/form-inspector/form-inspector.component';

@NgModule({
  declarations: [
    AppComponent,
    CostumerComponent,
    VehicleComponent,
    InspectorComponent,
    VehicleInspectionComponent,
    FormVehicleComponent,
    FormCostumerComponent,
    FormInspectorComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'costumer', component: CostumerComponent },
      { path: 'vehicle', component: VehicleComponent },
      { path: 'vehicle-inspection', component: VehicleInspectionComponent },
      { path: 'inspector', component: InspectorComponent },
      { path: 'costumer/save', component: FormCostumerComponent },
      { path: 'inspector/save', component: FormInspectorComponent },
      { path: 'costumer/addVehicle', component: FormVehicleComponent },
    ]),
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
