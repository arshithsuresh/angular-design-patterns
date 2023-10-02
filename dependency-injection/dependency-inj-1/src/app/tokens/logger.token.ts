import { Inject, InjectionToken } from '@angular/core';
import { IloggerService } from '../services/loggers/ilogger.service';
import { ConsoleLoggerService } from '../services/loggers/console-logger.service';

var LOGGER_TOKEN = new InjectionToken<IloggerService>('Logger', {
  providedIn: 'root',
  factory: () => {
    return new ConsoleLoggerService();
  },
});

export default LOGGER_TOKEN;
