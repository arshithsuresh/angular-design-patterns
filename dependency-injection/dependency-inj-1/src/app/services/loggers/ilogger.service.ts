import { Injectable } from '@angular/core';

@Injectable()
export abstract class IloggerService {
  infoLog(level: number, ...msg: any[]) {}
  warnLog(level: number, ...msg: any[]) {}
  errorLog(level: number, ...msg: any[]) {}
}
