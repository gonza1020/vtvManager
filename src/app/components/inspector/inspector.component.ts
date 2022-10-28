import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Inspector } from 'src/app/model/Inspector';
import { InspectorService } from 'src/app/service/inspector.service';

@Component({
  selector: 'app-inspector',
  templateUrl: './inspector.component.html',
  styleUrls: ['./inspector.component.css']
})
export class InspectorComponent implements OnInit {

  public inspectors: Inspector[] = [];

  constructor(private inspectorService: InspectorService) { }

  ngOnInit(): void {
    this.getInspectors();
  }

  public getInspectors(): void{
    this.inspectorService.getInspectors().subscribe(
      (response: Inspector[])=>{
        this.inspectors = response;
      },
      (error: HttpErrorResponse) =>{
        alert(error);
      }
    )
  }

}
