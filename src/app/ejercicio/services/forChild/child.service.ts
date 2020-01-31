import { Injectable } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Injectable()
export class ChildService implements MyServiceService {

  constructor() { }

}