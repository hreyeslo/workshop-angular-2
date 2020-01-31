import { Injectable } from '@angular/core';

@Injectable()
export abstract class MyServiceService {

  abstract helloWorld(): string;

}