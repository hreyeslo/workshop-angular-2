import { Component, OnInit } from "@angular/core";
import { MyServiceService } from "../../services/my-service.service";

@Component({
  selector: "app-child-component",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})
export class ChildComponent implements OnInit {
  helloWorld = "Esto no funciona";

  constructor() //private service: MyServiceService
  {}

  ngOnInit() {
    //this.helloWorld = this.service.helloWorld();
  }
}
