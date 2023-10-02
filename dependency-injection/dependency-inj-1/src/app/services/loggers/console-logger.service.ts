import { Injectable } from '@angular/core';
import { IloggerService } from './ilogger.service';
import { leveledMessage } from '../../functions/level-logger';

@Injectable()
export class ConsoleLoggerService implements IloggerService {
  private constructMessage(level: number, ...msg: any[]) {
    return leveledMessage(level, msg);
  }
  infoLog(level: number = 0, ...msg: any[]): void {
    let message = this.constructMessage(level, msg);
    console.info(message);
  }
  warnLog(level: number = 0, ...msg: any[]): void {
    let message = this.constructMessage(level, msg);
    console.warn(message);
  }
  errorLog(level: number = 0, ...msg: any[]): void {
    let message = this.constructMessage(level, msg);
    console.error(message);
  }
}
