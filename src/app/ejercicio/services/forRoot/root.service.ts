import { Injectable } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Injectable()
export class RootService implements MyServiceService {

  constructor() { }

}