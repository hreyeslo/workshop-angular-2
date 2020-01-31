import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../../services/my-service.service';

@Component({
  selector: 'app-root-component',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

  helloWorld = '';

  constructor( private service: MyServiceService) { }

  ngOnInit() {
    this.helloWorld = this.service.helloWorld();
  }

}