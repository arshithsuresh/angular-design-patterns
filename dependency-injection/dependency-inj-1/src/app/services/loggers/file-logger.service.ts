import { Injectable } from '@angular/core';

@Injectable()
export class FileLoggerService {
  private constructMessage(msg: any[]) {
    return '[ File Logger ] :: ' + msg;
  }
  infoLog(level: number = 0, ...msg: any[]): void {
    let message = this.constructMessage(msg);
    console.info(message);
  }
  warnLog(level: number = 0, ...msg: any[]): void {
    let message = this.constructMessage(msg);
    console.warn(message);
  }
  errorLog(level: number = 0, ...msg: any[]): void {
    let message = this.constructMessage(msg);
    console.error(message);
  }
}
